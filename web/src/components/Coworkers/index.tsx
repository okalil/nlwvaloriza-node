import React, { useState, useEffect } from "react";
import profile from "../../assets/profile.svg";

import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";

import { Box } from "../Box";
import { Button } from "../Button";
import { CoworkersList, StyledItem } from "./styles";

type Error = {
    response?: any
    req?: any
    message?: any
}

export const Coworkers: React.FC = () => {
    const { authentication } = useAuth();
    const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

    function errorHandling(error: Error) {
        if (error.response) {
            console.log(error.response);
        } else if (error.req) {
            console.log(error.req);
        } else {
            console.log("Error", error.message);
        }
    }

    useEffect(() => {
        async function getData() {
            try {
                const { data } = await api.get("/users", {
                    headers: authentication,
                });

                setUsers(
                    data.map((user: { id: number; name: string }) => {
                        return {
                            id: user.id,
                            name: user.name,
                        };
                    })
                );
            } catch (error) {
                errorHandling(error);
            }
        }
        getData();
    }, [authentication]);

    return (
        <Box>
            <h2>Seus colegas</h2>
            <CoworkersList>
                {users.map((user) => {
                    return (
                        <StyledItem key={user.id}>
                            <img src={profile} alt="" />
                            <h3>{user.name}</h3>
                            <Button>Valorizar</Button>
                        </StyledItem>
                    );
                })}
            </CoworkersList>
        </Box>
    );
};
