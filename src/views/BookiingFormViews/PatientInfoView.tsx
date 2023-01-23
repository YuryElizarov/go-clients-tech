import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Input, PhoneInput} from "../../UI/Input";
import {useStepsAction, useStepsState} from "../../store/steps/hooks";
import {TagInput} from "../../UI/TagInput";

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
        <>
            <RowInput>

                <TagInput label={t("patient_info.labels.type_patient")} value={form.typePatient}
                          tags={['Patient', "Policy holder", "Pesponsible party"]}
                          isMultiple={false} onChange={(val) => onChange('typePatient', val)}/>
            </RowInput>

            <TagInput label={t("patient_info.labels.is_employed")} value={form.isEmployed} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isEmployed', val)}/>
            {
                form.isEmployed === 'Yes' && <RowInput>
                    <Input value={form.employerCompany} onChange={val => onChange('employerCompany', val)}
                           id="employer_company"
                           label={t("patient_info.labels.employer_company") as string}/>
                    <Input value={form.employeePosition} onChange={val => onChange('employeePosition', val)}
                           id="employee_position"
                           label={t("patient_info.labels.employee_position") as string}/>
                </RowInput>
            }

            <TagInput label={t("patient_info.labels.is_student")} value={form.isStudent} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isStudent', val)}/>
            {
                form.isStudent === 'Yes' && <RowInput>
                    <Input value={form.school} onChange={val => onChange('school', val)}
                           id="school"
                           label={t("patient_info.labels.school") as string}/>
                </RowInput>
            }
            <TagInput label={t("patient_info.labels.is_insurance")} value={form.isInsurance} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isInsurance', val)}/>
            {
                form.isInsurance === 'Yes' && <RowInput>
                    <Input value={form.insuranceCompany} onChange={val => onChange('insuranceCompany', val)}
                           id="insurance_company"
                           label={t("patient_info.labels.insurance_company") as string}/>
                    <Input value={form.insuranceGroup} onChange={val => onChange('insuranceGroup', val)}
                           id="insurance_group"
                           label={t("patient_info.labels.insurance_group") as string}/>
                    <Input value={form.insurancePoliceNumber} onChange={val => onChange('insurancePoliceNumber', val)}
                           id="insurance_police_number"
                           label={t("patient_info.labels.insurance_police_number") as string}/>
                </RowInput>
            }
            <RowInput>
                <Input value={form.emergencyContact} onChange={val => onChange('emergencyContact', val)}
                       id="emergency_contact"
                       label={t("patient_info.labels.emergency_contact") as string}/>
                <PhoneInput value={form.emergencyPhone} onChange={val => onChange('emergencyPhone', val)}
                            id="emergency_phone"
                            label={t("patient_info.labels.emergency_phone") as string}/>
            </RowInput>
        </>
    );
}

export default PatientRegistrationFormView;