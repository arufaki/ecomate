import React, { useEffect } from "react";
import Avatar from "../../assets/svg/avatar.svg";
import EcoAvatar from "../../assets/svg/eco-avatar.svg";
import Checklist from "../../assets/svg/checklist.svg";
import useUserStore, { loadUserData } from "../../stores/useUserStore";

const BubbleChat = ({ chat }) => {
    const user = useUserStore((state) => state.user);

    useEffect(() => {
        loadUserData("/users/profile");
    }, []);

    return (
        <>
            {chat.map((message, index) => (
                <div
                    key={index}
                    className={`chat ${message.role === "user" ? "chat-end" : "chat-start"} pb-8`}
                >
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Avatar"
                                src={message.role === "user" ? user.avatar_url : EcoAvatar}
                            />
                        </div>
                    </div>
                    <div
                        className={`chat-bubble ${
                            message.role === "user"
                                ? "bg-[#2E7D32] text-white font-bold"
                                : "bg-white text-[#1F2937]"
                        } font-nunito text-base max-w-[462px]`}
                    >
                        {message.message}
                    </div>
                    <div className={`chat-footer pt-3 flex flex-row w-full items-start  ${message.role === "user" ? "justify-end" : "justify-start"} gap-1`}>
                        <div>
                            <img src={Checklist} alt="checklist" />
                        </div>
                        <p>Sent</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BubbleChat;
