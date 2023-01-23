import React from 'react';
import {useLocation} from "react-router-dom";
import {LinkStyled, Tag, Wrapper} from "./styled";
import {WalletIcon} from "../../../UI/Svg";

function WalletComponent() {
    const {pathname} = useLocation()
    return (
        <Wrapper isActive={pathname === '/payment'}>
            <LinkStyled to="/payment">
                <WalletIcon/>
                <Tag/>
            </LinkStyled>
        </Wrapper>
    );
}

export default WalletComponent;