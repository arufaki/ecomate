const BubbleChat = () => {
    return (
        <>
            <div className="chat chat-end pb-8">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="assets/svg/avatar.svg" />
                    </div>
                </div>
                <div className="chat-bubble bg-[#2E7D32] text-white font-bold text-base font-nunito">Berikan rekomendasi produk ramah lingkungan!</div>
                <div className="chat-footer pt-3 flex flex-row w-full justify-end items-center gap-1">
                    <div>
                        <img src="assets/svg/checklist.svg" alt="checklist" />
                    </div>
                    <p>Sent</p>
                </div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src="assets/svg/eco-avatar.svg" />
                    </div>
                </div>
                <div className="chat-bubble bg-white text-[#1F2937] max-w-[462px]">
                    <strong>Berikut beberapa rekomendasi produk ramah lingkungan:</strong>
                    <br />
                    <strong>Floppy Straw :</strong> Topi yang Terbuat dari limbah jerami, melindungi dari sinar matahari dengan gaya trendi pilihan ideal bagi pecinta mode berkelanjutan <br />
                    <strong>Tote Bag :</strong> Terbuat dari limbah kertas yang diolah kembali, tas ini ringan, kuat, dan stylish dan inofatif. Jam tangan casual : Terbuat dari limbah karet yang
                    diolah kembali, jam ini menawarkan tampilan modern dan tahan lama. <br />
                    <strong> Sendal Jepit :</strong> Sandal jepit ini terbuat dari limbah plastik daur ulang, menawarkan kenyamanan dan ketahanan. Pilihan ini membantu melestarikan lingkungan dengan
                    mengurangi limbah dan emisi.
                </div>
                <div className="chat-footer pt-3 flex flex-row w-full items-center gap-1">
                    <div>
                        <img src="assets/svg/checklist.svg" alt="checklist" />
                    </div>
                    <p>Sent</p>
                </div>
            </div>
        </>
    );
};

export default BubbleChat;
