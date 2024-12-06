import { create } from "zustand";
import userServices from "../services/userServices";

const useUserStore = create((set) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
}));

export const loadUserData = async () => {
    try {
        const userData = await userServices();
        useUserStore.getState().setUser(userData);
    } catch (error) {
        console.error("Failed to load user data:", error);
    }
};

export default useUserStore;
