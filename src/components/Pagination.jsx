import React from 'react';

const Pagination = ({ 
    currentPage, 
    totalItems, 
    itemsPerPage, 
    onPageChange 
    }) => {
    // Menghitung total halaman
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="flex w-full p-6 h-[86px] items-center justify-between gap-[10px] rounded-[12px] border border-[#E5E7EB] bg-[#FAFAFA] mb-20 mt-10">
        {/* Tombol Previous */}
        <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center text-white bg-primary hover:bg-green-600 transition-all duration-300 rounded-full focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Previous"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path d="M15 18L9 12l6-6" />
            </svg>
        </button>

        {/* Tombol Nomor Halaman */}
        <div className="flex items-center gap-x-2">
            {[...Array(totalPages)].map((_, index) => (
            <button
                key={index}
                type="button"
                className={`min-h-[38px] min-w-[38px] flex justify-center items-center   hover:bg-primary hover:text-white transition-all duration-300 rounded-full focus:outline-none 
                    ${currentPage === index + 1 ? 'bg-primary text-white' : 'text-neutral-800'}`}
                onClick={() => onPageChange(index + 1)}
            >
                {index + 1}
            </button>
            ))}
        </div>

        {/* Tombol Next */}
        <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center text-white bg-primary hover:bg-green-600 transition-all duration-300 rounded-full focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Next"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path d="M9 18l6-6-6-6" />
            </svg>
        </button>
        </div>
    );
};

export default Pagination;