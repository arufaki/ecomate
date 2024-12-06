import React from "react";
import women from '../../assets/png/women.png';
import comment from '../../assets/png/coment.png';
import totebag from '../../assets/png/Totebag.png';

const ForumPost = () => {
  // Data sample: array untuk banyak postingan
  const postDataArray = [
    {
      user: {
        name: "Resiana",
        date: "01 Des 2024, Bandung",
        profileImage: women,
      },
      title:
        "Menurut Anda, Apa Inovasi Terbaik dalam Mendukung Lingkungan Hijau pada Tahun 2023, dan Mengapa?",
      content:
        "Dalam menghadapi tantangan perubahan iklim, berbagai inovasi hijau telah muncul untuk mendukung keberlanjutan lingkungan. Salah satu yang menarik adalah teknologi ramah lingkungan seperti energi terbarukan, pertanian pintar, atau pengelolaan limbah modern. Menurut Anda, mana yang menjadi solusi paling berpengaruh, dan bagaimana dampaknya terhadap kehidupan kita sehari-hari? Bagikan opini Anda dan mari diskusikan langkah terbaik menuju masa depan yang lebih hijau.",
      image: totebag,
      commentsCount: 33,
    },
    {
      user: {
        name: "Andi",
        date: "02 Des 2024, Jakarta",
        profileImage: women,
      },
      title: "Apa Pendapat Anda Tentang Reboisasi Perkotaan?",
      content:
        "Reboisasi tidak hanya penting di pedesaan, tetapi juga di kota-kota besar. Mari kita diskusikan bagaimana cara terbaik mengintegrasikan reboisasi ke dalam area urban untuk masa depan yang lebih hijau.",
      image: totebag,
      commentsCount: 25,
    },
    // Tambahkan data lain di sini
  ];

  return (
    <div className="container mx-auto p-4">
      {postDataArray.map((post, index) => (
        <div
          key={index}
          className="bg-white justify-center items-center rounded-[16px] mb-[24px] pt-[51px] pb-[49px] px-[46px]"
        >
          <div className="flex items-start">
            {/* Foto Profil */}
            <img
              className="w-[50px] h-[50px] rounded-full mr-[12px]"
              src={post.user.profileImage}
              alt="Profile"
            />
            <div>
              {/* Detail User */}
              <div className="flex items-center">
                <p className="text-[14px] font-bold text-[#2E7D32] ">
                  {post.user.name}
                </p>
                <p className="text-[14px] font-medium text-[#262626] ">
                  , {post.user.date}
                </p>
              </div>
              {/* Isi Postingan */}
              <div className="mt-[8px]">
                <h3 className="text-lg font-bold text-[#262626] tracking-tight ">
                  {post.title}
                </h3>
                <p className="mt-[16px] text-sm font-medium text-[#262626] leading-relaxed">
                  {post.content}
                </p>
              </div>

              {/* Gambar Postingan */}
              <div className="mt-4">
                <img
                  className="object-cover w-full h-80 rounded-lg"
                  src={post.image}
                  alt="Post Image"
                />
              </div>

              {/* Footer */}
              <div className="flex justify-end items-center mt-[48px] ">
                <button className="flex items-center w-[140px] h-[52px] pl-[13px] pr-3 py-3.5 leading-tight tracking-tight border border-black rounded-lg gap-2 text-sm font-medium text-neutral-800">
                  <img src={comment} alt="" />
                  {post.commentsCount} Komentar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div>
        <h1>Topik Populer</h1>
      </div>
    </div>
  );
};

export default ForumPost;
