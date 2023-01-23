import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    AdvertismentIcon, AnalyticIcon,
    BookingIcon,
    CalendarIcon,
    MessageIcon, TemplatesIcon, UserIcon, WaitlistIcon, WalletIcon,
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
    gap: 12px;
    padding: 16px;
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
    font-style: 12px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`
function PermissionComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        messages: boolean
        online_booking: boolean
        patients: boolean
        payments: boolean
        calendar: boolean
        waitlist: boolean
        templates: boolean
        campaigns: boolean
        analytics: boolean
    }>({
        messages: false,
        online_booking: false,
        patients: false,
        payments: false,
        calendar: false,
        waitlist: false,
        templates: false,
        campaigns: false,
        analytics: false,
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
                    <MessageIcon/>
                    <div>{t("user.add_employee.permission.labels.messages") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.messages} onToggle={() => onChange('messages', !data.messages)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <BookingIcon/>
                    <div>{t("user.add_employee.permission.labels.online_booking") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.online_booking} onToggle={() => onChange('online_booking', !data.online_booking)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <UserIcon/>
                    <div>{t("user.add_employee.permission.labels.patients") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.patients} onToggle={() => onChange('patients', !data.patients)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <WalletIcon/>
                    <div>{t("user.add_employee.permission.labels.payments") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.payments} onToggle={() => onChange('payments', !data.payments)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <CalendarIcon/>
                    <div>{t("user.add_employee.permission.labels.calendar") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.calendar} onToggle={() => onChange('calendar', !data.calendar)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <WaitlistIcon/>
                    <div>{t("user.add_employee.permission.labels.waitlist") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.waitlist} onToggle={() => onChange('waitlist', !data.waitlist)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <TemplatesIcon/>
                    <div>{t("user.add_employee.permission.labels.templates") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.templates} onToggle={() => onChange('templates', !data.templates)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <AdvertismentIcon/>
                    <div>{t("user.add_employee.permission.labels.campaigns") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.campaigns} onToggle={() => onChange('campaigns', !data.campaigns)}/>
            </ToggleBlock>
            <ToggleBlock>
                <LabelBlock>
                    <AnalyticIcon/>
                    <div>{t("user.add_employee.permission.labels.analytics") as string}</div>
                </LabelBlock>
                <Toggle isActive={data.analytics} onToggle={() => onChange('analytics', !data.analytics)}/>
            </ToggleBlock>
        </Wrapper>
    );
}

export default PermissionComponent;