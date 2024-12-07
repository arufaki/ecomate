import { Upload } from "lucide-react";
import imageBg from "../../../assets/svg/admin-icon/image.svg";
import InputForm from "../../Login/InputForm";
import { useForm } from "react-hook-form";
import useProductForm from "../../../hooks/useProductForm";
import { useState } from "react";
import api from "../../../services/api";

const ModalEdit = ({ selectedProduct }) => {
    const { impacts } = useProductForm();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm();

    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    const onSubmit = async (data) => {
        // Buat array category_impact

        console.log(data);

        const selectedImpacts = [];
        if (data.category_impact) {
            selectedImpacts.push(data.category_impact);
        }
        if (data.category_impact_2) {
            selectedImpacts.push(data.category_impact_2);
        }

        // Persiapkan data yang akan dikirim ke API
        const processedData = {
            ...data,
            category_impact: selectedImpacts, // Pastikan category_impact dalam bentuk array
        };

        // Hapus field yang tidak diperlukan
        delete processedData.category_impact_2;

        ["price", "coin", "stock"].forEach((key) => {
            processedData[key] = parseInt(processedData[key], 10);
        });

        try {
            let imageUrl = processedData.images;

            if (image) {
                const formData = new FormData();
                formData.append("image", image);

                // Upload gambar dan dapatkan URL dari server
                const response = await api.post("/media/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                imageUrl = response.data.data.image_url; // URL gambar dari response server
                setValue("image_url", imageUrl); // Simpan URL gambar ke form
            } else {
                imageUrl = selectedProduct?.images[0].image_url;
                setValue("image_url", imageUrl);
            }

            if (!Array.isArray(processedData.images)) {
                processedData.images = [];
            }

            const existingIndex = processedData.images.findIndex((url) => url === imageUrl);

            if (existingIndex !== -1) {
                // Ganti elemen yang sudah ada
                processedData.images[existingIndex] = imageUrl;
            } else {
                // Jika tidak ada, tambahkan
                processedData.images.push(imageUrl);
            }

            console.log(processedData);

            const response = await api.put(`/products/${selectedProduct.product_id}`, processedData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <dialog id="my_modal_2" className="modal">
            <form className="modal-box" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[#404040] text-base">Foto Produk</h1>
                    <div className="flex flex-row items-center gap-8 ">
                        <div className={`border border-[#E5E7EB] rounded-2xl ${!selectedProduct?.images[0].image_url && "p-8"}`}>
                            <img
                                src={imagePreview || selectedProduct?.images[0]?.image_url || imageBg}
                                className={`${(imagePreview || selectedProduct?.images[0]?.image_url) && "w-[120px] h-[120px] object-cover rounded-2xl"}`}
                                alt="Preview"
                            />
                        </div>
                        <div>
                            <label htmlFor="file-upload" className="btn btn-success !text-white bg-[#2E7D32] border border-[#2E7D32] flex items-center gap-2">
                                <Upload />
                                Edit Foto
                            </label>
                            <input type="file" id="file-upload" className="hidden" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_55%]">Nama Produk</h1>
                    <InputForm
                        id="name-label"
                        type="text"
                        defaultValue={selectedProduct?.name}
                        register={register("name", {
                            required: "Silahkan masukkan nama product yang valid.",
                        })}
                        placeholder="Nama Produk"
                    />
                </div>

                <div className="flex flex-row items-center justify-between mb-4">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_58%]">Kategori Produk</h1>
                    <select
                        className="select w-full max-w-xs border border-[#E5E7EB]"
                        id="category-label"
                        value={selectedProduct?.category_product}
                        {...register("category_product", {
                            required: "Silakan pilih kategori produk.",
                        })}
                    >
                        <option disabled value="">
                            Pilih Kategori
                        </option>
                        <option value="Baju">Baju</option>
                        <option value="Sepatu">Sepatu</option>
                        <option value="Sandal">Sandal</option>
                        <option value="Perabot">Perabot</option>
                        <option value="Tas">Tas</option>
                        <option value="Aksesoris">Aksesoris</option>
                    </select>
                </div>

                <div className="flex flex-row items-center justify-between mb-4">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_58%]">Kategori Efek</h1>
                    <select
                        className="select w-full max-w-xs border border-slate-300"
                        id="category-impact"
                        value={impacts.find((impact) => impact.name === selectedProduct?.category_impact[0]?.impact_category.name)?.id || ""}
                        {...register("category_impact", {
                            required: "Silakan pilih impact yang valid.",
                        })}
                    >
                        <option disabled value="">
                            Dampak Terhadap Lingkungan
                        </option>
                        {impacts.map((impact) => (
                            <option key={impact.id} value={impact.id}>
                                {impact.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-row items-center justify-end mb-4">
                    <select
                        className="select w-full max-w-[302px] border border-slate-300"
                        value={impacts.find((impact) => impact.name === selectedProduct?.category_impact[1]?.impact_category.name)?.id || ""}
                        id="category-impact"
                        {...register("category_impact_2")}
                    >
                        <option disabled value="">
                            Dampak Terhadap Lingkungan
                        </option>
                        {impacts.map((impact) => (
                            <option key={impact.id} value={impact.id}>
                                {impact.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-row items-center justify-end gap-9 mb-4">
                    <h1 className="font-bold text-[#404040] text-base">Deskripsi Produk</h1>
                    <textarea
                        className="textarea textarea-bordered flex-[1_50%]"
                        placeholder="Deskripsi Produk"
                        defaultValue={selectedProduct?.description}
                        {...register("description", {
                            required: "Silahkan masukkan Deskripsi yang valid.",
                        })}
                    ></textarea>
                </div>

                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_58%]">Harga Produk</h1>
                    <InputForm
                        id="price-label"
                        type="number"
                        defaultValue={selectedProduct?.price}
                        register={register("price", {
                            required: "Silahkan masukkan Harga Produk yang valid.",
                        })}
                        placeholder="Harga Produk"
                    />
                </div>

                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_58%]">Koin Produk</h1>
                    <InputForm
                        id="price-label"
                        type="number"
                        defaultValue={selectedProduct?.coin}
                        register={register("coin", {
                            required: "Silahkan masukkan Koin Produk yang valid.",
                        })}
                        placeholder="Harga Produk"
                    />
                </div>

                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-bold text-[#404040] text-base flex-[1_58%]">Stok</h1>
                    <InputForm
                        id="price-label"
                        type="number"
                        defaultValue={selectedProduct?.stock}
                        register={register("stock", {
                            required: "Silahkan masukkan Stok yang valid.",
                        })}
                        placeholder="Harga Produk"
                    />
                </div>

                <div className="flex flex-row items-center justify-end gap-4 mb-4">
                    <span
                        className="btn btn-outline btn-success !text-[#2E7D32] border border-[#2E7D32] hover:!bg-[#2E7D32] hover:!text-white"
                        onClick={() => document.getElementById("my_modal_2").close()}
                    >
                        Kembali
                    </span>
                    <button type="submit" className="btn  btn-success !text-white !bg-[#2E7D32] border border-[#2E7D32]  hover:!text-white">
                        Edit Produk
                    </button>
                </div>
            </form>
        </dialog>
    );
};

export default ModalEdit;
