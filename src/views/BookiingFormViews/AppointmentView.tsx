import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useStepsAction, useStepsState} from "../../store/steps/hooks";
import {Toggle} from "../../UI/Toggle";
import {TagInput} from "../../UI/TagInput";

const RowInput = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
`

const ToggleBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};

  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 0;
  }
`

const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll}{
    font-size: 12px;
  }
`

const Toggles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`

function PatientRegistrationFormView() {
    const {t} = useTranslation()
    const {form} = useStepsState()
    const {onChange} = useStepsAction()
    return (
        <>
            <RowInput>
                <TagInput label={t("appointment.labels.earlier")} value={form.appointment} tags={['No', "Yes"]}
                          isMultiple={false} onChange={(val) => onChange('appointment', val)}/>
            </RowInput>
            <ToggleBlock>
                <Label>{t("appointment.labels.toggle")}</Label>
                <Toggles>
                    <ToggleWrapper>
                        <Label>{t("appointment.labels.sms")}</Label>
                        <Toggle isActive={form.smsMe} onToggle={() => onChange('smsMe', !form.smsMe)}/>
                    </ToggleWrapper>
                    <ToggleWrapper>
                        <Label>{t("appointment.labels.email")}</Label>
                        <Toggle isActive={form.emailMe} onToggle={() => onChange('emailMe', !form.emailMe)}/>
                    </ToggleWrapper>
                </Toggles>
            </ToggleBlock>
        </>
    );
}

export default PatientRegistrationFormView;