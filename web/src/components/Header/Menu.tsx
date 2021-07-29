import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import { MenuContainer, Arrow } from "./styles";

type MenuProps = HTMLAttributes<HTMLElement>;

export function Menu(props: MenuProps) {
    const cleanToken = () => {
        localStorage.removeItem("userToken");
    };

    return (
        <MenuContainer {...props}>
            <Link to="/">Perfil</Link>
            <hr />
            <Link to="/login" onClick={cleanToken}>
                Sair
            </Link>
            <Arrow />
        </MenuContainer>
    );
}
