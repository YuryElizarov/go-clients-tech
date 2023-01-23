import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    CalendarIcon, CheckIcon, ClockIcon,
    CloseIcon,
    CommentIcon, DropdownIcon,
    MessageIcon,
    NumberIcon, RadioIcon,
    SmartphoneIcon,
    TextIcon,
    TextInputIcon, WalletIcon
} from "../../UI/Svg";

const Wrapper = styled.div`
  padding: 20px;
  gap: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  max-width: 988px;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`


const Title = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  width: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const FieldItem = styled.div<{isSelected:boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  gap: 15px;
  background: ${({theme, isSelected}) => theme.colors[isSelected ? 'greenHover' :'background']};
  border: 1px solid ${({theme, isSelected}) => theme.colors[isSelected ? 'green' :'borderInputDefault']};
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  width: 100%;
  max-width: calc(100% / 4 - (60px / 4));
  color: ${({theme}) => theme.colors.black};
  svg {
    width: 40px;
    height: 40px;
    path {
      stroke: ${({theme, isSelected}) => theme.colors[isSelected ? 'green' :'grayC4']};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 12px;
    font-size: 16px;
    max-width: calc(100% / 4 - (48px / 4));
  }
`

const fieldsList: {title: string, icon: ReactNode}[] = [
    {
        title: 'Text',
        icon: <TextIcon/>
    },
    {
        title: 'Note',
        icon: <CommentIcon/>
    },
    {
        title: 'Text field',
        icon: <TextInputIcon/>
    },
    {
        title: 'Text area',
        icon: <TextInputIcon/>
    },
    {
        title: 'Email',
        icon: <MessageIcon/>
    },
    {
        title: 'Phone',
        icon: <SmartphoneIcon/>
    },
    {
        title: 'Number',
        icon: <NumberIcon/>
    },
    {
        title: 'Date',
        icon: <CalendarIcon/>
    },
    {
        title: 'Time',
        icon: <ClockIcon/>
    },
    {
        title: 'Checkbox',
        icon: <CheckIcon/>
    },
    {
        title: 'Radio buttons',
        icon: <RadioIcon/>
    },
    {
        title: 'Dropdown',
        icon: <DropdownIcon/>
    },
    {
        title: 'Payment',
        icon: <WalletIcon/>
    },
]
function FieldsListComponent({onClose}: {onClose: () => void}) {
    const {t} = useTranslation()
    const [selectedField, setSelectedField] = useState<number | null>(null);
    return (
        <Wrapper>
            <Title>{t("forms.modals.select")} <CloseButton onClick={onClose}><CloseIcon/></CloseButton></Title>
            <List>
                {
                    fieldsList.map((field, id) => <FieldItem isSelected={selectedField === id} onClick={() => setSelectedField(id)} key={id}>{field.icon}{field.title}</FieldItem>)
                }
            </List>
        </Wrapper>
    );
}

export default FieldsListComponent;