import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroForum from "../components/ForumPage/HeroForum";
import ForumPost from "../components/ForumPage/ForumPost";

const ForumPage = () => {
  const [showHero, setShowHero] = useState(true);

  const handleCommentClick = (isCommentOpen) => {
    setShowHero(!isCommentOpen);
  };

  return (
    <div className="bg-secondary">
      <Navbar active="forum" />
      <div className="min-h-screen">
        {showHero && <HeroForum />} 
        <ForumPost onCommentClick={handleCommentClick} />        
      </div>
      <Footer />
    </div>
  );
};

export default ForumPage;
