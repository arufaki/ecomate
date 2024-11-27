import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    // State untuk show password login
    const [showPassword, setShowPassword] = useState(false);

    // Mendefinisikan use Form
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    //Ketika Form disubmit jalankan fungsi OnSubmit
    const onSubmit = async (data) => {
        const response = await fakeApiLogin(data);
        if (!response.success) {
            setError(response.error.field, { type: "server", message: response.error.message });
        } else {
            console.log(data);
            alert("Login berhasil ges");
        }
    };

    // Toggle Show or Hide Password
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Fake API Test Validation
    const fakeApiLogin = async (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (data.email !== "johndoe@gmail.com") {
                    resolve({
                        success: false,
                        error: { field: "email", message: "Email tidak ditemukan" },
                    });
                } else if (data.password !== "123456") {
                    resolve({
                        success: false,
                        error: { field: "password", message: "Kata sandi salah" },
                    });
                } else {
                    resolve({ success: true });
                }
            }, 500);
        });
    };

    return (
        <section className="bg-[#45BA4B]">
            <div className="flex tablet:flex-row mobile:flex-col w-full mx-auto min-h-screen">
                <div className="tablet:flex-[1_43%] mobile:flex-none w-full relative h-full mobile:pb-[18px] tablet:pb-0">
                    <div className="max-w-[657px] mx-auto tablet:px-10 tablet:py-[50px] mobile:px-6 mobile:py-7 tablet:h-screen mobile:h-full">
                        {/* Logo */}
                        <div className="flex flex-row items-center tablet:gap-3 mobile:gap-1 z-50">
                            <img src="/assets/webp/Logo.webp" width={48} height={48} className="mobile:w-6 mobilelg:w-9 tablet:w-12" alt="EcoMate-Logo" />
                            <h1 className="font-bold tablet:text-[26px] text-white mobilelg:text-[22px] mobile:text-base">EcoMate</h1>
                        </div>
                        {/* Content */}
                        <div className="tablet:w-[365px] mx-auto flex flex-col items-center justify-center tablet:h-[80%] mobile:pt-12 mobilelg:max-w-[450px] mobile:max-w-[250px]">
                            <h1 className="font-semibold tablet:text-[48px] mobilelg:text-[34px] mobile:text-[24px] text-center text-white mobile:leading-[32px] tablet:leading-[48px] tablet:mb-[36px] mobilelg:mb-[26px] mobile:mb-[18px] z-10">
                                Selamat Datang di EcoMate!
                            </h1>
                            <p className="text-center text-white tablet:text-lg mobilelg:text-base mobile:text-sm font-normal leading-[28px] z-10">
                                Mulai langkah hijau Anda untuk kehidupan yang lebih berkelanjutan dan bermakna!
                            </p>
                        </div>
                    </div>
                    {/* Polygon Shape */}
                    <div>
                        <img src="/assets/svg/triangle/polygon3.svg" className="absolute tablet:top-0 tablet:rotate-0 right-[35%] mobile:rotate-[-10deg] mobile:top-[-10px]" />
                        <img src="/assets/svg/triangle/Polygon1.png" className="absolute right-14 tablet:top-[15%] tablet:bottom-auto tablet:w-[57px] mobile:bottom-7 mobile:w-[38px]" />
                        <img src="/assets/svg/triangle/Polygon1.png" className="absolute bottom-[10%] tablet:right-[25%] md:block" />
                        <img
                            src="/assets/svg/triangle/bubble.png"
                            className="absolute tablet:bottom-0 tablet:top-auto tablet:rotate-0 tablet:right-auto tablet:w-[180px] mobile:rotate-180 mobile:top-0 mobile:right-0 mobile:w-[100px]"
                        />
                        <img src="/assets/svg/triangle/polygon4.png" className="absolute bottom-0 left-[50%] xl:left-[45%] md:left-[52%] tablet:block mobile:hidden" />
                    </div>
                </div>

                {/* Form Login */}
                <div className="flex-[1_50%] w-full flex flex-col items-center justify-center bg-white mobile:rounded-t-[60px] tablet:rounded-t-none mobile:pt-[28px] tablet:pt-0">
                    <div className="text-center mb-6">
                        <h1 className="font-bold text-[24px] mb-4">Masuk</h1>
                        <p className="text-[#737373] text-base">Silahkan masuk ke akun anda</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="tablet:w-[416px] mobile:max-w-[450px] mobile:w-[100%] mobile:px-[17px]">
                        <div className="">
                            <div className="w-full relative mb-[17px]">
                                <label htmlFor="email-label" className="block text-base font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email-label"
                                    className={`py-3 px-4 ps-11 block w-full rounded-lg text-sm border outline-none placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm
    ${errors.email ? "border-[#EF4444] focus:ring-[#EF4444]" : "border-gray-200 focus:border-blue-500 focus:ring-blue-500 focus:outline-blue-500"}`}
                                    placeholder="contoh@email.com"
                                    {...register("email", {
                                        required: "Silahkan masukkan email yang valid.",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Format email tidak valid.",
                                        },
                                    })}
                                />
                                {errors.email && <p className="text-[#EF4444] text-xs mt-2">{errors.email.message}</p>}
                                <div className="absolute inset-y-14 start-0 flex items-center ps-4 ">
                                    <img src="/assets/svg/email.svg" alt="email-icon" />
                                </div>
                                {errors.email && (
                                    <div className="absolute inset-y-14 right-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                                        <img src="/assets/svg/alert-circle.svg" alt="alert-email-icon" />
                                    </div>
                                )}
                            </div>
                            <div className="w-full relative mb-[17px]">
                                <label htmlFor="password-label" className="block text-base font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password-label"
                                    className={`py-3 px-4 block w-full rounded-lg text-sm border outline-none placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm
    ${errors.password ? "border-[#EF4444] focus:ring-[#EF4444]" : "border-gray-200 focus:border-blue-500 focus:ring-blue-500 focus:outline-blue-500"}`}
                                    placeholder="Masukkan password"
                                    {...register("password", {
                                        required: "Kata sandi anda tidak valid.",
                                        minLength: {
                                            value: 6,
                                            message: "Kata sandi minimal harus 6 karakter",
                                        },
                                    })}
                                />
                                {errors.password && <p className="text-[#EF4444] text-xs mt-2">{errors.password.message}</p>}
                                <div className="absolute inset-y-14 right-3 transform -translate-y-1/2 flex items-center cursor-pointer" onClick={togglePassword}>
                                    {errors.password ? (
                                        <img src="/assets/svg/alert-circle.svg" alt="alert-password-icon" />
                                    ) : showPassword ? (
                                        <img src="/assets/svg/eye.svg" alt="show-password-icon" />
                                    ) : (
                                        <img src="/assets/svg/eye-off.svg" alt="show-password-icon" />
                                    )}
                                </div>
                            </div>
                            <p className="font-medium text-base text-center cursor-pointer mb-6">Lupa Password?</p>
                            <button
                                type="submit"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold rounded-lg border border-transparent bg-[#2E7D32] text-white hover:bg-[#256428] focus:outline-none focus:bg-[#256428] disabled:opacity-50 disabled:pointer-events-none w-full justify-center "
                            >
                                Masuk
                            </button>
                        </div>
                    </form>
                    <p className="text-base text-[#A1A1AA] mt-[64px]">
                        Belum punya akun? <a className="font-bold text-[#262626] cursor-pointer">Daftar Akun</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
