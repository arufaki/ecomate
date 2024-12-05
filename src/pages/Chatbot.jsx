import "preline";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import BubbleChat from "../components/ChatbotPage/BubbleChat";
import WelcomeSection from "../components/ChatbotPage/WelcomeSection";
import InputPrompt from "../components/ChatbotPage/InputPrompt";

const Chatbot = () => {
    const { register, handleSubmit, setValue, reset } = useForm({
        defaultValues: { message: "" },
    });
    const [prompt, setPrompt] = useState(false);

    const bottom = useRef(null);

    // useEffect(() => {
    //     bottom.current.scrollIntoView({ behavior: "smooth" });
    // });

    const handleQuestionClick = (text) => {
        setValue("message", text);
    };

    const handlePrompt = (data) => {
        setPrompt(true);
        reset();
    };

    return (
        <div className="flex flex-col min-h-screen bg-secondary">
            <Navbar />

            <div className="pt-24 md:pt-40 flex flex-col w-full min-h-screen relative">
                {prompt ? (
                    <div className="max-w-[1008px] w-full mx-auto px-7 pb-56" ref={bottom}>
                        <BubbleChat />
                    </div>
                ) : (
                    <WelcomeSection handleQuestionClick={handleQuestionClick} />
                )}

                {/* Input Text */}
                <InputPrompt onSubmit={handleSubmit(handlePrompt)} register={register} />
            </div>
        </div>
    );
};

export default Chatbot;
