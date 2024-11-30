import { useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../Login/InputForm";
import { Link } from "react-router";

const ResetPassword = ({ onNext }) => {
    // State untuk show password login
    const [showPassword, setShowPassword] = useState(false);

    // Mendefinisikan use Form
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        watch,
    } = useForm();

    // Memantau value password
    const password = watch("password");

    const onSubmit = async (data) => {
        console.log(data);
        onNext();
    };

    // Toggle Show or Hide Password
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="text-center mb-6 tablet:max-w-[350px] mobilelg:max-w-[350px] mobile:max-w-[310px] mx-auto">
                <div className="w-full mb-6">
                    <img src="/assets/svg/key.svg" className="mx-auto bg-[#ddf3df] p-3 rounded-full" alt="key-icon" />
                </div>
                <h1 className="font-bold text-[24px]">Buat Password Baru</h1>
                <p className="tablet:text-base mobile:text-sm mobilelg:text-base text-[#A1A1AA] mt-4 mb-6">Password baru anda harus berbeda dengan password yang digunakan sebelumnya</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="tablet:w-[416px] tablet:px-0 mobile:max-w-[450px] mobile:w-[100%] mobile:px-[17px] mx-auto">
                <InputForm
                    id="password-label"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    register={register("password", {
                        required: "Kata sandi anda tidak valid.",
                        minLength: {
                            value: 6,
                            message: "Kata sandi minimal harus 8 karakter",
                        },
                    })}
                    error={errors.password?.message}
                    placeholder="Masukkan Password"
                    showPassword={showPassword}
                    togglePassword={togglePassword}
                />
                <InputForm
                    id="password-label"
                    label="Konfirmasi Password"
                    type={showPassword ? "text" : "password"}
                    register={register("confirmpassword", {
                        required: "Kata sandi anda tidak valid.",
                        minLength: {
                            value: 6,
                            message: "Kata sandi minimal harus 8 karakter",
                        },
                        validate: (value) => value === password || "Konfirmasi password tidak cocok.",
                    })}
                    error={errors.confirmpassword?.message}
                    placeholder="Konfirmasi Password"
                    showPassword={showPassword}
                    togglePassword={togglePassword}
                />
                <button
                    type="submit"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold rounded-lg border border-transparent bg-[#2E7D32] text-white hover:bg-[#256428] focus:outline-none focus:bg-[#256428] disabled:opacity-50 disabled:pointer-events-none w-full justify-center mt-6"
                >
                    Reset Password
                </button>
            </form>
            <p className="text-base text-[#A1A1AA] my-[64px] w-full text-center">
                Sudah punya akun?{" "}
                <Link to={"/login"} className="font-bold text-[#262626] cursor-pointer">
                    Masuk
                </Link>
            </p>
        </>
    );
};

export default ResetPassword;
