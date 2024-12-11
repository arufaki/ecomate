import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroForum from "../components/ForumPage/HeroForum";
import ForumPost from "../components/ForumPage/ForumPost";
import useAuthStore from "../stores/useAuthStore";
import StickyCtaButton from "../components/StickyCtaButton";
import { useNavigate } from "react-router";
import { Toast } from "../utils/function/toast";
import api from "../services/api";
const ForumPage = () => {
  const { token } = useAuthStore();
  
  const navigate = useNavigate();
  const [forums, setForums] = useState([]);
  const [posted, setPosted] = useState(true);
  
  const handleOnPosted = (onPosted) => {
    setPosted(onPosted);
  }
  const getForum = async () => {
    try {
      const response = await api.get("/forums");
      setForums(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
    useEffect(() => {
      if(posted){
        getForum();
        setPosted(false);
      }
      
    }, [posted]);
  useEffect(() => {
    if (!token) {
      Toast.fire({
        icon: "warning",
        title: "Anda harus login terlebih dahulu",
      })
      navigate("/login");
    }
  }, [token, navigate]);
  return (
    <div className="bg-secondary">
      <Navbar active="forum" />
      <div className="min-h-screen">
        <HeroForum onPosted={handleOnPosted}/>
        <ForumPost forums={forums}/>        
      </div>
      <Footer />
      <StickyCtaButton />
    </div>
  );
};

export default ForumPage;
