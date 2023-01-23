import React, {ReactNode, useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {useAppState} from '../../store/app/hooks';
import {Input} from "../../UI/Input";
import {DropdownInput} from "../../UI/DropdownInput";
import {Button, EButtonVariants} from "../../UI/Button";
import {Toggle} from "../../UI/Toggle";
import {EyeOffIcon} from "../../UI/Svg";


const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 988px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
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
  justify-content: space-between;
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
    padding: 12px 16px;
    font-size: 16px;
  }
`

const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
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
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
    font-size: 12px;
  }
`

const opts: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: '5-10 min',
        value: '0'
    },
    {
        item: '10-40 min',
        value: '1'
    },
]

function EditServiceModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()
    const [data, setData] = useState<{
        title: string,
        price: string,
        description: string
        delay: string
        isHidden: boolean
    }>({
        title: '',
        price: '',
        description: '',
        delay: opts[0].value,
        isHidden: false
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    if (!modals[EModals.EditService]) return null;
    return (
        <Modal modal={EModals.EditService} title={t("booking.edit_service.edit")}>
            <Content>
                <Input value={data.title} onChange={val => onChange('title', val)} id="title"
                       label={t("booking.edit_service.label.title") as string}/>
                <InputsRow>
                    <DropdownInput value={data.delay} placeholder='' onSelect={val => onChange('delay', val)}
                                   options={opts} label={t("booking.edit_service.label.delay" as string)}/>
                    <Input value={data.price} onChange={val => onChange('price', val)} id="price"
                           label={t("booking.edit_service.label.price") as string}/>
                </InputsRow>
                <Input value={data.description} onChange={val => onChange('description', val)} id="description"
                       label={t("booking.edit_service.label.description") as string}/>
            </Content>
            <Footer>
                <ToggleBlock>
                    <LabelBlock><EyeOffIcon/> <div>{t("booking.edit_service.hidden") as string} <span>{t("booking.edit_service.after") as string}</span></div></LabelBlock>
                    <Toggle isActive={data.isHidden} onToggle={() => onChange('isHidden', !data.isHidden)}/>
                </ToggleBlock>
                <FooterButton variant={EButtonVariants.Default}>{t("booking.edit_service.public") as string}</FooterButton>
            </Footer>
        </Modal>
    );
}

export default EditServiceModal;