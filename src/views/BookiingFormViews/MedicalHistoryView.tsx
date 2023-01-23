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
            <TagInput label={t("medical_history.labels.is_physician")} value={form.isPhysician} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isPhysician', val)}/>

            {
                form.isPhysician === 'Yes' && <RowInput>
                    <Input value={form.explainPhysician} onChange={val => onChange('explainPhysician', val)}
                           id="explain_physician"
                           label={t("medical_history.labels.explain_physician") as string}/>
                </RowInput>
            }

            <TagInput label={t("medical_history.labels.is_operation")} value={form.isOperation} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isOperation', val)}/>
            <TagInput label={t("medical_history.labels.is_injury")} value={form.isInjury} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isInjury', val)}/>
            <TagInput label={t("medical_history.labels.is_medications")} value={form.isMedications} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isMedications', val)}/>
            <TagInput label={t("medical_history.labels.is_redux")} value={form.isRedux} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isRedux', val)}/>
            <TagInput label={t("medical_history.labels.is_bisphosphorates")} value={form.isBisphosphorates}
                      tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isBisphosphorates', val)}/>
            <TagInput label={t("medical_history.labels.is_diet")} value={form.isDiet} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isDiet', val)}/>
            <TagInput label={t("medical_history.labels.is_tabaco")} value={form.isTabaco} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isTabaco', val)}/>
            <TagInput label={t("medical_history.labels.is_substances")} value={form.isSubstances} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isSubstances', val)}/>
            <TagInput label={t("medical_history.labels.is_antibiotics")} value={form.isAntibiotics} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isAntibiotics', val)}/>

            <TagInput label={t("medical_history.labels.for_women")} value={form.forWomen}
                      tags={['Pergant / trying to get pergant', "Nursing", 'Taking oral contraceptives']}
                      isMultiple onChange={(val) => onChange('forWomen', val)}/>

            <TagInput label={t("medical_history.labels.allergic")} value={form.allergic} tags={
                [
                    "Aspirin",
                    "Penicillin",
                    "Codeine",
                    "Acrylic",
                    "Metal",
                    "Latex",
                    "Sulfa drugs",
                    "Local anesthetic",
                ]
            }
                      isMultiple onChange={(val) => onChange('allergic', val)}/>


            <TagInput label={t("medical_history.labels.is_allergies")} value={form.isAllergies} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isAllergies', val)}/>

            <TagInput label={t("medical_history.labels.diseases")} value={form.diseases} tags={
                ["AIDS / HIV positive", "Alzheimer’s disease", "Anaphylaxis", "Anemia", "Angina", "Arthritis gout", "Artificial heart value",
                    "Artificial joint", "Asthma", "Blood disease", "Blood transfusion", "Breathing problem",
                    "Bruise easily", "Cancer", "Chemotherapy", "Chest pains", "Cold sores / Fever blisters", "Congenital heart disorder",
                    "Convulsions", "Cortisone medicine", "Diabetes", "Drug addiction",
                    "Easily winded", "Emphysema", "Epilepsy or seizures", "Excessive bleeding", "Excessive thirst", "Fainting spells / Dizziness",
                    "Frequent cough", "Frequent diarrhea", "Frequent headaches", "Genital herpes", "Glaucoma", "Hay fever",
                    "Heart attack / failure", "Heart murmur", "Heart pacemaker", "Heart trouble / disease", "Hemophilia", "Hepatitis A",
                    "Hepatitis  B or C", "Herpes", "High blood pressure", "High cholesterol", "Hives or rash",
                    "Hypoglycemia", "Irregular heartbeat", "Kidney problems", "Leukemia", "Liver disease", "Low blood pressure", "Lung disease",
                    "Mitral value prolapse", "Osteoporosis", "Pain in jaw joints",
                    "Patathyroid disease", "Psychiartic care", "Radiation treatments", "Recent weight loss", "Renal dialysis",
                    "Rheumatic fever", "Rheumatism", "Scarlet fever", "Shingles", "Sickle cell disease", "Sinus trouble",
                    "Spina bifida", "Stomach / Intestical disease", "Stroke", "Sweeling of limbs", "Thyroid disease",
                    "Tonsillitis", "Tuberculosis", "Tumors or  growths", "Ulcers", "Veneral disease", "Yellow jaundice",]
            }
                      isMultiple onChange={(val) => onChange('diseases', val)}/>

            <TagInput label={t("medical_history.labels.is_illnes")} value={form.isIllnes} tags={['No', "Yes"]}
                      isMultiple={false} onChange={(val) => onChange('isIllnes', val)}/>
            <RowInput>
                <Input value={form.comments} onChange={val => onChange('comments', val)}
                       id="comments"
                       label={t("medical_history.labels.comments") as string}/>
            </RowInput>
        </>
    );
}

export default PatientRegistrationFormView;