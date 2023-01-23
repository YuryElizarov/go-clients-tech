import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    CheckIcon
} from "../../UI/Svg";
import {Toggle} from "../../UI/Toggle";


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
`

const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll}{
    font-size: 12px;
    gap: 12px;
  }
`

const LabelBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};

  span {
    color: ${({theme}) => theme.colors.gray};
  }

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
    font-size: 12px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  padding: 20px;

  &:last-child {
    border-bottom: none;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px; 
    padding: 16px; 
  }
`

const Toggles = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 30px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 24px;
  }
`
type keys = 'activity_reminders' | 'recalls' | 'reviews' | 'birthDay'

function PreferencesComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        activity_reminders: {
            isEmail: boolean,
            isSsm: boolean
        }
        recalls: {
            isEmail: boolean,
            isSsm: boolean
        }
        reviews: {
            isEmail: boolean,
            isSsm: boolean
        }
        birthDay: {
            isEmail: boolean,
            isSsm: boolean
        }
    }>({
        activity_reminders: {
            isEmail: false,
            isSsm: false
        },
        recalls: {
            isEmail: false,
            isSsm: false
        },
        reviews: {
            isEmail: false,
            isSsm: false
        },
        birthDay: {
            isEmail: false,
            isSsm: false
        },
    });

    const onChange = (key: keys, field: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                [field]: val
            }
        }))
    }

    return (
        <Wrapper>
            <Row>
                <LabelBlock>
                    <CheckIcon/>
                    <div>{t("patients.preferences.labels.activity_reminders") as string}</div>
                </LabelBlock>
                <Toggles>
                    <ToggleBlock>
                        {t("patients.preferences.labels.email") as string}
                        <Toggle isActive={data.activity_reminders.isEmail}
                                onToggle={() => onChange('activity_reminders', 'isEmail', !data.activity_reminders.isEmail)}/>
                    </ToggleBlock>
                    <ToggleBlock>
                        {t("patients.preferences.labels.ssm") as string}
                        <Toggle isActive={data.activity_reminders.isSsm}
                                onToggle={() => onChange('activity_reminders', 'isSsm', !data.activity_reminders.isSsm)}/>
                    </ToggleBlock>
                </Toggles>
            </Row>
            <Row>
                <LabelBlock>
                    <CheckIcon/>
                    <div>{t("patients.preferences.labels.recalls") as string}</div>
                </LabelBlock>
                <Toggles>
                    <ToggleBlock>
                        {t("patients.preferences.labels.email") as string}
                        <Toggle isActive={data.recalls.isEmail}
                                onToggle={() => onChange('recalls', 'isEmail', !data.recalls.isEmail)}/>
                    </ToggleBlock>
                    <ToggleBlock>
                        {t("patients.preferences.labels.ssm") as string}
                        <Toggle isActive={data.recalls.isSsm}
                                onToggle={() => onChange('recalls', 'isSsm', !data.recalls.isSsm)}/>
                    </ToggleBlock>
                </Toggles>
            </Row>
            <Row>
                <LabelBlock>
                    <CheckIcon/>
                    <div>{t("patients.preferences.labels.reviews") as string}</div>
                </LabelBlock>
                <Toggles>
                    <ToggleBlock>
                        {t("patients.preferences.labels.email") as string}
                        <Toggle isActive={data.reviews.isEmail}
                                onToggle={() => onChange('reviews', 'isEmail', !data.reviews.isEmail)}/>
                    </ToggleBlock>
                    <ToggleBlock>
                        {t("patients.preferences.labels.ssm") as string}
                        <Toggle isActive={data.reviews.isSsm}
                                onToggle={() => onChange('reviews', 'isSsm', !data.reviews.isSsm)}/>
                    </ToggleBlock>
                </Toggles>
            </Row>
            <Row>
                <LabelBlock>
                    <CheckIcon/>
                    <div>{t("patients.preferences.labels.birth_day") as string}</div>
                </LabelBlock>
                <Toggles>
                    <ToggleBlock>
                        {t("patients.preferences.labels.email") as string}
                        <Toggle isActive={data.birthDay.isEmail}
                                onToggle={() => onChange('birthDay', 'isEmail', !data.birthDay.isEmail)}/>
                    </ToggleBlock>
                    <ToggleBlock>
                        {t("patients.preferences.labels.ssm") as string}
                        <Toggle isActive={data.birthDay.isSsm}
                                onToggle={() => onChange('birthDay', 'isSsm', !data.birthDay.isSsm)}/>
                    </ToggleBlock>
                </Toggles>
            </Row>
        </Wrapper>
    );
}

export default PreferencesComponent;