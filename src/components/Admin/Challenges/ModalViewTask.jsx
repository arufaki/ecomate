const ModalViewTask = ({ tasks, challenge }) => {
    return (
        <dialog id="my_modal_13" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                {tasks
                    ?.sort((a, b) => a.DayNumber - b.DayNumber)
                    .map((task) => (
                        <div className="flex flex-col justify-between my-4" key={task.ID}>
                            <h1 className="font-bold text-[#404040] text-base flex-[1_55%] mb-2 underline">Misi Hari Ke-{task?.DayNumber}</h1>
                            <label htmlFor="misi-name" className="text-sm text-[#404040] font-medium">
                                Nama Misi
                            </label>
                            <input
                                id="misi-name"
                                type="text"
                                name="title"
                                value="Not Found"
                                className="py-3 px-4 block w-full text-[#1F2937] font-medium bg-white rounded-lg text-sm border outline-none placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm mb-4"
                                placeholder="Nama Misi"
                                disabled
                            />
                            <label htmlFor="misi-name" className="text-sm text-[#404040] font-medium">
                                Deskripsi Misi
                            </label>
                            <input
                                type="text"
                                name="description"
                                className="py-3 px-4 block w-full text-[#1F2937] font-medium bg-white rounded-lg text-sm border outline-none placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm"
                                placeholder="Deskripsi Misi"
                                value={task?.TaskDescription}
                                disabled
                            />
                        </div>
                    ))}

                <div className="flex flex-row items-center justify-end gap-4 mb-4">
                    <button
                        className="btn btn-success border border-[#2E7D32] btn-outline !text-[#2E7D32] hover:!bg-[#2E7D32] hover:!text-white"
                        onClick={() => {
                            document.getElementById("my_modal_13").close();
                            document.getElementById("my_modal_11").showModal();
                        }}
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ModalViewTask;
