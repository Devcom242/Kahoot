import { create } from "zustand";

export const useAuth = create((set) => ({
    user: 0,
    token: null,
    login: () => {
        set((state) => ({
            user: state.user + 1
        }))
    },
    loginn: () => {
        set((state) => ({
            user: state.user - 1
        }))
    }
}))