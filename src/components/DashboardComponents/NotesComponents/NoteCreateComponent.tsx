import React from 'react';
import {useTranslation} from "react-i18next";
import {Actions, CancelButton, Header, Item, List, SaveButton, Wrapper} from "./styled";
import {DeleteIcon} from "../../../UI/Svg";

function NoteComponent() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Header>
                от 5 августа
                <DeleteIcon/>
            </Header>
            <List>
                <Item><span/>Записа|</Item>
            </List>
            <Actions>
                <SaveButton>{t("notes.save")}</SaveButton>
                <CancelButton>{t("notes.cancel")}</CancelButton>
            </Actions>
        </Wrapper>
    );
}

export default NoteComponent;