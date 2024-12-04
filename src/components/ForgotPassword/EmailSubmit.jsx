import { useForm } from "react-hook-form";
import InputForm from "../Login/InputForm";
import { Link } from "react-router";

const EmailSubmit = ({ formData, onNext }) => {
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
            alert("OTP Sudah Dikirim Ke Emailmu");
            formData((prev) => ({ ...prev, email: data.email }));
            onNext();
        }
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
                } else {
                    resolve({ success: true });
                }
            }, 500);
        });
    };

    return (
        <>
            <div className="text-center mb-6">
                <div className="w-full mb-6">
                    <img src="../src/assets/svg/key.svg" className="mx-auto bg-[#ddf3df] p-3 rounded-full" alt="key-icon" />
                </div>
                <h1 className="font-bold text-[24px]">Lupa Password</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="tablet:w-[416px] tablet:px-0 mobile:max-w-[450px] mobile:w-[100%] mobile:px-[17px] mx-auto">
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

export default EmailSubmit;
