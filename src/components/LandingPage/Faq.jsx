import React, { useEffect } from "react";
import Accordion from "./accordion";

const Faq = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("load"));
  }, []);
  const faqs = [
    {
      question: "Apa itu Ecomate?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      question: "Cara Membeli Produk melalui Ecomate?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      question: "Apa saja fitur utama dari  Ecomate?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      question: "Produk apa saja yang tersedia di Ecomate??",
      answer: "Kami menyediakan berbagai produk ramah lingkungan, mulai dari kebutuhan rumah tangga, fashion, hingga alat makan yang dapat digunakan kembali.",
    },
    {
      question: "Apakah Ecomate gratis digunakan??",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    
  ]

  return (
    <div className="bg-[#F9F9EB] ">
      <div className="justify-center items-start flex flex-col md:flex-row px-[20px] pt-10 pb-[40px] md:pb-[80px] max-w-screen-xl mx-auto">
      <div className="p-8 w-full md:w-1/2 flex flex-col text-center sm:text-left h-full pt-[80px] md:pt-[254px] pb-[100px] md:pb-[334px]">
        <h2 className="text-lg text-[#262626] text-[18px]">FAQ</h2>
        <h1 className="text-xl md:text-5xl text-[20px] md:text-[48px] font-semibold text-[#262626] mt-2">
          Pertanyaan yang sering diajukan
        </h1>
        <p className="md:text-xl text-xs text-[12px] md:text-[20px] text-gray-600 mt-4">
          Jawaban atas pertanyaan yang paling sering diajukan.
        </p>
      </div>
      <div className="p-8 w-full md:w-[689px] md:h-[707px] bg-[#2E7D32] rounded-[20px] md:rounded-[50px] h-auto">
        <div className="hs-accordion-group md:p-20  ">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="hs-accordion "
              id={`faq-accordion-${index}`}
            >
              <Accordion question={faq.question} answer={faq.answer} index={index} />
              <hr className="md:w-[425px] w-[300px] h-[1px] bg-[#2E7D32]  items-center justify-center mx-auto"></hr>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faq;
