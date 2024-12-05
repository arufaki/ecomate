import { useLocation, useNavigate } from "react-router";
import useCart from "../../hooks/useCart";
import useCartStore from "../../stores/useCartStore";
import { useEffect, useState } from "react";
import { formatToIDR } from "../../utils/function/formatToIdr";

const DetailTransaction = ({ products }) => {
    const [filteredCheckout, setFilteredCheckout] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { checkout } = location.state || {};

    useEffect(() => {
        const cartIds = JSON.parse(localStorage.getItem("cart_ids"));
        if (products && cartIds.length > 0) {
            const filteredCheckout = products.filter((product) => cartIds.includes(product.id));
            setFilteredCheckout(filteredCheckout);
        }
    }, [products]);

    const handlePayment = (snapToken) => {
        console.log(snapToken);
        if (window.snap) {
            window.snap.pay(snapToken, {
                onSuccess: (result) => {
                    console.log("Payment Success:", result);
                    onClose();
                },
                onPending: (result) => {
                    console.log("Payment Pending:", result);
                    onClose();
                },
                onError: (result) => {
                    console.log("Payment Error:", result);
                    onClose();
                },
                onClose: () => {
                    console.log("Payment Popup Closed");
                    onClose();
                },
            });
        } else {
            console.error("Midtrans Snap script is not loaded!");
        }
    };

    return (
        <div className="flex-[1_50%]">
            <h1 className="mb-12 text-3xl font-bold">Ringkasan Orderan</h1>
            <div className="bg-white rounded-xl border border-[#E5E7EB]">
                <div className="px-14 py-8">
                    {/* Card Product */}
                    {filteredCheckout?.map((product) => (
                        <div className="flex flex-col gap-6 items-center border-b border-[#E5E7EB] py-[22px] lg:flex-row lg:gap-0" key={product.id}>
                            <div className="flex flex-row items-center gap-6 w-full flex-[1_80%] ">
                                <img src={product.product.images[0].image_url} className="w-[110px] h-[110px] object-cover object-center rounded-md" alt="product-image" />
                                <h1 className="text-2xl font-normal text-[#262626] lg:text-lg min-[1200px]:text-xl min-[1313px]:text-2xl">{product.product.name}</h1>
                            </div>
                            <div className="flex flex-row max-lg:w-full justify-between flex-[1_50%] max-[1300px]:flex-[1_40%] max-lg:flex-[1_35%]">
                                <h1 className="text-2xl font-normal text-[#3f2a2a] lg:text-lg min-[1200px]:text-xl min-[1313px]:text-2xl">x{product.quantity}</h1>
                                <h1 className="text-2xl font-normal text-[#262626] lg:text-lg min-[1200px]:text-xl min-[1313px]:text-2xl">{formatToIDR(product.product.price * product.quantity)}</h1>
                            </div>
                        </div>
                    ))}
                    {/* Detail Items */}
                    <div>
                        {/* Subtotal */}
                        <div className="flex flex-row justify-between w-full border-b border-[#E5E7EB] py-4">
                            <h1 className="text-2xl font-semibold text-[#262626]">Subtotal</h1>
                            <h1 className="text-2xl font-bold text-[#262626]">{formatToIDR(checkout.amount)}</h1>
                        </div>
                        {/* Courier */}
                        {/* <div className="flex flex-col justify-between items-start py-[30px] border-b border-[#E5E7EB] xl:flex-row">
                            <h2 className="font-semibold text-gray-900 text-2xl mb-6 min-[1200px]:mb-0">Pengiriman</h2>
                            <div className="flex flex-col gap-3">
                                
                                <label className="flex items-center gap-3 cursor-pointer min-[1200px]:justify-between">
                                    <input type="radio" name="shipping" value="jne" className="w-4 h-4 radio radio-success" />
                                    <span className="text-gray-700 text-lg sm:text-base font-semibold">
                                        JNE Reguler (3-6 Hari) : <span className="font-bold">Rp 25.000</span>
                                    </span>
                                </label>

                               
                                <label className="flex items-center gap-3 cursor-pointer min-[1200px]:justify-between">
                                    <input type="radio" name="shipping" value="jnt" className="w-4 h-4 radio radio-success" />
                                    <span className="text-gray-700 text-lg sm:text-base font-semibold">
                                        JNT EZ (2-3 Hari) : <span className="font-bold">Rp 21.000</span>
                                    </span>
                                </label>
                            </div>
                        </div> */}

                        {/* Koin Ecomate */}
                        <div className="flex flex-row justify-between items-center border-b border-[#E5E7EB] py-4 w-full">
                            <h2 className="font-semibold text-gray-900 text-2xl">Koin Ecomate</h2>
                            <div className="flex flex-row gap-5">
                                <input type="checkbox" className="toggle border-[#2e7d32] bg-white [--tglbg:#2e7d32] hover:bg-white" />
                                <p className="text-gray-700 text-sm sm:text-base font-semibold">12.000 Koin</p>
                            </div>
                        </div>

                        {/* Koin Ecomate */}
                        <div className="flex flex-row justify-between items-center border-b border-[#E5E7EB] py-4">
                            <h2 className="font-bold text-gray-900 text-2xl">Total</h2>
                            <h2 className="font-bold text-gray-900 text-2xl">{formatToIDR(checkout.amount)}</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button pay now */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 mt-8">
                <button className="btn btn-success !text-white bg-[#2e7d32] border-[#2e7d32] w-full text-xl font-bold" onClick={() => handlePayment(checkout.snap_token)}>
                    Bayar Sekarang
                </button>
            </div>
        </div>
    );
};

export default DetailTransaction;
