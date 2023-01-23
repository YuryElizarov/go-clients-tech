import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Input} from "../../UI/Input";
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
            <TagInput label={t("dental_info.labels.sensetive")} value={form.sensetive} tags={['Hot', "Cold", 'Sweet', "Biting"]}
                      isMultiple onChange={(val) => onChange('sensetive', val)}/>
            <TagInput label={t("dental_info.labels.is_pain")} value={form.isPain} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isPain', val)}/>

            <TagInput label={t("dental_info.labels.dental_problems")} value={form.dentalProblems} tags={
                ["Discomfort, clicking, or popping in jaw",
                    "Lost / broken filling(s)",
                    "Stained teeth",
                    "Difficulty closing jaw",
                    "Difficulty opening jaw",
                    "Teeth grinding / clenching",
                    "Locking jaw",
                    "Red, swollen, or bleeding gums",
                    "A removable dental appliance",
                    "Ringing in ears",
                    "Bad breath",
                    "Loose / shifting teeth",
                    "Broken / chipped tooth",
                    "Blisters / sores in or around the mouth",
                    "Gum disease",
                    "Toothache",
                    "Burning tongue / lips",
                    "Prolonged bleeding from an injury / extraction",
                    "Swelling / lumps in mouth",
                    "Recent infections or sore throat",
                    "Foof caught between teeth",
                    "Other",]
            }
                      isMultiple onChange={(val) => onChange('dentalProblems', val)}/>
            <RowInput>
                <Input value={form.explainPain} onChange={val => onChange('explainPain', val)}
                       id="explain_pain"
                       label={t("dental_info.labels.explain_pain") as string}/>
            </RowInput>
        </>
    );
}

export default PatientRegistrationFormView;