import sendButton from "../../assets/svg/send.svg";

const InputPrompt = ({ onSubmit, register }) => {
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-[968px] px-4">
            <form className="relative" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Kirim pesan ke AI Chat"
                    className="input input-bordered input-md w-full font-normal bg-[#f9f9eb] max-[500px]:text-sm text-xl shadow-lg rounded-lg px-10 py-5 text-[#1F2937]"
                    {...register("message")}
                />
                <button>
                    <div className="absolute inset-y-6 right-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                        <img src={sendButton} alt="icon-end" />
                    </div>
                </button>
            </form>
        </div>
    );
};

export default InputPrompt;
