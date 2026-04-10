import { useState, useEffect } from 'react';

export function useAuth() {
    // 1. Get initial value immediately (only runs once on mount)
    const [isLogin, setIsLogin] = useState(() => {
        const saved = localStorage.getItem("isLogin");
        if (saved !== null) {
            return JSON.parse(saved);
        }
        return false; // Default if nothing is saved
    });

    // 2. Persist to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
    }, [isLogin]);

    return [isLogin, setIsLogin];
}