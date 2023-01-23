import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    CheckIcon,
    ClinicIcon,
    ClockIcon,
    FormsIcon,
    HelpIcon,
    MessageIcon,
    WaitlistIcon
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
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  padding: 20px;
  &:last-child {
    border-bottom: none;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
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
function EmailSettingsComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        confirmations: boolean,
        requests: boolean,
        reschedules: boolean,
        form_submissions: boolean,
        messages: boolean,
        payments: boolean,
        surveys: boolean,
        waitlist: boolean,
    }>({
        confirmations: false,
        requests: false,
        reschedules: false,
        form_submissions: false,
        messages: false,
        payments: false,
        surveys: false,
        waitlist: false,
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    return (
        <Wrapper>
            <ToggleBlock>
                <LabelBlock>
                    <CheckIcon/>
                    <div>{t("user.person_data.email_setting.labels.confirmations") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.confirmations} onToggle={() => onChange('confirmations', !data.confirmations)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <ClinicIcon/>
                    <div>{t("user.person_data.email_setting.labels.requests") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.requests} onToggle={() => onChange('requests', !data.requests)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <ClockIcon/>
                    <div>{t("user.person_data.email_setting.labels.reschedules") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.reschedules} onToggle={() => onChange('reschedules', !data.reschedules)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <FormsIcon/>
                    <div>{t("user.person_data.email_setting.labels.form_submissions") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.form_submissions} onToggle={() => onChange('form_submissions', !data.form_submissions)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <MessageIcon/>
                    <div>{t("user.person_data.email_setting.labels.messages") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.messages} onToggle={() => onChange('messages', !data.messages)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <WaitlistIcon/>
                    <div>{t("user.person_data.email_setting.labels.payments") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.payments} onToggle={() => onChange('payments', !data.payments)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <HelpIcon/>
                    <div>{t("user.person_data.email_setting.labels.surveys") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.surveys} onToggle={() => onChange('surveys', !data.surveys)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <WaitlistIcon/>
                    <div>{t("user.person_data.email_setting.labels.waitlist") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.waitlist} onToggle={() => onChange('waitlist', !data.waitlist)}/>
            </ToggleBlock>
        </Wrapper>
    );
}

export default EmailSettingsComponent;