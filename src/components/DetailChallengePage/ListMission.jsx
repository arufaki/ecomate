
import React from "react";
import Image from "../../assets/png/bg-mission.png";

const ListMission = () => {
    const Missions = [
        "Hari 1: Bawa Botol Minum Sendiri",
        "Hari 2: Gunakan Tas Belanja Reusable",
        "Hari 3: Tolak Sedotan Plastik",
        "Hari 4: Hindari Makanan dengan Kemasan Plastik",
        "Hari 5: Gunakan Wadah Makan Reusable",
        "Hari 6: Gunakan Alat Makan Ramah Lingkungan",
        "Hari 7: Daur Ulang atau Buat DIY dari Sampah Plastik",
    ]
    return (
        <div className="relative h-fit bg-[#37953C] mb-20 md:w-[1280px] py-10 w-[375px] items-center justify-center mx-auto rounded-[48px] overflow-hidden">
            {/* Background Image Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
                style={{ 
                    backgroundImage: `url(${Image})`,
                }}
            ></div>

            {/* Content - needs relative positioning to be above the background */}
            <div className="relative z-10">
                <div className="mx-auto rounded-[40px] md:w-[1184px] w-[335px] flex flex-col justify-center items-center">
                    <h1 className="md:text-4xl text-xl font-bold text-white my-10">Plastic-Free Week Challenge</h1>
                    <p className="md:text-xl text-base font-semibold text-primary bg-neutral-50 p-10 shadow-xl md:w-[1184px] w-[335px] rounded-[40px]"> Plastic-Free Week Challenge adalah sebuah tantangan untuk mengurangi penggunaan plastik sekali pakai selama satu minggu penuh. Melalui tantangan ini, peserta diajak untuk mengganti barang-barang plastik sehari-hari dengan alternatif yang lebih ramah lingkungan, seperti botol air stainless steel, kantong kain, dan sedotan bambu. 
                    <br /><br />Plastic-Free Week Challenge mengajak Anda untuk mengurangi penggunaan plastik sekali pakai dalam keseharian selama tujuh hari penuh. 
                    <br /><br />Ikuti tantangannya dan rasakan bagaimana satu minggu hidup tanpa plastik bisa menjadi langkah awal menuju perubahan positif jangka panjang untuk Anda dan bumi kita.
                </p>
                </div>
                <div className="w-[375px] md:w-[1280px] mx-auto rounded-[40px] flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold my-10 text-white">Daftar Misi</h1>
                    <div className="flex flex-wrap gap-6 items-center mx-auto justify-center mb-10">
                        {Missions.map((mission, index) => (
                            <div 
                                key={index} 
                                className={`bg-neutral-50 md:rounded-[40px] rounded-[20px] md:w-[576px] w-[335px] md:h-[75px] h-[72px] shadow-md p-6 transform transition-all
                                    ${Missions.length % 2 !== 0 && index === Missions.length - 1 ? '' : ''}`}
                            >
                                <div className="flex items-center">
                                    <span className="md:text-lg text-base mx-auto text-center font-semibold text-primary">
                                        {mission}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListMission;