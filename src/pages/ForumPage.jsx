import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroForum from "../components/ForumPage/heroForum";
import ForumPost from "../components/ForumPage/ForumPost";

const ForumPage = () => {

    return <div className="bg-secondary ">

        <Navbar active="forum"/>
        <div className="min-h-screen"> 
          <HeroForum />
          <ForumPost/>
        </div>
        <Footer />
        </div>;
        
};

export default ForumPage;