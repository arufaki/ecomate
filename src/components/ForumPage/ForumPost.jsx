import React, { useState } from "react";
import women from "../../assets/png/women.png";
import totebag from "../../assets/png/Totebag.png";
import commentIcon from "../../assets/png/coment.png";
import send from '../../assets/png/send.png';

const ForumPost = ({ onCommentClick }) => {
  // data sample
  const postDataArray = [
    {
      user: { name: "Resiana", date: "01 Des 2024, Bandung", profileImage: women },
      title: "Menurut Anda, Apa Inovasi Terbaik dalam Mendukung Lingkungan Hijau pada Tahun 2023, dan Mengapa?",
      content: "Dalam menghadapi tantangan perubahan iklim, berbagai inovasi hijau telah muncul untuk mendukung keberlanjutan lingkungan...",
      image: totebag,
      comments: [
        { user: { name: "Aulia", profileImage: women, date: "02 Des 2024" }, comment: "Inovasi energi terbarukan benar-benar jadi solusi besar!" },
        { user: { name: "Budi", profileImage: women, date: "03 Des 2024" }, comment: "Saya setuju, energi matahari sangat menjanjikan!" },
      ],
    },
    {
      user: { name: "Andi", date: "02 Des 2024, Jakarta", profileImage: women },
      title: "Apa Pendapat Anda Tentang Reboisasi Perkotaan?",
      content: "Reboisasi tidak hanya penting di pedesaan, tetapi juga di kota-kota besar...",
      comments: [
        { user: { name: "Dina", profileImage: women, date: "02 Des 2024" }, comment: "Reboisasi sangat penting untuk memperbaiki kualitas udara." },
      ],
    },
  ];

  const topikTerbaikArray = [
    { title: "Gerakan Global untuk Mengurangi Plastik Sekali Pakai", commentsCount: "257k" },
    { title: "Inovasi Ramah Lingkungan dalam Industri Otomotif", commentsCount: "189k" },
    { title: "Mengurangi Emisi Karbon melalui Energi Terbarukan", commentsCount: "150k" },
  ];

  const [visiblePostIndex, setVisiblePostIndex] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  const handleShowComments = (index) => {
    const isSamePost = index === visiblePostIndex;
    setVisiblePostIndex(isSamePost ? null : index); // Tampilkan/sembunyikan komentar
    onCommentClick(!isSamePost); // Update status HeroForum
  };

  const handleLoadMoreComments = () => setLoadMore(!loadMore);

  return (
    <div className={`container max-w-[1280px] mx-auto p-4 flex gap-6 ${visiblePostIndex !== null ? "pt-[131px]" : ""}`}>
      {/* Bagian Postingan */}
      <div className="flex-1 w-full sm:w-[778px] flex flex-col gap-6">
        {postDataArray.map((post, index) => (
          visiblePostIndex === null || visiblePostIndex === index ? (
            <div key={index} className="bg-white rounded-[16px] mb-[24px] pt-[51px] pb-[49px] px-[46px]">
              {/* Header Post */}
              <div className="flex items-start gap-4">
                <img className="w-[50px] h-[50px] rounded-full" src={post.user.profileImage} alt={`Profile ${post.user.name}`} />
                <div className="flex flex-col sm:flex-row">
                  <p className="text-[14px] font-bold text-[#2E7D32]">
                      {post.user.name}
                      <span className="text-black sm:inline hidden">,{" "} </span> 
                  </p>                  
                  <p className="text-[14px] font-medium text-[#262626]">{post.user.date}</p>
                </div>
              </div>

              {/* Konten Post */}
              <div className="pl-0 sm:pl-[64px] mt-0 sm:mt-[-22px]">
                <h3 className="text-lg font-bold text-[#262626]">{post.title}</h3>
                <p className="mt-4 text-sm font-medium text-[#262626]">{post.content}</p>
                {post.image && (
                  <img className="mt-4 object-cover w-full rounded-lg" src={post.image} alt="Post" />
                )}
              </div>

              {/* Tombol Komentar */}
              <div className="flex justify-end mt-[48px]">
                <button
                  onClick={() => handleShowComments(index)}
                  className="flex items-center w-[140px] h-[52px] py-[12] px-[12px] border border-[#a1a1aa] rounded-lg gap-2 text-sm font-medium text-neutral-800"
                >
                  <img src={commentIcon} alt="Comment" />
                  {post.comments.length} Komentar
                </button>
              </div>

              {/* Komentar */}
              {visiblePostIndex === index && (
                <div className="mt-6">
                  <div className="flex items-start gap-3">
                    <img className="w-[50px] h-[50px] rounded-full" src={post.user.profileImage} alt="Profile" />
                    <div className="relative flex-1">
                      <input
                        type="text"
                        className="py-3 px-4 block w-full border border-[#A1A1AA] rounded-xl text-sm"
                        placeholder="Tambahkan komentar"
                      />
                      <button className="absolute top-1/2 transform -translate-y-1/2 right-4">
                        <img src={send} alt="Send" className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* List Komentar */}
                  <div className="mt-4">
                    {post.comments.slice(0, loadMore ? post.comments.length : 3).map((comment, idx) => (
                      <div key={idx} className="flex items-start gap-4 mb-4">
                        <img className="w-[50px] h-[50px] rounded-full" src={comment.user.profileImage} alt={`Profile ${comment.user.name}`} />
                        <div>
                          <div className="text-base font-bold">{comment.user.name}</div>
                          <div className="text-sm text-[#8A8A8A]">{comment.user.date}</div>
                          <div className="text-sm text-[#262626]">{comment.comment}</div>
                        </div>
                      </div>
                    ))}

                    {post.comments.length > 3 && !loadMore && (
                      <button onClick={handleLoadMoreComments} className="text-blue-500 text-sm font-medium">
                        Lihat komentar lainnya
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : null
        ))}
      </div>

      {/* Topik Terbaik */}
      <div className="hidden sm:block w-full h-full sm:w-[477px] px-[38px] py-[35px] bg-white rounded-2xl p-[24px]">
        <h2 className="text-lg font-bold text-neutral-800 mb-4 border-b pb-4">Topik Terbaik Bulan Ini</h2>
        {topikTerbaikArray.map((topic, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-[#0771a1] text-base font-bold">{topic.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <img src={commentIcon} alt="Comment" />
              <span className="text-neutral-800 text-sm font-medium">{topic.commentsCount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPost;
