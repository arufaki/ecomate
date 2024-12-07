import React from "react";
import women from "../../assets/png/women.png";
import comment from "../../assets/png/coment.png";
import totebag from "../../assets/png/Totebag.png";

const ForumPost = () => {
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
      commentsCount: 25,
    },
  ];

  // Data sample untuk topik terbaik bulan ini
  const topikTerbaikArray = [
    {
      title: "Gerakan Global untuk Mengurangi Plastik Sekali Pakai",
      commentsCount: "257k",
    },
    {
      title: "Inovasi Ramah Lingkungan dalam Industri Otomotif",
      commentsCount: "189k",
    },
    {
      title: "Mengurangi Emisi Karbon melalui Energi Terbarukan",
      commentsCount: "150k",
    },
  ];

  return (
    <div className="container max-w-[1280px] items-start mx-auto p-4 flex gap-6">
      {/* Bagian Postingan */}
      <div className="flex-1 flex flex-col gap-6">
        {postDataArray.map((post, index) => (
          <div
            key={index}
            className="flex flex-col bg-white justify-start items-start rounded-[16px] mb-[24px] pt-[51px] pb-[49px] px-[46px]"
          >
            <div className="flex items-start gap-4">
              {/* Foto Profil */}
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={post.user.profileImage}
                alt="Profile"
              />
              <div>
                {/* Detail User */}
                <div className="flex flex-col items-start sm:flex-row">
                  <p className="text-[14px] font-bold text-[#2E7D32]">
                    {post.user.name}
                  </p>
                  <p className="text-[14px] font-medium text-[#262626]">
                    <span className="hidden sm:inline">, </span>
                    {post.user.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Isi Postingan */}
            <div className="pl-0 sm:pl-[62px] ">
              <div className="mt-[15px] sm:mt-[-20px]">
                <h3 className="text-lg font-bold text-[#262626] tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-[16px] text-sm font-medium text-[#262626] leading-relaxed">
                  {post.content}
                </p>
              </div>

              {post.image && (
                <div className="mt-4">
                  <img
                    className="object-cover w-full rounded-lg"
                    src={post.image}
                    alt="Post Image"
                  />
                </div>
              )}
            </div>

            {/* Komentar */}
            <div className="flex justify-end items-center mt-[48px] w-full">
              <button className="flex items-center w-[140px] h-[52px] pl-[13px] pr-3 py-3.5 leading-tight tracking-tight border border-black rounded-lg gap-2 text-sm font-medium text-neutral-800">
                <img src={comment} alt="Comment" />
                Komentar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Topik Terbaik */}
      <div className="w-[477px] bg-white rounded-2xl p-[38px] hidden sm:block">
        <div className="border-b pb-4 mb-4">
          <h2 className="text-lg font-bold text-neutral-800">
            Topik Terbaik Bulan Ini
          </h2>
        </div>
        <div className="flex flex-col gap-4 pr-[42px]">
          {topikTerbaikArray.map((topik, index) => (
            <div key={index}>
              <h3 className="text-[#0771a1] text-base font-bold">
                {topik.title}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <img src={comment} alt="comment" />
                <span className="text-neutral-800 text-sm font-medium">
                  {topik.commentsCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
