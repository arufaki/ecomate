const OtpInput = ({ onNext }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onNext();
    };
    return (
        <>
            <div className="text-center mb-6 mx-auto max-w-[280px]">
                <div className="w-full mb-6">
                    <img src="/assets/svg/mail.svg" className="mx-auto bg-[#ddf3df] p-3 rounded-full" alt="key-icon" />
                </div>
                <h1 className="font-bold text-[24px] mb-6">Masukan Kode Verifikasi</h1>
                <p className="text-[#737373] text-base">{`Kode verifikasi telah dikirim melalui email ke resiana123@gmail.com`}</p>
            </div>

            <form onSubmit={handleSubmit} className="tablet:w-[416px] tablet:px-0 mobile:max-w-[450px] mobile:w-[100%] mobile:px-[17px] mx-auto">
                <div className="">
                    <div className="flex flex-col items-center max-w-[400px]">
                        <input
                            type="text"
                            className="text-center text-3xl font-medium text-gray-600 focus:outline-none focus:ring-0 placeholder-gray-400"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                            }}
                            maxLength={4}
                        />
                        <div className="w-full border-t-2 border-[#40b8a6]"></div>
                        <button className="bg-slate-400">Submit</button>
                    </div>
                    <p className="text-base text-[#A1A1AA] text-center mt-6 mobile:pb-40 tablet:pb-0">
                        Mohon tunggu dalam <span className="font-bold text-[#262626] cursor-pointer">23 detik </span>
                        untuk kirim ulang
                    </p>
                </div>
            </form>
        </>
    );
};

export default OtpInput;
