import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    CheckIcon,
    DeleteIcon,
    DragHorizontalIcon, EditIcon, EyeOffIcon, HelpIcon
} from "../../UI/Svg";
import {CheckBox, Input} from "../../UI/Input";
import {Toggle} from "../../UI/Toggle";

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  gap: 15px;
  display: flex;
  align-items: center;
  align-content: center;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 100%;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 12px;
  }
`


const DragButton = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
`


const RowInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 24px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 20px;
  }
`

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const Toggles = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 30px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 24px;
  }
`

const ToggleBlock = styled.div`
  padding: 10px;
  gap: 16px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 8px;
    gap: 12px;
  }
`

const Label = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
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
function CheckboxFormComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        title: string,
        isFirst: boolean,
        first: string
        isAdd: boolean,
        add: string
        isHide: boolean,
        isRequired: boolean
    }>({
        title: '',
        isFirst: false,
        first: '',
        isAdd: false,
        add: '',
        isHide: false,
        isRequired: false
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Wrapper>
            <DragButton><DragHorizontalIcon/></DragButton>
            <Input value={data.title} onChange={val => onChange('title', val)} id="title"
                   label={t("forms.modals.checkbox.title") as string}/>
            <RowInput>
                <CheckBox value={data.isFirst} onChange={() => onChange('title', !data.isFirst)} id="isFirst"/>
                <Input value={data.first} onChange={val => onChange('first', val)} id="first"
                       label={t("forms.modals.checkbox.first") as string}/>
            </RowInput>
            <RowInput>
                <CheckBox value={data.isAdd} onChange={() => onChange('title', !data.isAdd)} id="isAdd"/>
                <Input value={data.add} onChange={val => onChange('add', val)} id="add"
                       label={t("forms.modals.checkbox.add") as string}/>
            </RowInput>
            <Footer>
                <Toggles>
                    <ToggleBlock>
                        <Label>
                            <EyeOffIcon/>
                            {t("forms.modals.checkbox.hide") as string}
                        </Label>
                        <Toggle isActive={data.isHide} onToggle={() => onChange('title', !data.isHide)}/>
                    </ToggleBlock>
                    <ToggleBlock>
                        <Label>
                            <CheckIcon/>
                            {t("forms.modals.checkbox.required") as string}
                        </Label>
                        <Toggle isActive={data.isRequired} onToggle={() => onChange('title', !data.isRequired)}/>
                    </ToggleBlock>
                </Toggles>
                <Actions>
                    <ButtonIcon><HelpIcon/></ButtonIcon>
                    <ButtonIcon><EditIcon/></ButtonIcon>
                    <ButtonIcon><DeleteIcon/></ButtonIcon>
                </Actions>
            </Footer>
        </Wrapper>
    );
}

export default CheckboxFormComponent;