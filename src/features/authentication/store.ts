import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AuthState } from './types';

const customStorage = {
    getItem: (key: string) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    },
    setItem: (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: (key: string) => {
        localStorage.removeItem(key);
    },
};

export const useUser = create<AuthState>()(
    persist(
        (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        }),
        {
        name: 'auth-state',
        storage: createJSONStorage(() => customStorage),
        }
    )
);

export default useUser;
