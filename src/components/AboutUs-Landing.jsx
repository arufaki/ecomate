import React from "react";

const AboutUsLanding = () => {
    return (
        <div className="h-screen bg-[#F9F9EB]">
            <div className="bg-[#2E7D32] w-[1280px] h-[507px] rounded-[50px] flex flex-row items-center justify-center mx-auto my-10">
                <div className="w-[578px] p-5">
                    <p className="text-[18px] text-white text-start justify-center font-semibold">About Us</p>
                    <h1 className="text-[48px] text-white text-start justify-center font-semibold">Membantu Anda Membuat Pilihan Berkelanjutan</h1>
                    <p className="text-[20px] text-white text-start justify-center "> Di Ecomate, kami berkomitmen untuk membuat keberlanjutan menjadi lebih mudah dan terjangkau untuk semua orang.</p>
                </div>
                <div className="w-[488px] px-10">
                    <div className="flex-row flex py-5">
                        <span className="bg-white w-[80px] h-[46px] rounded-full flex items-center justify-center"></span>
                        <div className="text-[#FAFAFA] mx-5 font-[20px]">
                            <h1 className="font-bold">Hidup Berkelanjutan Jadi Lebih Mudah</h1>
                            <p className=" ">Temukan berbagai produk ramah lingkungan yang sesuai dengan gaya hidup Anda.</p>
                        </div>
                    </div>
                    <div className="flex-row flex py-5">
                        <span className="bg-white w-[80px] h-[46px] rounded-full flex items-center justify-center"></span>
                        <div className="text-[#FAFAFA] mx-5 font-[20px]">
                            <h1 className="font-bold">Pemberdayaan dengan Pengetahuan</h1>
                            <p className=" ">Akses informasi terpercaya untuk memahami dan bertindak atas isu-isu lingkungan</p>
                        </div>
                    </div>
                    <div className="flex-row flex py-5">
                        <span className="bg-white w-[80px] h-[46px] rounded-full flex items-center justify-center"></span>
                        <div className="text-[#FAFAFA] mx-5 font-[20px]">
                            <h1 className="font-bold">Pantau Dampak Anda</h1>
                            <p className="">Ukur dan lacak bagaimana pilihan Anda berkontribusi pada kesehatan bumi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsLanding;
