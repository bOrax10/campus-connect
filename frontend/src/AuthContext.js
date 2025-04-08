// src/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const saved = Cookies.get("isLoggedIn");
        return saved === "true";
    });

    const [userData, setUserData] = useState(() => {
        const saved = Cookies.get("userData");
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        Cookies.set("isLoggedIn", isLoggedIn, { expires: 7, secure: true, sameSite: "Strict" });
    }, [isLoggedIn]);

    useEffect(() => {
        if (userData) {
            Cookies.set("userData", JSON.stringify(userData), {
                expires: 7,
                secure: true,
                sameSite: "Strict",
            });
        } else {
            Cookies.remove("userData");
        }
    }, [userData]);

    const logout = () => {
        setIsLoggedIn(false);
        setUserData(null);
        Cookies.remove("isLoggedIn");
        Cookies.remove("userData");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
