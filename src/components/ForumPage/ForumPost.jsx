import React, { useState, useEffect } from "react";
import women from "../../assets/png/women.png";
import totebag from "../../assets/png/Totebag.png";
import commentIcon from "../../assets/png/coment.png";
import send from "../../assets/png/send.png";
import api from "../../services/api";
import BestTopic from "./bestTopic";
import { Link } from "react-router";
const ForumPost = () => {
    const [forums, setForums] = useState([]);

    const getForum = async () => {
        const response = await api.get("/forums");
        console.log(response.data.data);
        setForums(response.data.data);
    };
    useEffect(() => {
        try {
            getForum();
        } catch (error) {
            console.log(error);
        }
    }, []);
    // data sample

    return (
        <div className={`container max-w-[1280px] mx-auto p-4 flex gap-6 pt-[131px]]`}>
            <div className="flex-1 w-full sm:w-[778px] flex flex-col gap-6">
                {forums.map((forum, index) => (
                    <div key={index} className="bg-white rounded-[16px] mb-[24px] pt-[51px] pb-[49px] px-[46px]">
                        <div className="flex items-start gap-4">
                            <img className="w-[50px] h-[50px] rounded-full" src={forum.author.avatar_url} alt={`Profile ${forum.author.name}`} />
                            <div className="flex flex-col sm:flex-row">
                                <p className="text-[14px] font-bold text-[#2E7D32]">
                                    {forum.author.name}
                                    <span className="text-black sm:inline hidden">,{" "} </span>
                                </p>
                                <p className="text-[14px] font-medium text-[#262626]">{forum.updated_at}</p>
                            </div>
                        </div>

                        {/* Konten Post */}
                        <div className="pl-0 sm:pl-[64px] mt-0 sm:mt-[-22px]">
                            <h3 className="text-lg font-bold text-[#262626]">{forum.title}</h3>
                            <p className="mt-4 text-sm font-medium text-[#262626]">{forum.description}</p>
                            {forum.topic_image && <img className="mt-4 object-cover w-full rounded-lg" src={forum.topic_image} alt="Post" />}
                        </div>

                        {/* Tombol Komentar */}
                        <div className="flex justify-end mt-[48px]">
                            <Link
                                to={`/detail-forum/${forum.id}`}
                                className="flex items-center w-[140px] justify-between h-[52px] py-[12] px-[12px] border border-[#a1a1aa] rounded-lg gap-2 text-sm font-medium text-neutral-800"
                            >
                                <img src={commentIcon} alt="Comment" />
                                Komentar
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Topik Terbaik */}
            <BestTopic />
        </div>
    );
};

export default ForumPost;
