import React,{ useState , useEffect} from "react";
import useSideBarStore from "../../stores/useSideBarStore";
import Sidebar from "../../components/Admin/Sidebar";
import Header from "../../components/Admin/Header";
import api from "../../services/api";
import eye from "../../assets/svg/admin-icon/eye.svg";
import pencil from "../../assets/svg/admin-icon/pencil.svg";
import trash from "../../assets/svg/admin-icon/trash.svg";
import arrowUpDown from "../../assets/svg/admin-icon/arrows-up-down.svg";
import arrow from "../../assets/svg/admin-icon/arrow-right.svg";
import { Toast } from "../../utils/function/toast";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router";
const Users = () => {
    const { isOpen: sidebarOpen } = useSideBarStore();
    const [selectedPage, setSelectedPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [metadata, setMetadata] = useState({});

    const fetchUsers = async () => {
        try {
            const response = await api.get(`/admin/users?pages=${selectedPage}`);
            console.log(response.data.data);
            setUsers(response.data.data);
            setMetadata(response.data.metadata);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    const pages = Array.from({ length: metadata.total_page }, (_, index) => index + 1);

    const handlePageChange = (e) => {
        setSelectedPage(Number(e.target.value));
    };

    const handlePrevPage = () => {
        if (selectedPage > 1) {
            setSelectedPage(selectedPage - 1);
        }
    };

    const handleNextPage = () => {
        if (selectedPage < metadata.TotalPage) {
            setSelectedPage(selectedPage + 1);
        }
    };

    const handleEdit = (data) => {
        console.log(data);
    };

    const handleDelete = async (data) => {
        try {
            await api.delete(`/products/${data}`);
            Toast.fire({
                icon: "success",
                title: "Sukses hapus data product",
            });
        } catch (error) {
            Toast.fire({
                icon: "error",
                title: "Hapus Data Gagal!",
            });
        }
    };
        useEffect(() => {   
            fetchUsers();
        }, []);

    return (
        <div>
        <Sidebar    isOpen={sidebarOpen} 
                    toggleSidebar={() => sidebarOpen(!sidebarOpen)}
                    active="Pengguna" /> {/* ini aja yg diganti Sesuai yang dikerjain */}
        <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-[260px]' : 'ml-28'}`}>
        <Header />
        
            <div className="bg-secondary min-h-screen">
                <h1>Pengguna</h1>
            </div>
        </div>
        </div>
    );
};

export default Users;