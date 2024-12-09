import React from "react";
 const AlamatContent = () => (
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Alamat Saya</h2>
        <div className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
            <hr />
            <textarea 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" 
            placeholder="Masukkan alamat lengkap"
            rows={4}
            ></textarea>
        </div>
        <button className='bg-primary py-3 px-4 block w-[103px] rounded-lg text-white'>
                Simpan
            </button>
        
        </div>
    </div>
    );
export default AlamatContent;