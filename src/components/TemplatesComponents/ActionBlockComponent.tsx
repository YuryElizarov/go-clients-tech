import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {DeleteIcon, DragHorizontalIcon, EditIcon, FormsIcon, MessageIcon, SmartphoneIcon} from "../../UI/Svg";
import {Heading} from "../../UI/Heading";
import {EAction, IAction} from "../../types";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 100%;
  flex-direction: column;
  max-width: 988px;
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

const List = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 0;
  flex-direction: column;
  width: 100%;
`

const HeadingStyled = styled(Heading)`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};

  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
    padding: 16px;
  }
`


const Info = styled.div<{ isGreen: boolean }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 15px;

  svg {
    width: 40px;
    height: 40px;

    path {
      stroke: ${({theme, isGreen}) => theme.colors[isGreen ? 'green' : 'grayC4']};
    }
  }

  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`
const Item = styled.div<{ isSelected: boolean }>`
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  cursor: pointer;
  background: ${({theme, isSelected}) => theme.colors[isSelected ? 'lightBiege' : 'background']};
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-left: 2px solid ${({theme, isSelected}) => isSelected ? theme.colors.green : 'transparent'};

  &:last-child {
    border-bottom: none;
  }

  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
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

const Desc = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};

  div {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: ${({theme}) => theme.colors.darkGrey};
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    gap: 8px;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 4.5px;
    font-size: 10px;
    line-height: 100%;
    background: ${({theme}) => theme.colors.green};
    border-radius: 800px;
    color: ${({theme}) => theme.colors.white};
  }

  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
    font-size: 16px;

    div {
      font-size: 12px;
      gap: 7px;
    }
  }
`

function ActionBlockComponent({data}: { data: IAction[] }) {
    const {t} = useTranslation()
    const [selectedAction, setSelectedAction] = useState<number | null>(null);
    return (
        <Wrapper>
            <DragButton><DragHorizontalIcon/></DragButton>
            <HeadingStyled as="h3">First action</HeadingStyled>
            <List>
                {
                    data.map((item, id) => (
                        <Item isSelected={id === selectedAction} key={`Item-${id}`}
                              onClick={() => setSelectedAction(id)}>

                            <Info isGreen>
                                {item.action === EAction.NewAction && <FormsIcon/>}
                                {item.action === EAction.Sms && <SmartphoneIcon/>}
                                {item.action === EAction.Email && <MessageIcon/>}
                                {item.action === EAction.Save && <FormsIcon/>}
                                <Desc>
                                    {t(`templates.action.actions.${item.title}`)}
                                    <div>{item.text} {item.count && <span>{item.count}</span>}</div>
                                </Desc>
                            </Info>
                            <Actions>
                                {item.action === EAction.NewAction ? <ButtonIcon><EditIcon/></ButtonIcon> :
                                    <ButtonIcon><DragHorizontalIcon/></ButtonIcon>}
                                <ButtonIcon><DeleteIcon/></ButtonIcon>
                            </Actions>
                        </Item>))
                }
            </List>
        </Wrapper>
    );
}

export default ActionBlockComponent;