import React, { useState } from "react";
import { useNavigate } from 'react-router';
import Women from '../../assets/png/women.png';
import Plus from '../../assets/png/plus-icon.png';
import Location from '../../assets/png/location-on.png';
import Emote from '../../assets/png/emote.png';
import Photo from '../../assets/png/photo.png';
import UserPlus from '../../assets/png/user-plus.png';

const PostMobile = () => {
    const navigate = useNavigate();
    const [postContent, setPostContent] = useState('');

    const handleCloseMobilePage = () => {
        navigate(-1);
    };

    const handleChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleSubmitPost = () => {
        console.log('Post dikirim:', postContent);
    };

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="p-4 flex items-center justify-between relative">
                <button
                    onClick={handleCloseMobilePage}
                    className="flex items-center gap-2 text-gray-500 font-semibold absolute left-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 12H5" />
                        <path d="M12 5l-7 7 7 7" />
                    </svg>
                </button>

                <h3 className="text-lg font-bold text-center flex-1">Buat Postingan</h3>

                <button
                    onClick={handleSubmitPost}
                    className="py-1 px-4 h-[44px] hover:bg-primary bg-[#E5E7EB] text-white rounded-lg font-semibold transition-colors absolute right-4"
                >
                    Kirim
                </button>
            </div>

            <div className="flex flex-col flex-1 p-4">
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src={Women}
                        alt="User Profile"
                        className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold text-black text-base">Nama User</p>
                        <p className="text-sm text-gray-500">Posting ke semua orang</p>
                    </div>
                </div>

                <textarea
                    className="flex-1 text-sm text-gray-700 py-2 mb-4 focus:border-blue-500 focus:outline-none focus:ring-0 resize-none"
                    placeholder="Apa yang Anda pikirkan sekarang?"
                    value={postContent}
                    onChange={handleChange}
                />

                <div className="relative flex justify-end px-4 py-2 items-center gap-3">
                    <button className="w-6 h-6">
                        <img src={Photo} alt="Upload photo" />
                    </button>
                    <button className="w-6 h-6">
                        <img src={Location} alt="Attach location" />
                    </button>
                    <button className="w-6 h-6">
                        <img src={Emote} alt="Add emotion" />
                    </button>
                    <button className="w-6 h-6">
                        <img src={UserPlus} alt="Add new user" />
                    </button>
                    <button className="w-6 h-6">
                        <img src={Plus} alt="Add more" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostMobile;
