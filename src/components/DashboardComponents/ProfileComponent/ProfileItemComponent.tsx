import React from 'react';
import {Wrapper} from "./styled";
import {IUser} from "../../../types";
import ProfileComponent from "./ProfileComponent";
import {useAppAction} from "../../../store/app/hooks";
import {useProfileAction} from "../../../store/profile/hooks";
import {EModals} from "../../../store/app/types";

function ProfileItemComponent(user: IUser) {
    const {onShowModal} = useAppAction()
    const {onSelectProfileId} = useProfileAction()
    return (
            <Wrapper onClick={() => {
                onShowModal(EModals.Pin)
                if (user.id) {
                    onSelectProfileId(user.id)
                }
            }}>
                <ProfileComponent {...user}/>
            </Wrapper>
    );
}

export default ProfileItemComponent;