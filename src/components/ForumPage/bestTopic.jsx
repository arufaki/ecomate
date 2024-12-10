import React from "react";
import commentIcon from "../../assets/png/coment.png";
const BestTopic = () => {
    const topikTerbaikArray = [
        { title: "Gerakan Global untuk Mengurangi Plastik Sekali Pakai", commentsCount: "257k" },
        { title: "Inovasi Ramah Lingkungan dalam Industri Otomotif", commentsCount: "189k" },
        { title: "Mengurangi Emisi Karbon melalui Energi Terbarukan", commentsCount: "150k" },
      ];
    return (
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
    );
};

export default BestTopic;