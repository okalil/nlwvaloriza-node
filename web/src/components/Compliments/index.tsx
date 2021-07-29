import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";

import profile from "../../assets/profile.svg";
import heart from "../../assets/heart.svg";

import { Box } from "../Box";
import {
    CardHeader,
    RightContainer,
    CardBody,
    TagWrapper,
    HeartIcon,
} from "./styles";

type Compliment = {
    id: number;
    userReceiver: { name: string };
    userSender: { name: string };
    message: string;
    tag: { name: string };
};

export const Compliments: React.FC<{ route: string }> = ({ route }) => {
    const { authentication } = useAuth();
    const [compliments, setCompliments] = useState<Compliment[]>([]);

        const date = new Date("2021-06-25T13:00:05.000Z");
        const now = new Date();
        const subtraction = now.getTime() - date.getTime();
        const time = subtraction / 1000 / 3600 / 24

    useEffect(() => {
        async function getData() {
            try {
                const { data } = await api.get(route, {
                    headers: authentication,
                });

                const compliments = data.map((item: Compliment) => {
                    return {
                        id: item.id,
                        userReceiver: item.userReceiver.name,
                        userSender: item.userSender.name,
                        message: item.message,
                        tag: item.tag.name,
                        // createdAt: item.created_at
                    };
                });
                setCompliments(compliments);
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    });

    return (
        <div>
            {compliments.map((item) => {
                return (
                    <Box key={item.id} style={{ marginBottom: "0.75rem" }}>
                        <CardHeader>
                            <img src={profile} alt="receiver" />
                            <RightContainer>
                                <h2>{item.userReceiver}</h2>
                                <img src={profile} alt="sender" />
                                <span>De {item.userSender}</span>
                            </RightContainer>
                            <HeartIcon src={heart} alt="like" />
                        </CardHeader>
                        <CardBody>
                            <p>{item.message}</p>
                            <span>Há {time.toFixed()} dias</span>
                            <TagWrapper>
                                <span>{item.tag}</span>
                            </TagWrapper>
                        </CardBody>
                    </Box>
                );
            })}
        </div>
    );
};
