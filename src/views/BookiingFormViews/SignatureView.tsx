import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Input} from "../../UI/Input";
import {useStepsAction, useStepsState} from "../../store/steps/hooks";
import {DateInput} from "../../UI/DateInput";

const RowInput = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
`


function PatientRegistrationFormView() {
    const {t} = useTranslation()
    const {form} = useStepsState()
    const {onChange} = useStepsAction()
    return (
            <RowInput>
                <Input value={form.signatureFirstName} onChange={val => onChange('signatureFirstName', val)} id="first_name"
                       label={t("signature.labels.first_name") as string}/>
                <DateInput value={form.signatureBirth} onChange={val => onChange('signatureBirth', val)}
                           label={t("signature.labels.birth") as string}
                           placeholder={t("signature.labels.birth") as string}
                />
            </RowInput>
    );
}

export default PatientRegistrationFormView;