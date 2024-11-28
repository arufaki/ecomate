import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import InputForm from "../components/Login/InputForm";
import WelcomeSection from "../components/Login/WelcomeSection";
import GoogleLogin from "../components/Login/GoogleLogin";

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
                <WelcomeSection />

                {/* Form Login */}
                <div className="flex-[1_50%] w-full flex flex-col items-center justify-center bg-white mobile:rounded-t-[60px] tablet:rounded-t-none mobile:pt-[28px] tablet:pt-0">
                    <div className="text-center mb-6">
                        <h1 className="font-bold text-[24px] mb-4">Masuk</h1>
                        <p className="text-[#737373] text-base">Silahkan masuk ke akun anda</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="tablet:w-[416px] tablet:px-0 mobile:max-w-[450px] mobile:w-[100%] mobile:px-[17px]">
                        <div className="">
                            <InputForm
                                id="email-label"
                                label="Email"
                                ps="ps-11"
                                type="email"
                                register={register("email", {
                                    required: "Silahkan masukkan email yang valid.",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Format email tidak valid.",
                                    },
                                })}
                                error={errors.email?.message}
                                placeholder="contoh@email.com"
                                iconStart="/assets/svg/email.svg"
                            />
                            <InputForm
                                id="password-label"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                register={register("password", {
                                    required: "Kata sandi anda tidak valid.",
                                    minLength: {
                                        value: 6,
                                        message: "Kata sandi minimal harus 6 karakter",
                                    },
                                })}
                                error={errors.password?.message}
                                placeholder="Masukkan password"
                                showPassword={showPassword}
                                togglePassword={togglePassword}
                            />
                            <p className="font-medium text-base text-center cursor-pointer mb-6">Lupa Password?</p>
                            <button
                                type="submit"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold rounded-lg border border-transparent bg-[#2E7D32] text-white hover:bg-[#256428] focus:outline-none focus:bg-[#256428] disabled:opacity-50 disabled:pointer-events-none w-full justify-center "
                            >
                                Masuk
                            </button>
                        </div>
                    </form>
                    <GoogleLogin />
                    <p className="text-base text-[#A1A1AA] my-[64px]">
                        Belum punya akun?{" "}
                        <Link to={"/register"} className="font-bold text-[#262626] cursor-pointer">
                            Daftar Akun
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
