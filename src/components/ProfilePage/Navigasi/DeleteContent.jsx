import React from 'react';

 const PrivasiContent = () => (
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Pengaturan Privasi</h2>
        <hr />
        <div className='flex flex-row justify-between'>
        <h2 className='p-5'>
            Minta Penghapusan Akun
        </h2>
        <button className='bg-primary py-3 m-3 block w-[103px] rounded-lg text-white'>
            Menghapus
        </button>
        </div>
        <hr />
    </div>
    );

export default PrivasiContent;