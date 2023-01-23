import React, {ReactNode, useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {useAppState} from '../../store/app/hooks';
import {DropdownInput} from "../../UI/DropdownInput";
import {Button, EButtonVariants} from "../../UI/Button";
import DateInput from "../../UI/DateInput/DateInput";
import DateTimeInput from "../../UI/DateInput/DateTimeInput";


const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 988px;

  & > div {
    width: 100%;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
    padding: 16px;
  }
`

const InputsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;

  & > div {
    width: 100%;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Footer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const FooterButton = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  max-width: unset;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
    padding: 12px 16px;
  }
`

const opts: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'All details (ASAP list + Continuing care)',
        value: '0'
    }
]

const optsProvides: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Test provider 1',
        value: '0'
    },
    {
        item: 'Test provider 2',
        value: '1'
    },
]

function NewWaitlistModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()
    const [data, setData] = useState<{
        provide_details: string,
        care_starts: Date | null,
        care_ends: Date | null
        testing_provider: string
        appointment_time: Date | null
    }>({
        provide_details: '',
        care_starts: null,
        care_ends: null,
        testing_provider: '',
        appointment_time: null,
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    if (!modals[EModals.NewWaitlist]) return null;
    return (
        <Modal modal={EModals.NewWaitlist} title={t("waitlist.modals.new_waitlist.title")}>
            <Content>
                <DropdownInput value={data.provide_details} placeholder=''
                               onSelect={val => onChange('provide_details', val)}
                               options={opts}
                               label={t("waitlist.modals.new_waitlist.labels.provide_details") as string}/>
                <InputsRow>
                    <DateInput
                        value={data.care_starts}
                        placeholder={t("waitlist.modals.new_waitlist.labels.care_starts") as string}
                        label={t("waitlist.modals.new_waitlist.labels.care_starts") as string}
                        onChange={(val) => onChange('care_starts', val)}
                    />
                    <DateInput
                        value={data.care_ends}
                        placeholder={t("waitlist.modals.new_waitlist.labels.care_ends") as string}
                        label={t("waitlist.modals.new_waitlist.labels.care_ends") as string}
                        onChange={(val) => onChange('care_ends', val)}
                    />
                </InputsRow>
                <InputsRow>
                    <DropdownInput value={data.testing_provider} placeholder=''
                                   onSelect={val => onChange('testing_provider', val)}
                                   options={optsProvides}
                                   label={t("waitlist.modals.new_waitlist.labels.testing_provider") as string}/>
                    <DateTimeInput
                        value={data.appointment_time}
                        placeholder={t("waitlist.modals.new_waitlist.labels.appointment_time") as string}
                        label={t("waitlist.modals.new_waitlist.labels.appointment_time") as string}
                        onChange={(val) => onChange('appointment_time', val)}
                    />
                </InputsRow>
            </Content>
            <Footer>
                <FooterButton
                    variant={EButtonVariants.Text}>{t("waitlist.modals.new_waitlist.buttons.save") as string}</FooterButton>
                <FooterButton
                    variant={EButtonVariants.Default}>{t("waitlist.modals.new_waitlist.buttons.add") as string}</FooterButton>
            </Footer>
        </Modal>
    );
}

export default NewWaitlistModal;