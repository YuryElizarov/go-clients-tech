import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {CardComponent, LocationsComponents, PermissionComponent} from "../UserComponents";
import AddEmployeeComponent from "../UserComponents/AddEmployeeComponent";
import {CheckBox} from "../../UI/Input";

const CardStyled = styled(CardComponent)`
  width: 988px;
`

function AddEmployeeModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()
    const [isSelectAllLocations, setIsSelectAllLocations] = useState<boolean>(false);

    if (!modals[EModals.AddEmployee]) return null;
    return (
        <Modal modal={EModals.AddEmployee}
               footerContent={
                   <>
                       <CardStyled title={t("user.add_employee.location.title")}
                                   headerChildren={<CheckBox value={isSelectAllLocations}
                                                             label={t("user.add_employee.location.select_all")}
                                                             onChange={() => setIsSelectAllLocations(!isSelectAllLocations)}
                                                             id="all-locations"/>}
                       >
                           <LocationsComponents/>
                       </CardStyled>
                       <CardStyled title={t("user.add_employee.permission.title")}>
                           <PermissionComponent/>
                       </CardStyled>
                   </>
               }
        >
            <CardStyled title={t("user.add_employee.data.title")}>
                <AddEmployeeComponent/>
            </CardStyled>
        </Modal>
    );
}

export default AddEmployeeModal;