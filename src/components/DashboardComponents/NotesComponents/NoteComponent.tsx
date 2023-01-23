import React from 'react';
import {Header, Item, List, Wrapper} from "./styled";
import {DeleteIcon} from "../../../UI/Svg";

function NoteComponent() {
    return (
        <Wrapper>
            <Header>
                от 7 августа
                <DeleteIcon/>
            </Header>
            <List>
                <Item><span/>Записать на приём Владика</Item>
                <Item><span/>Отметить часы терапевта</Item>
            </List>
        </Wrapper>
    );
}

export default NoteComponent;