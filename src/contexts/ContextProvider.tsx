'use client'

import React, { createContext, useState, useContext } from "react";

type Props = {
    children: React.ReactNode;
};

type User = {
    name: string;
}

type UserContextType = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = (props: Props) => {
    const { children } = props;

    const [user, setUser] = useState<User>({
        name: "denis"
    });
    const [token, _setToken] = useState<string | null>("");

    const setToken: React.Dispatch<React.SetStateAction<string | null>> = (newToken) => {
        _setToken(newToken);

        if (newToken) {
            localStorage.setItem("ACCESS_TOKEN", `${newToken}`);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): UserContextType => useContext(UserContext);
