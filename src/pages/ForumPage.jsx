import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroForum from "../components/ForumPage/HeroForum";
import ForumPost from "../components/ForumPage/ForumPost";
import useAuthStore from "../stores/useAuthStore";
import StickyCtaButton from "../components/StickyCtaButton";
import { useNavigate } from "react-router";
import { Toast } from "../utils/function/toast";
const ForumPage = () => {
  const { token } = useAuthStore();

  const navigate = useNavigate();

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
        <HeroForum />
        <ForumPost />        
      </div>
      <Footer />
      <StickyCtaButton />
    </div>
  );
};

export default ForumPage;
