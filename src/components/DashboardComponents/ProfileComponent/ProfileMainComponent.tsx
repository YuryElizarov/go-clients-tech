import React, {useState} from 'react';
import {ProfileBlock, WrapperMain} from "./styled";
import ProfileComponent from "./ProfileComponent";
import ProfilesListComponent from "./ProfilesListComponent";
import {useProfileState} from "../../../store/profile/hooks";

function ProfileMainComponent() {
    const [isShow, setIsShow] = useState<boolean>(false);
    const {selectedProfile} = useProfileState()
    return (
        <ProfileBlock>
            <WrapperMain onClick={() => setIsShow(!isShow)}>
                <ProfileComponent {...selectedProfile}/>
            </WrapperMain>
            <ProfilesListComponent isShow={isShow} onClose={() => setIsShow(false)}/>
        </ProfileBlock>
    );
}

export default ProfileMainComponent;