import { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { createContext, ReactNode } from "react";

type AuthContextType = {
    userToken: string | null;
    setUserToken: Dispatch<SetStateAction<string | null>>;
    authentication: { Authorization: string };
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const initialState = localStorage.getItem("userToken");
    const [userToken, setUserToken] = useState(initialState);
    const authentication = { Authorization: `Bearer ${userToken}` };

    useEffect(() => {
        if (userToken) {
            localStorage.setItem("userToken", userToken);
        }
    }, [userToken]);

    return (
        <AuthContext.Provider
            value={{ userToken, setUserToken, authentication }}
        >
            {children}
        </AuthContext.Provider>
    );
};
