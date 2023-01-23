import React, {ReactNode} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Input} from "../../UI/Input";
import {useStepsAction, useStepsState} from "../../store/steps/hooks";
import {DateInput} from "../../UI/DateInput";
import {DropdownInput} from "../../UI/DropdownInput";

const RowInput = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
`

const DropdownStyled = styled(DropdownInput)`
  width: 100%;
`

const optsGender: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Male',
        value: '0'
    },
    {
        item: 'Female',
        value: '1'
    },
]

const optsName: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Mr',
        value: '0'
    },
    {
        item: 'Ms',
        value: '1'
    },
]

function PatientRegistrationFormView() {
    const {t} = useTranslation()
    const {form} = useStepsState()
    const {onChange} = useStepsAction()
    return (
        <>
            <RowInput>
                <Input value={form.firstName} onChange={val => onChange('firstName', val)} id="first_name"
                       label={t("personal_info.labels.first_name") as string}/>
                <Input value={form.lastName} onChange={val => onChange('lastName', val)} id="last_name"
                       label={t("personal_info.labels.last_name") as string}/>
            </RowInput>
            <RowInput>
                <Input value={form.patronymicName} onChange={val => onChange('patronymicName', val)}
                       id="patronymic_name"
                       label={t("personal_info.labels.patronymic_name") as string}/>
                <DateInput value={form.birth} onChange={val => onChange('birth', val)}
                           label={t("personal_info.labels.birth") as string}
                           placeholder={t("personal_info.labels.birth") as string}
                />
            </RowInput>
            <RowInput>
                <DropdownStyled value={form.gender} placeholder='' onSelect={val => onChange('gender', val)}
                                options={optsGender} label={t("personal_info.labels.gender" as string)}/>
                <DropdownStyled value={form.name_title} placeholder='' onSelect={val => onChange('name_title', val)}
                                options={optsName} label={t("personal_info.labels.name_title" as string)}/>
            </RowInput>
            <RowInput>
                <Input value={form.securityNumber} onChange={val => onChange('securityNumber', val)} id="security_number"
                       label={t("personal_info.labels.security_number") as string}/>
            </RowInput>
        </>
    );
}

export default PatientRegistrationFormView;