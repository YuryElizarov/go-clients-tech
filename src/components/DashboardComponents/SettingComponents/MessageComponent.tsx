import React from 'react';
import {useLocation} from "react-router-dom";
import {LinkStyled, Tag, Wrapper} from "./styled";
import {MessageIcon} from "../../../UI/Svg";

function MessageComponent() {
    const {pathname} = useLocation()
    return (
        <Wrapper isActive={pathname === '/messages'}>
            <LinkStyled to="/messages">
                <MessageIcon/>
                <Tag/>
            </LinkStyled>
        </Wrapper>
    );
}

export default MessageComponent;