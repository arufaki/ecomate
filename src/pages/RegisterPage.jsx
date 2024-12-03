import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import WelcomeSection from "../components/Login/WelcomeSection";
import InputForm from "../components/Login/InputForm";
import { Toast } from "../utils/function/toast";
import api from "../services/api";

const RegisterPage = () => {
    // State untuk show password login
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    // Mendefinisikan use Form
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    //Ketika Form disubmit jalankan fungsi OnSubmit
    const onSubmit = async (data) => {
        // Define fullname
        const userRegister = {
            ...data,
            fullName: `${data.firstName} ${data.lastName}`,
        };

        // Data for storing to API
        const registerData = {
            email: userRegister.email,
            name: userRegister.fullName,
            password: userRegister.password,
        };

        try {
            setLoading(true);
            const response = await api.post("/users/register", registerData);
            if (response.status == 201) {
                Toast.fire({
                    icon: "success",
                    title: "Registrasi Akun Berhasil",
                });
                setUserData(response);
                navigate("/login");
            } else {
                console.warn(response);
            }
        } catch (error) {
            if (error.response) {
                setError("email", { type: "server", message: error.response.data.message });
            } else {
                Toast.fire({
                    icon: "error",
                    title: "Tidak dapat terhubung ke server. Periksa koneksi Anda.",
                });
            }
        } finally {
            setLoading(false);
        }
    };

    // Toggle Show or Hide Password
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="bg-[#45BA4B]">
            <div className="flex tablet:flex-row mobile:flex-col w-full mx-auto min-h-screen">
                <WelcomeSection />
                {/* Form Login */}
                <div className="flex-[1_50%] w-full flex flex-col items-center justify-center bg-white mobile:rounded-t-[60px] tablet:rounded-t-none mobile:pt-[28px] tablet:pt-0">
                    <div className="text-center mb-6">
                        <h1 className="font-bold text-[24px] mb-4 text-[#262626]">Daftar Akun</h1>
                        <p className="text-[#A1A1AA] text-base">Buat Akun</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="tablet:w-[416px] mobile:max-w-[450px] mobile:w-[100%] mobile:px-[17px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-2 w-full tablet:mb-0  mobile:mb-[17px]">
                            <div className=" tablet:mb-0 mobilelg:mb-0 relative">
                                <InputForm
                                    id="firstname-label"
                                    label="Nama Depan"
                                    type="text"
                                    placeholder="Masukan Nama Depan"
                                    register={register("firstName", { required: "Nama Depan diperlukan" })}
                                    error={errors.firstName?.message}
                                />
                            </div>
                            <div className="relative">
                                <InputForm
                                    id="lastname-label"
                                    label="Nama Belakang"
                                    type="text"
                                    placeholder="Masukan Nama Belakang"
                                    register={register("lastName", { required: "Nama Belakang diperlukan" })}
                                    error={errors.lastName?.message}
                                />
                            </div>
                        </div>
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
                            iconStart="../src/assets/svg/email.svg"
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
                        <div className="mt-3 flex items-center mb-[17px]">
                            <div className="flex">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="checkbox border-blue-500 [--chkbg:theme(colors.blue.600)] [--chkfg:white] checked:border-blue-500 w-5 h-5 rounded-none"
                                    {...register("agreeTerms", { required: "Anda harus menyetujui syarat & ketentuan" })}
                                />
                            </div>
                            <div className="ms-3">
                                <label htmlFor="remember-me" className="text-sm text-[#262626] font-medium">
                                    Saya menyetujui syarat & ketentuan
                                </label>
                                {errors.agreeTerms && <p className="text-[#EF4444] text-xs mt-2">{errors.agreeTerms.message}</p>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold rounded-lg border border-transparent bg-[#2E7D32] text-white hover:bg-[#256428] focus:outline-none focus:bg-[#256428] disabled:opacity-50 disabled:pointer-events-none w-full justify-center"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
                                    <span className="sr-only">Loading...</span>
                                </span>
                            ) : (
                                "Daftar"
                            )}
                        </button>
                    </form>
                    <p className="text-base text-[#A1A1AA] my-[64px]">
                        Sudah punya akun?{" "}
                        <Link to={"/login"} className="font-bold text-[#262626] cursor-pointer">
                            Masuk
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
