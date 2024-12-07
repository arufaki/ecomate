import React, { useState, useEffect } from "react";
import imageBg from "../../../assets/svg/admin-icon/image.svg";
import InputForm from "../../Login/InputForm";
import api from "../../../services/api";
import { Toast } from "../../../utils/function/toast";
const ModalView = ({ selectedUser }) => {
    const [data, setData] = useState({
        name: selectedUser?.name || "",
        address: selectedUser?.address || "",
        phone: selectedUser?.phone || "",
        gender: selectedUser?.gender || "",
    });

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleEdit = async (id, data) => {
        try {
            const response = await api.put(`/admin/users/${id}`, data);
            console.log(response);
            Toast.fire({
                icon: "success",
                title: "Sukses memperbarui data",
            })
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: "Gagal memperbarui data",
            })
        }
    };
    const handleClose = () => {
        document.getElementById("my_modal_24").close();
    };
    return (
        <dialog id="my_modal_24" className="modal">
            <div className="modal-box">
                <div className="flex flex-row items-center gap-[75px]">
                    <h1 className="font-bold text-[#404040] text-base">Foto Produk</h1>
                    <div className="flex flex-row items-center gap-8 ">
                        <div className={`border border-[#E5E7EB] rounded-2xl ${!selectedUser?.avatar_url && "p-8"}`}>
                            <img
                                src={selectedUser?.avatar_url ? selectedUser?.avatar_url : imageBg}
                                className={selectedUser?.avatar_url && "w-[120px] h-[120px] object-cover rounded-2xl"}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_55%]">Username</h1>
                    <InputForm
                        id="username-label"
                        type="text"
                        defaultValue={selectedUser?.username}
                        disabled={true}
                        placeholder="Username"
                    />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_55%]">Nama</h1>
                    <InputForm
                        id="name-label"
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Nama"
                    />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_55%]">Email</h1>
                    <InputForm
                        id="email-label"
                        type="text"
                        defaultValue={selectedUser?.email}
                        disabled={true}
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-row items-center justify-end gap-28 mb-4">
                    <h1 className="font-bold text-[#404040] text-base">Alamat</h1>
                    <textarea
                        className="textarea textarea-bordered flex-[1_70%]"
                        placeholder="Alamat"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_55%]">No telepon</h1>
                    <InputForm
                        id="phone-label"
                        type="text"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                    />
                </div>
                <div className="flex flex-row">
                    <h1 className="font-bold text-[#404040] text-base">Jenis Kelamin</h1>
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="Laki-laki"
                        className="radio radio-success ml-16 mr-2"
                        checked={data.gender === "Laki-laki"}
                        onChange={handleChange}
                    />
                    <label htmlFor="male">Laki-laki</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="Perempuan"
                        className="radio radio-success ml-16 mr-2"
                        checked={data.gender === "Perempuan"}
                        onChange={handleChange}
                    />
                    <label htmlFor="female">Perempuan</label>
                </div>
                <div className="flex flex-row items-center justify-end gap-4 mb-4 mt-5">
                    <button
                        className="btn btn-outline btn-success !text-primary border border-primary hover:!bg-primary hover:!text-white"
                        onClick={handleClose}
                    >
                        Batalkan
                    </button>
                    <button
                        className="btn btn-outline btn-success !text-white border !bg-primary hover:!text-white"
                        onClick={() => {
                            handleEdit(selectedUser?.id, data); // Kirim ID produk untuk dihapus
                            handleClose();
                        }}
                    >
                        Edit Pengguna
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ModalView;
