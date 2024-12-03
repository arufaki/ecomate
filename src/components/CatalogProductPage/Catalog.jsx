import { useState, useEffect } from "react";
import Card from "../Card";
import Pagination from "../Pagination";
import api from "../../services/api";
import Filterbar from "./FilterBar";
import { truncateContent } from "../../hooks/useTruncates";
const Catalog = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [originalProducts, setOriginalProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const categories = ["Tas","Peralatan Makan","Sedotan","Botol"];
    useEffect(() => {
        try {
            setIsLoading(true);
            api.get("/guest/products").then((res) => {
                console.log(res.data.data.new_products);
                const resp = res.data.data.new_products
                setProducts(resp);
                setOriginalProducts(resp);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);
    const handleCategorySubmit = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        let filteredProducts = [...originalProducts]; // Gunakan data asli
    
        // Filter berdasarkan query pencarian
        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
    
        // Filter berdasarkan kategori
        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(
                (product) => product.category_product === selectedCategory
            );
        }
    
        // Urutkan produk
        if (sortOrder) {
            if (sortOrder === "low-to-high") {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (sortOrder === "high-to-low") {
                filteredProducts.sort((a, b) => b.price - a.price);
            } else if (sortOrder === "a-to-z") {
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortOrder === "z-to-a") {
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            } else if (sortOrder === "newest") {
                filteredProducts.sort((a, b) => new Date(b.update_at) - new Date(a.update_at));
            } else if (sortOrder === "oldest") {
                filteredProducts.sort((a, b) => new Date(a.update_at) - new Date(b.update_at));
            }
        }
    
        setProducts(filteredProducts); // Perbarui data yang ditampilkan
    };
    
    
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 9;
        // Hitung total halaman
        const indexOfLastProduct = currentPage * itemsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
        const totalProduct = products.length
        const totalProductCurrentPage = currentProducts.length
    return (
        <div className="md:w-[1280px] w-full  mx-auto">
            <div className="bg-[#FAFAFA] border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 md:w-[1222px] w-fit ml-3 md:mx-auto mt-10">
                <form onSubmit={handleCategorySubmit}  className="flex md:flex-row flex-col">
                <div className="md:w-[353px] w-[330px]">
                    <label htmlFor="search" className="block text-base font-bold mb-2">
                    Cari Produk
                    </label>
                    <input
                    id="search"
                    type="text"
                    placeholder="Cari Produk"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="py-3 px-4 block w-full text-[#1F2937] font-medium bg-white rounded-lg text-sm border outline-none placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm"
                    />
                </div>

                <div className="md:w-[353px] w-[330px] md:ml-10">
                    <label htmlFor="category-select" className="block text-base font-bold mb-2">
                    Kategori
                    </label>
                    <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="py-3 px-4 block w-full rounded-lg text-sm border outline-none bg-white placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 focus:outline-blue-500"
                    >
                    <option value="">Pilih Kategori</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}

                    </select>
                </div>

                <div className="md:w-[353px] w-[330px] mx-0 md:mx-5 my-5 md:my-0">
                    <label htmlFor="sort-select" className="block text-base font-bold mb-2">
                    Urutkan
                    </label>
                    <select
                    id="sort-select"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="py-3 px-4 block w-full rounded-lg text-sm border outline-none bg-white placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 focus:outline-blue-500"
                    >
                    <option value="">Pilih Urutan</option>
                    <option value="a-to-z">Nama: A ke Z</option>
                    <option value="z-to-a">Nama: Z ke A</option>
                    <option value="newest">Tanggal: Terbaru</option>
                    <option value="oldest">Tanggal: Terlama</option>
                    <option value="low-to-high">Harga: Rendah ke Tinggi</option>
                    <option value="high-to-low">Harga: Tinggi ke Rendah</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="md:w-[45px] md:h-[45px] w-[330px] h-[52px] bg-primary rounded-lg flex items-center justify-center mt-8 mx-0 md:mx-5"
                    onClick={handleCategorySubmit}
                >
                    <img src="/assets/svg/search-button.svg" alt="filter"  />
                </button>
                </form>
            </div>
            <p className="text-xl py-10">Menampilkan {totalProductCurrentPage} dari {totalProduct} hasil</p>
            <div className="flex flex-wrap ">
                {products.map((product, index) => (
                <div 
                    key={index} 
                    className="w-1/2 sm:w-1/3 px-2 sm:px-5 mb-5"
                >
                    <Card
                        image={product.image}
                        name={product.name}
                        description={truncateContent(product.description, 100)}
                        price={(product.price).toLocaleString("id-ID")}
                        rating={product.rating}
                        link={`/detail-produk/${product.product_id}`}
                    />
                </div>
                ))}
            </div>
            <Pagination 
                currentPage={currentPage}
                totalItems={products.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Catalog;