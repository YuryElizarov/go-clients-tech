import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CheckIcon, LogoFullIcon} from "../../UI/Svg";
import {useStepsState} from "../../store/steps/hooks";
import {EStep} from "../../store/steps/types";

const Wrapper = styled.div`
  width: 100%;
  max-width: 268px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  position: fixed;
  gap: 50px;
  padding: 28px 40px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 22px 36px;
  }
`

const Steps = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px;
  position: relative;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 40px;
  }
`

const Step = styled.div<{isActive: boolean}>`
  width: 100%;
  display: flex;
  position: relative;
  gap: 10px;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  z-index: 1;
  color: ${({theme, isActive}) => theme.colors[isActive ? 'black' : 'darkGrey']};
  svg {
    width: 12px;
    height: 12px;
    path {
      stroke: ${({theme}) => theme.colors.white};
      }
    }
  }
  span {
    width: 20px;
    height: 20px;
    color: ${({theme}) => theme.colors.white};
    display: flex;
    align-items: center;
    align-content: center;
    position: relative;
    justify-content: center;
    background: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'grayC4']};
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
  }
  &:before{
    content: "";
    position: absolute;
    width: 1px;
    background: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'grayC4']};
    left: 10px;
    top: 0;
    height: 48px;
    z-index: -1;
    transform: translateY(-100%);
  }
  &:first-child {
    &:before {
      display: none;
    }
  }
`

function StepsView() {
    const {t} = useTranslation()
    const {currentStep, stepsComplete} = useStepsState()
    return (
        <Wrapper>
            <LogoFullIcon width={162}/>
            <Steps>
                <Step isActive={currentStep === EStep.PersonalInfo || stepsComplete[EStep.PersonalInfo]}>
                    <span>{stepsComplete[EStep.PersonalInfo] ? <CheckIcon/> : 1}</span>{t("steps.personal_info")}
                </Step>
                <Step isActive={currentStep === EStep.ContactInfo || stepsComplete[EStep.ContactInfo]}>
                    <span>{stepsComplete[EStep.ContactInfo] ? <CheckIcon/> : 2}</span>{t("steps.contact_info")}
                </Step>
                <Step isActive={currentStep === EStep.Appointment || stepsComplete[EStep.Appointment]}>
                    <span>{stepsComplete[EStep.Appointment] ? <CheckIcon/> : 3}</span>{t("steps.appointment")}
                </Step>
                <Step isActive={currentStep === EStep.PatientInfo || stepsComplete[EStep.PatientInfo]}>
                    <span>{stepsComplete[EStep.PatientInfo] ? <CheckIcon/> : 4}</span>{t("steps.patient_info")}
                </Step>
                <Step isActive={currentStep === EStep.DentalInfo || stepsComplete[EStep.DentalInfo]}>
                    <span>{stepsComplete[EStep.DentalInfo] ? <CheckIcon/> : 5}</span>{t("steps.dental_info")}
                </Step>
                <Step isActive={currentStep === EStep.MedicalHistory || stepsComplete[EStep.MedicalHistory]}>
                    <span>{stepsComplete[EStep.MedicalHistory] ? <CheckIcon/> : 6}</span>{t("steps.medical_history")}
                </Step>
                <Step isActive={currentStep === EStep.Signature || stepsComplete[EStep.Signature]}>
                    <span>{stepsComplete[EStep.Signature] ? <CheckIcon/> : 7}</span>{t("steps.signature")}
                </Step>
            </Steps>
        </Wrapper>
    );
}

export default StepsView;