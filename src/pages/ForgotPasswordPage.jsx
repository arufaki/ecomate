import WelcomeSection from "../components/Login/WelcomeSection";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import InputForm from "../components/Login/InputForm";
import GoogleLogin from "../components/Login/GoogleLogin";
import EmailSubmit from "../components/ForgotPassword/EmailSubmit";
import OtpInput from "../components/ForgotPassword/OtpInput";
import ResetPassword from "../components/ForgotPassword/ResetPassword";
import { AnimatePresence, motion } from "motion/react";
import SuccessSection from "../components/ForgotPassword/SuccessSection";

const ForgotPasswordPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
    });

    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const slideVariants = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    };

    return (
        <section className="bg-[#45BA4B]">
            <div className="flex tablet:flex-row mobile:flex-col w-full mx-auto min-h-screen">
                <WelcomeSection title="Selamat Datang di EcoMate!" />
                <div className="flex-[1_50%] w-full flex flex-col items-center justify-center bg-white mobile:rounded-t-[60px] tablet:rounded-t-none mobile:pt-[28px] tablet:pt-0">
                    <AnimatePresence>
                        {currentStep === 1 && (
                            <motion.div className="w-full" key="email" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                                <EmailSubmit formData={setFormData} onNext={() => setCurrentStep(2)} />
                            </motion.div>
                        )}
                        {currentStep === 2 && (
                            <motion.div className="w-full" key="otp" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                                <OtpInput onNext={() => setCurrentStep(3)} />
                            </motion.div>
                        )}
                        {currentStep === 3 && (
                            <motion.div className="w-full" key="resetpassword" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                                <ResetPassword onNext={() => setCurrentStep(4)} />
                            </motion.div>
                        )}
                        {currentStep === 4 && (
                            <motion.div className="w-full text-center" key="successSection" variants={slideVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                                <SuccessSection />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ForgotPasswordPage;
