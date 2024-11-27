import React, { useEffect } from "react";
import 'preline';

const Faq = () => {
  useEffect(() => {
    window.dispatchEvent(new Event("load"));
  }, []);
  

  return (
    <div className="bg-white justify-between items-start flex px-[80px] pb-[80px]">
      <div className="p-8 w-1/2 flex flex-col h-full pt-[254px] pb-[334px]">
        <h2 className="text-lg text-[#262626] text-[18px]">FAQ</h2>
        <h1 className="text-5xl font-semibold text-[#262626] mt-2">
          Pertanyaan yang sering diajukan
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Jawaban atas pertanyaan yang paling sering diajukan.
        </p>
      </div>

      <div className="p-8 w-1/2 bg-[#2E7D32] rounded-[50px] h-auto">
        <div className="hs-accordion-group py-[80px] px-[107px]">
          <div className="hs-accordion border-b border-white" id="accordion-1">
            <button
              className="hs-accordion-toggle py-3 inline-flex items-center justify-between w-full font-semibold text-start text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-expanded="false"
              aria-controls="accordion-content-1"
            >
              <span>Accordion #1</span>
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="accordion-content-1"
              className="hs-accordion-content hidden overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="accordion-1"
            >
              <p className="text-white mt-3">
                Ini adalah konten untuk Accordion #1.
              </p>
            </div>
          </div>

          <div className="hs-accordion border-b border-white mt-4" id="accordion-2">
            <button
              className="hs-accordion-toggle py-3 inline-flex items-center justify-between w-full font-semibold text-start text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-expanded="false"
              aria-controls="accordion-content-2"
            >
              <span>Accordion #2</span> 
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="accordion-content-2"
              className="hs-accordion-content hidden overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="accordion-2"
            >
              <p className="text-white mt-3">
                Ini adalah konten untuk Accordion #2.
              </p>
            </div>
          </div>

          <div className="hs-accordion border-b border-white mt-4" id="accordion-3">
            <button
              className="hs-accordion-toggle py-3 inline-flex items-center justify-between w-full font-semibold text-start text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-expanded="false"
              aria-controls="accordion-content-3"
            >
              <span>Accordion #3</span> 
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="accordion-content-3"
              className="hs-accordion-content hidden overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="accordion-3"
            >
              <p className="text-white mt-3">
                Ini adalah konten untuk Accordion #3.
              </p>
            </div>
          </div>

          <div className="hs-accordion mt-4" id="accordion-4">
            <button
              className="hs-accordion-toggle py-3 inline-flex items-center justify-between w-full font-semibold text-start text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-expanded="false"
              aria-controls="accordion-content-4"
            >
              <span>Accordion #4</span> 
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="accordion-content-4"
              className="hs-accordion-content hidden overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="accordion-4"
            >
              <p className="text-white mt-3">
                Ini adalah konten untuk Accordion #4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
