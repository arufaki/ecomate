import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import Women from '../../assets/png/women.png';
import Plus from '../../assets/png/plus-icon.png';
import Location from '../../assets/png/location-on.png';
import Emote from '../../assets/png/emote.png';
import Photo from '../../assets/png/photo.png';
import UserPlus from '../../assets/png/user-plus.png';
import api from "../../services/api";
const PostMobile = () => {
    const navigate = useNavigate();
    const [postContent, setPostContent] = useState('');
    const [data, setData] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const getData = async () => {
        try {
        const response = await api.get("/users/profile");
        setData(response.data.data);
        } catch (error) {
        console.error("Error fetching profile data:", error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    const handleCloseMobilePage = () => {
        navigate(-1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("topic_image", selectedFile);
        
        try {
            const response = await api.post("/forums", formData, {
                headers: {
                "Content-Type": "multipart/form-data",
                },
        });
            setIsModalOpen(false);
            Toast.fire({
                icon: "success",
                title: "Forum berhasil dibuat",
            })
            onPosted(true);
            } catch (error) {
            Toast.fire({
                icon: "error",
                title: "Gagal membuat forum",
            })
            }
        };
        const handleImageChange = (e) => {
            const file = e.target.files[0];
                if (file) {
                const fileType = file.type;
                const fileSize = file.size;

                if (!["image/jpeg", "image/png", "image/jpg"].includes(fileType)) {
                    Toast.fire({
                    icon: "error",
                    title: "Invalid file type",
                    })
                    return;
                }
                
                if (fileSize > 1024 * 1024) {
                    Toast.fire({
                    icon: "error",
                    title: "File size exceeds the limit",
                    })
                    return;
                }

                setSelectedFile(file);
                setImagePreview(URL.createObjectURL(file));
                }
            };
    const handleSubmitPost = () => {
        console.log('Post dikirim:', postContent);
    };

    return (
        <div className="fixed h-[2000px] inset-0 bg-white z-50 flex flex-col">
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
                        src={data.avatar_url}
                        alt="User Profile"
                        className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold text-black text-base">{data.name}</p>
                        <p className="text-sm text-gray-500">Posting ke semua orang</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">
                                Judul
                                </label>
                                <input
                                type="text"
                                id="title"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-primary"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
                                Deskripsi
                                </label>
                                <textarea
                                id="description"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-primary"
                                rows="4"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                ></textarea>
                            </div>
                            {imagePreview && (
                                <div className="mb-4">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-full h-[200px] object-cover max-w-sm mx-auto rounded-md"
                                />
                                </div>
                            )}
                            <div className="relative flex px-[14px] mb-[24px] mx-[21px] items-center gap-2">
                                <div className="flex gap-2 h-[24px]">
                                <label
                                    htmlFor="photo-upload"
                                    className="flex items-center w-[24px] h-[24px] justify-center cursor-pointer"
                                >
                                    <img src={Photo} alt="photo" className="w-6 h-6" />
                                </label>
                                <input
                                    id="photo-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                                <button className="flex items-center w-[24px] h-[24px] justify-center">
                                    <img src={Emote} alt="emote" className="w-6 h-6" />
                                </button>
                                <button className="flex items-center w-[24px] h-[24px] justify-center">
                                    <img src={Plus} alt="plus" className="w-6 h-6" />
                                </button>
                                </div>
                            </div>
                            <div className="px-4 pb-4">
                                <button
                                type="submit"
                                className={`w-full px-4 py-2   text-[16px] font-bold  rounded-lg transition-colors
                                    ${title && description ? "bg-primary hover:cursor-pointer text-white" : "bg-[#E5E7EB] hover:cursor-not-allowed "}
                                    `}
                                >
                                Kirim
                                </button>
                            </div>
                            </form>
            </div>
        </div>
    );
};

export default PostMobile;
