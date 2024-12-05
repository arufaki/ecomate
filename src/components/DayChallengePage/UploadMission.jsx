import React, { useState } from "react";
import Image from "../../assets/png/bg-mission.png";
import Coin from "../../assets/png/coin.png";
import PhotoUploadModal from './PhotoUploadModal'; // Import the new modal component
import { Link } from "react-router";
const ListMission = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            
            // Create image preview
            const reader = new FileReader();
            reader.onloadend = () => {
            setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
        };
    
        const handleUpload = () => {
            if (selectedFile) {
              // TODO: Implement actual upload logic (e.g., API call)
                setIsUploaded(true);
                
                // Programmatically close the modal
                const closeButton = document.querySelector('[data-hs-overlay="#photo-upload-modal"]');
                if (closeButton) {
                    closeButton.click();
                }
                
                // Optional: Reset state after upload
                setSelectedFile(null);
                setPreviewImage(null);
                }
            };
    
    return (
        <div className="relative h-fit bg-[#37953C] mb-20 md:w-[1280px] py-10 w-[375px] items-center justify-center mx-auto rounded-[48px] overflow-hidden">
            {/* Background Image Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 " 
                style={{ 
                    backgroundImage: `url(${Image})`,
                }}
            ></div>

            {/* Content - needs relative positioning to be above the background */}
            <div className="relative">
                <div className="mx-auto rounded-[40px] md:w-[1184px] w-[335px] flex flex-col justify-center items-center">
                    <h1 className="md:text-4xl text-xl font-bold text-white my-10 ">HARI KE 1 : Bawa Botol Minum Sendiri</h1>
                    <div className="flex flex-row gap-4 pb-10">
                        <img src={Coin} alt="" />
                        <p className="text-2xl font-bold text-white">30 Koin</p>
                    </div>
                    <div className="bg-neutral-50 rounded-[40px] md:w-[1184px] w-[335px] text-center text-primary py-10">
                        <h1 className="md:text-2xl text-base font-semibold mb-3"> 
                            Misi
                        </h1>
                        <p className="md:text-xl text-base font-semibold ">Gunakan botol air minum stainless steel atau reusable sepanjang hari. Hindari membeli air kemasan plastik.</p>
                    </div>
                    <div className="bg-neutral-50 rounded-[40px] md:w-[1184px] w-[335px] text-center text-primary py-10 mt-10">
                        <h1 className="md:text-2xl text-base font-semibold mb-3"> 
                            Ketentuan Submit
                        </h1>
                        <p className="md:text-xl text-base font-semibold ">Foto botol minum Anda di tempat kerja, kampus, atau aktivitas sehari-hari.</p>
                    </div>
                    
                    {/* Replace the button with the PhotoUploadModal */}
                    {isUploaded ? (
                        <div className="w-full gap-10 flex flex-row mt-10 text-center">
                            <Link to="/tantangan"className="w-1/2 bg-[#CCFBF1] rounded-[16px] py-5 text-primary text-lg font-bold">Lihat Tantangan</Link>
                            <Link to="/tantangan" className="w-1/2 bg-green-300 hover:cursor-not-allowed rounded-[16px] py-5 text-lg font-bold text-white">Misi Selanjutnya 04/12/2024</Link>
                        </div>
                    ):
                    (
                        <PhotoUploadModal onClick={handleUpload} onChange={handleFileChange} previewImage={previewImage} selectedFile={selectedFile} />
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default ListMission;