import { useEffect, useState } from "react";
import api from "../../services/api";

const ContributeTable = ({ filteredTransaction }) => {
    const [challenges, setChallenges] = useState(null);

    const fetchChallenges = async () => {
        try {
            const response = await api.get("/challenges/active");
            setChallenges(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchChallenges();
    }, []);

    return (
        <>
            <div className="max-md:hidden">
                <h1 className="text-xl text-black font-bold px-6 mb-6">Daftar Challenge</h1>
            </div>
            {/* Table */}
            <div className="flex flex-col px-6 max-md:hidden">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            {/* Table */}
                            <table className="w-full divide-y divide-[#2E7D32] rounded-xl">
                                <thead className="bg-[#2E7D32]">
                                    <tr>
                                        <th scope="col" className="ps-6 py-3 text-start"></th>

                                        {["Nama Challenge", "Tanggal Mulai", "Tanggal Selesai", "Hadiah", "Status"].map((title, index) => (
                                            <th scope="col" className={`${index === 0 ? "pe-6" : "px-6"} py-3 text-start`} key={index}>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-bold uppercase tracking-wide text-white">{title}</span>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {filteredTransaction && filteredTransaction.length > 0 ? (
                                        filteredTransaction.map((transaction) => (
                                            <tr key={transaction.id}>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-2">
                                                        <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                            <input
                                                                type="checkbox"
                                                                className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                                id="hs-at-with-checkboxes-1"
                                                            />
                                                            <span className="sr-only">Checkbox</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="pe-6 py-2">
                                                        <p className="text-sm font-medium text-[#1F2937] cursor-pointer" title={transaction.id}>
                                                            {truncateText(transaction.id, 5)}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-2 flex flex-col">
                                                        <span className="text-sm font-medium text-[#1F2937] decoration-2 mb-1">{transaction?.details[0].product_name}</span>
                                                        {transaction?.details.length > 1 && (
                                                            <span className="text-xs font-medium text-[#6B7280] decoration-2">+ {transaction?.details.length - 1} Produk lainnya</span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <span className="text-sm font-medium text-[#1F2937]">{transaction?.created_at.split(" ")[0]}</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-2 flex flex-col">
                                                        <span className="text-sm font-medium text-[#1F2937] decoration-2 mb-1">{transaction?.name}</span>

                                                        <span className="text-xs font-medium text-[#6B7280] decoration-2">{transaction?.email}</span>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <p className="text-sm font-medium text-[#1F2937]">{formatToIDR(transaction?.total_transaction)}</p>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <p className="text-sm font-medium text-[#1F2937]">
                                                            {transaction?.payment_method === "bank_transfer" ? "Bank Transfer" : transaction?.payment_method}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-2">
                                                        <p
                                                            className={`text-sm font-medium w-fit py-1 px-2 rounded-[100px] ${
                                                                transaction.status === "pending"
                                                                    ? "text-[#019BF4] bg-[#E6F5FE] border-2 border-[#B0E0FC]"
                                                                    : transaction.status === "expire"
                                                                    ? "text-[#F05D3D] bg-[#feefec] border-2 border-[#FACDC3]"
                                                                    : "text-[#009499] bg-[#e5f4f5] border-2 border-[#B0DEDF]"
                                                            }`}
                                                        >
                                                            {transaction?.status ? transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1) : "Unknown"}
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center py-4">
                                                No data available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* End Table */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContributeTable;
