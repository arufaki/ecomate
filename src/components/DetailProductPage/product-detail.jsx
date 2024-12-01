import React from "react";

const ProductDetail = () => {

    const products = 
        {
            id: 1,
            name: "Tote Bag Ramah Lingkungan",
            description: "Bawa barang belanjaan atau kebutuhan harian Anda dengan Tote Bag Kain Organik yang kuat, ringan, dan ramah lingkungan. Terbuat dari bahan kain alami berkualitas tinggi, tote bag ini dirancang untuk menggantikan kantong plastik sekali pakai, membantu Anda mengurangi limbah dan menjaga lingkungan tetap bersih.",
            image: "assets/png/Totebag.png",
            price: 19900,
            impact: 
                [
                    {
                        impactName: "Mengurangi penggunaan kantong plastik hingga 80%",
                        impactDetail: "Mengurangi penggunaan kantong plastik hingga 80%"
                    }
                ],
            reviews:
                [
                    {
                        rating: 4,
                        review: "Tote bag ini sangat praktis dan ramah lingkungan. Saya sangat puas dengan kualitas bahan dan desainnya. Sangat cocok untuk kebutuhan sehari-hari."
                    },
                    {
                        rating: 5,
                        review: "Kualitas barang nya bagus, harganya murah dan untuk proses pengirimannya juga sangat cepat"
                    }
                ]
        }
        
    const [amount, setAmount] = React.useState(1);
    return (
        <div>
            <div className="flex flex-row mx-auto w-full justify-center items-center gap-2">
                <div className="w-[726px] h-[470px] bg-white rounded-lg border border-gray-200">
                    <img src={products.image} alt={products.name} className="w-[662px] h-[406px] mt-8 object-cover rounded-lg mx-auto" />
                </div>
                <div className="w-[520px] h-[470px] bg-white rounded-lg border border-gray-200">
                    <h1 className="text-3xl font-bold mt-8 ml-8">{products.name}</h1>
                    <h1 className="text-4xl font-bold mt-8 ml-8">Rp. {products.price.toLocaleString("id-ID")}</h1>
                        <div className="flex flex-row py-5 ml-8 text-primary">
                            <p className="text-sm font-bold px-6 py-2 bg-[#CCFBF1]">Terjual 16</p>
                            <p className="text-sm font-bold px-6 py-2 bg-[#CCFBF1] mx-2">Rating 4.5 (16 Ulasan)</p>
                            <p className="text-sm font-bold px-6 py-2 bg-[#CCFBF1]">Tas</p>
                        </div>
                        <div className="flex flex-row ml-8">
                        <button
                            onClick={() => setAmount(amount - 1)}
                            disabled={amount <= 1}
                            className={`text-2xl font-bold py-1 px-4  border rounded-lg transition-all duration-300 ${
                            amount <= 1 ? "bg-gray-300  text-white cursor-not-allowed" : "border-primary"
                            }`}
                        >
                            -
                        </button>
                        <input
                            onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            setAmount(isNaN(value) || value < 1 ? 1 : value); // Mencegah angka negatif
                            }}
                            type="number"
                            value={amount}
                            className="text-2xl text-center font-bold py-1 px-4 mx-2 border-none w-20 h-[60px] border-primary border rounded-lg"
                        />
                        <button
                            onClick={() => setAmount(Number(amount) + 1)} // Pastikan selalu berupa angka
                            className="text-2xl font-bold py-1 px-4 border-primary border rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            +
                        </button>
                        <h1 className="text-xl font-semibold py-1 px-1 ml-10">
                            Subtotal<br /> Rp. {(products.price * amount).toLocaleString("id-ID")}
                        </h1>
                        </div>
                    <div className="flex flex-col w-[456px] ml-8">
                        <button className="bg-primary text-white text-base font-bold py-3 text-center  mt-8 rounded-lg w-full border hover:border-primary hover:text-primary hover:bg-white transition-all duration-300">Beli sekarang</button>
                        <button className="border-primary border text-primary text-base font-bold py-3 text-center mt-3 rounded-lg hover:border-white hover:text-white hover:bg-primary transition-all duration-300">   
                            Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;