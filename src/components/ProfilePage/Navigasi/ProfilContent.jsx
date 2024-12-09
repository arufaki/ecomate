import React, { useState } from 'react';
const ProfilContent = () => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
      setSelectedGender(event.target.value);
    };
    return (
    <div className="p-6">
        <div className="space-y-4">
            <form action="">
            <div className='flex flex-row mt-2'>
                <label className="text-xl w-40 py-3 items-center">User Name</label>
                <input 
                type="text" 
                className="max-w-[484px] py-3 px-4 block w-full border-gray-200 rounded-lg text-xl" 
                placeholder="Masukkan username"
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label className="text-xl w-40 py-3 items-center">Nama</label>
                <input 
                type="text" 
                className="max-w-[484px] py-3 px-4 block w-full border-gray-200 rounded-lg text-xl" 
                placeholder="Masukkan nama lengkap"
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label className="text-xl w-40 py-3">Email</label>
                <input 
                type="email" 
                className="max-w-[484px] py-3 px-4 block w-full border-gray-200 rounded-lg text-xl" 
                placeholder="Masukkan email"
                />
            </div>
            <div className='flex flex-row mt-2'>
                <label className="text-xl w-40 py-3">No telpon</label>
                <input 
                type="number" 
                className="max-w-[484px] py-3 px-4 block w-full border-gray-200 rounded-lg text-xl" 
                placeholder="Masukkan nomer"
                />
            </div>
            <div className="flex flex-row items-center space-x-4">
      <label className="text-xl w-40 py-3">Jenis Kelamin</label>
      
      <div className="flex items-center space-x-3">
        <div className="flex">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={selectedGender === 'male'}
            onChange={handleGenderChange}
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-green-600 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-800"
          />
          <label 
            htmlFor="male" 
            className="text-md text-gray-500 ml-2 dark:text-gray-400"
          >
            Laki-laki
          </label>
        </div>

        <div className="flex">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={selectedGender === 'female'}
            onChange={handleGenderChange}
            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-green-600 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-800"
          />
          <label 
            htmlFor="female" 
            className="text-md text-gray-500 ml-2 dark:text-gray-400"
          >
            Perempuan
          </label>
        </div>
      </div>
    </div>
            <button className='bg-primary py-3 px-4 block w-[103px] rounded-lg text-white'>
                Simpan
            </button>
            </form>
        </div>
    </div>
    )
};

export default ProfilContent;