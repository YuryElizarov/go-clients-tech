import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    CheckIcon,
    ClinicIcon,
    ClockIcon,
    FormsIcon,
    MessageIcon,
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
  ${({theme}) => theme.mediaQueries.ll}{
    gap: 10px;
    font-size: 12px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`
function DashboardSettingsComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        activity: boolean
        statistic: boolean
        nodes: boolean
        notification: boolean
        cancel: boolean
    }>({
        activity: false,
        statistic: false,
        nodes: false,
        notification: false,
        cancel: false,
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
                    <div>{t("user.person_data.dashboard_setting.labels.activity") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.activity} onToggle={() => onChange('activity', !data.activity)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <ClinicIcon/>
                    <div>{t("user.person_data.dashboard_setting.labels.statistic") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.statistic} onToggle={() => onChange('statistic', !data.statistic)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <ClockIcon/>
                    <div>{t("user.person_data.dashboard_setting.labels.nodes") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.nodes} onToggle={() => onChange('nodes', !data.nodes)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <FormsIcon/>
                    <div>{t("user.person_data.dashboard_setting.labels.notification") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.notification} onToggle={() => onChange('notification', !data.notification)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <MessageIcon/>
                    <div>{t("user.person_data.dashboard_setting.labels.cancel") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.cancel} onToggle={() => onChange('cancel', !data.cancel)}/>
            </ToggleBlock>
        </Wrapper>
    );
}

export default DashboardSettingsComponent;