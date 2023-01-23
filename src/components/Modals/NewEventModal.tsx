import React, {ReactNode, useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {Button, EButtonVariants} from "../../UI/Button";
import TimeInput from "../../UI/DateInput/TimeInput";
import {InputAutosize} from "../../UI/Input";
import {DropdownInput} from "../../UI/DropdownInput";


const Content = styled.div`
  padding: 20px;
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  gap: 7px;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 16px;
    font-size: 16px;
    gap: 6px;
  }
`


const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
    padding: 16px;
  }
`
const RowInput = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll}{
    gap: 16px;
  }
`

const DropdownStyled = styled(DropdownInput)`
  width: 100%;
  & > div {
    &:nth-child(2) {
      & > div:first-child {
        width: 100%;
      }
    }
  }
`

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 8px 6px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 7px 5px;
  }
`

const User = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  align-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  img {
    width: 100%;
    height: auto;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    width: 26px;
    height: 26px;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  span {
    color: ${({theme}) => theme.colors.darkGrey};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
    font-size: 12px;
  }
`

const DropdownItem = () => (
        <ItemWrapper>
            <User>
                <Icon>
                    <img src="/images/account3.png" alt="User"/>
                </Icon>
                Alamin Uddin
            </User>
            <Info>
                <span>+7 (999) 999 99-99</span>
                <span>145 years old</span>
            </Info>
        </ItemWrapper>
    )

const DropdownDoctor = () => (
        <ItemWrapper>
            <User>
                <Icon>
                    <img src="/images/account3.png" alt="User"/>
                </Icon>
                Alamin Uddin
            </User>
            <Info>
                <span>Dantist</span>
                <span>THU/WED/SA</span>
            </Info>
        </ItemWrapper>
    )

const opts: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: <DropdownItem/>,
        value: '0'
    },
    {
        item: <DropdownItem/>,
        value: '1'
    },
]

const optsDoctor: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: <DropdownDoctor/>,
        value: '0'
    },
    {
        item: <DropdownDoctor/>,
        value: '1'
    },
]

function NewEventModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()

    const [data, setData] = useState<{
        name: string,
        doctor: string,
        start: Date | null
        end: Date | null
        comment: string
    }>({
        name: '',
        doctor: '',
        start: null,
        end: null,
        comment: ''
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }


    if (!modals[EModals.NewEvent]) return null;
    return (
        <Modal modal={EModals.NewEvent} title={t("calendar.event.title")}>
            <Content>
                <DropdownStyled value={data.name} placeholder='' onSelect={val => onChange('name', val)}
                                options={opts} label={t("calendar.event.labels.name" as string)}/>
                <DropdownStyled value={data.doctor} placeholder='' onSelect={val => onChange('doctor', val)}
                                options={optsDoctor} label={t("calendar.event.labels.doctor" as string)}/>
                <RowInput>
                    <TimeInput value={data.start} onChange={val => onChange('start', val)}
                               label={t("calendar.event.labels.start") as string}
                               placeholder={t("calendar.event.labels.start") as string}
                    />
                    <TimeInput value={data.end} onChange={val => onChange('end', val)}
                               label={t("calendar.event.labels.end") as string}
                               placeholder={t("calendar.event.labels.end") as string}
                    />
                </RowInput>
                <InputAutosize value={data.comment} onChange={val => onChange('comment', val)} id="comment"
                               label={t("calendar.event.labels.comment") as string}/>
            </Content>

            <Buttons>
                <ButtonStyled variant={EButtonVariants.Text}>{t("calendar.event.buttons.save")}</ButtonStyled>
                <ButtonStyled variant={EButtonVariants.Default}>{t("calendar.event.buttons.add")}</ButtonStyled>
            </Buttons>
        </Modal>
    );
}

export default NewEventModal;