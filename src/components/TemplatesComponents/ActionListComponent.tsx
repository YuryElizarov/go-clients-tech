import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    CloseIcon, FormsIcon,
    MessageIcon, SaveIcon,
    SmartphoneIcon
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
  width: 100%;
  flex-direction: column;
  max-width: 988px;
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
  cursor: pointer;
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
  padding: 20px 15px;
  text-align: center;
  justify-content: center;
  gap: 15px;
  background: ${({theme, isSelected}) => theme.colors[isSelected ? 'greenHover' :'background']};
  border: 1px solid ${({theme, isSelected}) => theme.colors[isSelected ? 'green' :'borderInputDefault']};
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  width: 100%;
  max-width: calc(100% / 4 - (60px / 4));
  color: ${({theme, isSelected}) => theme.colors[isSelected ? 'green' :'black']};
  svg {
    width: 40px;
    height: 40px;
    path {
      stroke: ${({theme, isSelected}) => theme.colors[isSelected ? 'green' :'grayC4']};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
    padding: 16px 12px;
    font-size: 16px;
    max-width: calc(100% / 4 - (48px / 4));
    svg {
      width: 36px;
      height: 36px;
    }
  }
`

const fieldsList: {title: string, icon: ReactNode}[] = [
    {
        title: 'new_action',
        icon: <FormsIcon/>
    },
    {
        title: 'email',
        icon: <MessageIcon/>
    },
    {
        title: 'sms',
        icon: <SmartphoneIcon/>
    },
    {
        title: 'save',
        icon: <SaveIcon/>
    }
]
function ActionListComponent({onClose}: {onClose: () => void}) {
    const {t} = useTranslation()
    const [selectedField, setSelectedField] = useState<number | null>(null);
    return (
        <Wrapper>
            <Title>{t("templates.action.select")} <CloseButton onClick={onClose}><CloseIcon/></CloseButton></Title>
            <List>
                {
                    fieldsList.map((field, id) => <FieldItem isSelected={selectedField === id} onClick={() => setSelectedField(id)} key={id}>
                        {field.icon}{t(`templates.action.actions.${field.title}`)}
                    </FieldItem>)
                }
            </List>
        </Wrapper>
    );
}

export default ActionListComponent;