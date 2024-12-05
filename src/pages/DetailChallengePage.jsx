import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/DetailChallengePage/Hero";
import Participants from "../components/DetailChallengePage/Participants";
import ListMission from "../components/DetailChallengePage/ListMission";
import Swal from "sweetalert2";
const DetailChallengePage = () => {
    const handleClick = () => {
        Swal.fire({
            title: "Ingin Mendaftarkan diri ke tantangan?",
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonText: "Tidak",
            confirmButtonText: "Ya, Daftar",
            confirmButtonColor: "#2E7D32",
            
            reverseButtons: true, // Ini akan menukar posisi tombol
            cancelButtonClass: 'swal-cancel-black', // Menambahkan kelas kustom untuk warna teks
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/detail-tantangan/id/day";
            }
        });
    };
    
    return <div className="bg-secondary ">
        <Navbar active="challenge"/>
        <div className="min-h-screen">
        <Hero onClick={handleClick}/>         
        <Participants />
        <ListMission />
        </div>
        
        <Footer />
        </div>;
        
};

export default DetailChallengePage;