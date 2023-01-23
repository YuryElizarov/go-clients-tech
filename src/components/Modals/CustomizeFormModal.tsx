import React, {ReactNode, useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {Button, EButtonVariants} from "../../UI/Button";
import {EyeIcon, PlusIcon} from "../../UI/Svg";
import {Input, PhoneInput} from "../../UI/Input";
import {DateInput} from "../../UI/DateInput";
import {DropdownInput} from "../../UI/DropdownInput";
import FieldsListComponent from "../FormsComponents/FieldsListComponent";
import {CheckboxFormComponent} from "../FormsComponents";


const Content = styled.div`
  padding: 20px;
  width: 988px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  border-radius: 5px;
  gap: 7px;
  width: fit-content;
  svg {
    width: 16px;
    height: 16px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
    font-size: 12px;
    gap: 6px;
    svg {
      width: 12px;
      height: 12px;
    }
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

const optsGender: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Gender 1',
        value: '0'
    },
    {
        item: 'Gender 2',
        value: '1'
    },
]

const Wrapper = styled.div`
  padding: 20px;
  gap: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const Footer = styled(Wrapper)`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
`

const Buttons = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
  }
`

const FooterButton = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  gap: 10px;
  white-space: nowrap;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 16px;
    font-size: 16px;
    gap: 8px;
  }
`

function CustomizeFormModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()
    const [isShowFieldList, setIsShowFieldList] = useState<boolean>(false);

    const [data, setData] = useState<{
        first_name: string,
        last_name: string,
        birth: Date | null,
        gender: string,
        email: string,
        phone: string,
        zip: string,
        comment: string,
    }>({
        first_name: '',
        last_name: '',
        birth: null,
        gender: '',
        email: '',
        phone: '',
        zip: '',
        comment: '',
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    if (!modals[EModals.CustomizeForm]) return null;
    return (
        <Modal modal={EModals.CustomizeForm} title={t("forms.modals.custom.title")}
               titleChildren={<ButtonStyled variant={EButtonVariants.Gray}><EyeIcon/> {t('forms.modals.custom.button')}
               </ButtonStyled>}
               footerContent={
                   <>
                       {isShowFieldList && <FieldsListComponent onClose={() => setIsShowFieldList(false)}/>}
                       <CheckboxFormComponent/>
                       <Footer>
                           <FooterButton
                               onClick={() => setIsShowFieldList(true)}
                               variant={EButtonVariants.Border}><PlusIcon/>{t('forms.modals.custom.buttons.add')}
                           </FooterButton>
                           <Buttons>
                               <FooterButton
                                   variant={EButtonVariants.Text}>{t('forms.modals.custom.buttons.save')}</FooterButton>
                               <FooterButton
                                   variant={EButtonVariants.Default}>{t('forms.modals.custom.buttons.create')}</FooterButton>
                           </Buttons>
                       </Footer>
                   </>
               }
        >
            <Content>
                <InputsRow>
                    <Input value={data.first_name} onChange={val => onChange('first_name', val)} id="first_name"
                           label={t("forms.modals.custom.labels.first_name") as string}/>
                    <Input value={data.last_name} onChange={val => onChange('last_name', val)} id="last_name"
                           label={t("forms.modals.custom.labels.last_name") as string}/>
                </InputsRow>
                <InputsRow>
                    <DateInput value={data.birth} onChange={val => onChange('birth', val)}
                               label={t("forms.modals.custom.labels.birth") as string}
                               placeholder={t("forms.modals.custom.labels.birth") as string}
                    />
                    <DropdownInput value={data.gender} onSelect={val => onChange('gender', val)}
                                   options={optsGender}
                                   label={t("forms.modals.custom.labels.gender") as string}
                                   placeholder=''
                    />
                </InputsRow>
                <InputsRow>
                    <Input value={data.email} onChange={val => onChange('email', val)} id="email"
                           label={t("forms.modals.custom.labels.email") as string}/>
                    <PhoneInput value={data.phone} onChange={val => onChange('phone', val)} id="phone"/>
                </InputsRow>
                <InputsRow>
                    <Input value={data.zip} onChange={val => onChange('zip', val)} id="zip"
                           label={t("forms.modals.custom.labels.zip") as string}/>
                    <Input value={data.comment} onChange={val => onChange('comment', val)} id="comment"
                           label={t("forms.modals.custom.labels.comment") as string}/>
                </InputsRow>
            </Content>
        </Modal>
    );
}

export default CustomizeFormModal;