import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {
    AppointmentView,
    ContactInformationView, DentalInfoView, MedicalHistoryView, PatientInfoView,
    PatientRegistrationFormView, SignatureView,
    StepsView
} from "../../views/BookiingFormViews";
import {Heading} from "../../UI/Heading";
import {Button, EButtonVariants} from "../../UI/Button";
import {useStepsAction, useStepsState} from "../../store/steps/hooks";
import {EStep} from "../../store/steps/types";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
`

const FormWrapper = styled.div`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  padding: 40px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  margin-left: 268px;
`

const Title = styled(Heading)`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
`

const ButtonStyled = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 16px;
    font-size: 16px;
  }
`

function Index() {
    const {t} = useTranslation()
    const {currentStep} = useStepsState()
    const {onNext} = useStepsAction()
    const navigate = useNavigate()
    return (
        <Wrapper>
            <StepsView/>
            <FormWrapper>
                <Title>
                    {currentStep === EStep.PersonalInfo && t("personal_info.title")}
                    {currentStep === EStep.ContactInfo && t("contact_info.title")}
                    {currentStep === EStep.Appointment && t("appointment.title")}
                    {currentStep === EStep.PatientInfo && t("patient_info.title")}
                    {currentStep === EStep.DentalInfo && t("dental_info.title")}
                    {currentStep === EStep.MedicalHistory && t("medical_history.title")}
                    {currentStep === EStep.Signature && t("signature.title")}
                </Title>
                {currentStep === EStep.PersonalInfo && <PatientRegistrationFormView/>}
                {currentStep === EStep.ContactInfo && <ContactInformationView/>}
                {currentStep === EStep.Appointment && <AppointmentView/>}
                {currentStep === EStep.PatientInfo && <PatientInfoView/>}
                {currentStep === EStep.DentalInfo && <DentalInfoView/>}
                {currentStep === EStep.MedicalHistory && <MedicalHistoryView/>}
                {currentStep === EStep.Signature && <SignatureView/>}
                <Buttons>
                    {currentStep !== EStep.PersonalInfo && <ButtonStyled onClick={() => onNext(currentStep - 1)}
                                                                         variant={EButtonVariants.Text}>{t("steps.buttons.back")}</ButtonStyled>}
                    {currentStep !== EStep.Signature && < ButtonStyled onClick={() => onNext(currentStep + 1)}
                                                                       variant={EButtonVariants.Default}>{t("steps.buttons.next")}</ButtonStyled>}
                    {currentStep === EStep.Signature &&
                        <ButtonStyled
                            onClick={() => navigate('/booking-form/final')}
                            variant={EButtonVariants.Default}>{t("steps.buttons.send")}</ButtonStyled>}
                </Buttons>
            </FormWrapper>
        </Wrapper>
    );
}

export default Index;