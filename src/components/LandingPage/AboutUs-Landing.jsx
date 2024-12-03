import React from "react";

const AboutUsLanding = () => {
    return (
        <div className=" bg-secondary">
            <div className="bg-primary w-11/12 md:w-[1280px] md:h-[507px] h-[522px] md:rounded-[50px] rounded-[30px] flex flex-col md:flex-row items-center justify-center mx-auto my-10">
                <div className="md:w-[578px] w-full px-14 py-5 md:p-5">
                    <p className="md:text-[18px] text-sm  text-white text-start justify-center font-semibold">About Us</p>
                    <h1 className="md:text-5xl text-xl text-white text-start justify-center font-semibold">Membantu Anda Membuat Pilihan Berkelanjutan</h1>
                    <p className="md:text-xl text-sm text-white text-start justify-center "> Di Ecomate, kami berkomitmen untuk membuat keberlanjutan menjadi lebih mudah dan terjangkau untuk semua orang.</p>
                </div>
                <div className="w-full md:w-[588px] px-5 md:px-10">
                    <div className="flex-row flex py-2">
                        <div className="bg-white md:w-[80px] md:h-[46px] w-[40px] h-[23px] rounded-full flex items-center justify-center">
                            <img src="../src/assets/svg/book-open.svg" alt="book-open" className="bg-white  rounded-full flex items-center justify-center" />
                        </div>
                        <div className="text-[#FAFAFA] mx-5 md:text-xl text-sm">
                            <h1 className="font-bold">Hidup Berkelanjutan Jadi Lebih Mudah</h1>
                            <p className=" ">Temukan berbagai produk ramah lingkungan yang sesuai dengan gaya hidup Anda.</p>
                        </div>
                    </div>
                    <div className="flex-row flex py-2">
                    <div className="bg-white md:w-[80px] md:h-[46px] w-[40px] h-[23px] rounded-full flex items-center justify-center">
                            <img src="../src/assets/svg/book-open.svg" alt="book-open" className="bg-white  rounded-full flex items-center justify-center" />
                        </div>
                        <div className="text-[#FAFAFA] mx-5 md:text-xl text-sm">
                            <h1 className="font-bold">Pemberdayaan dengan Pengetahuan</h1>
                            <p className=" ">Akses informasi terpercaya untuk memahami dan bertindak atas isu-isu lingkungan</p>
                        </div>
                    </div>
                    <div className="flex-row flex py-2">
                        <div className="bg-white md:w-[80px] md:h-[46px] w-[40px] h-[23px] rounded-full flex items-center justify-center">
                            <img src="../src/assets/svg/book-open.svg" alt="book-open" className="bg-white  rounded-full flex items-center justify-center" />
                        </div>
                        <div className="text-[#FAFAFA] mx-5 md:text-xl text-sm">
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
