import React from 'react';
import {Account, InfoBlock, LinkFacebook, Name} from "./styled";
import {DoctorIcon} from "../../../UI/Svg";
import {IUser} from "../../../types";

function ProfileComponent({name, soname}: IUser) {
    return (
        <>
            <InfoBlock>
                <Name>{name} {soname}</Name>
                <LinkFacebook>Аккаунт Facebook</LinkFacebook>
            </InfoBlock>
            <Account>
                <DoctorIcon/>
            </Account>
        </>
    );
}

export default ProfileComponent;