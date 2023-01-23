import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Button, EButtonVariants} from "../../UI/Button";
import {PlusIcon} from "../../UI/Svg";
import {ActionListComponent} from "../../components/TemplatesComponents";
import ActionBlockComponent from "../../components/TemplatesComponents/ActionBlockComponent";
import {EAction, IAction} from "../../types";

const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
`
const Footer = styled(Wrapper)`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 20px;
`

const Buttons = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

const FooterButton = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  gap: 10px;
  white-space: nowrap;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
    padding: 12px 16px;
  }
  
`

const firstBlock: IAction[] = [
    {
        title: 'new_action',
        text: 'Send mails and text',
        action: EAction.NewAction,
        count: 12,
    },
    {
        title: 'email',
        text: 'Send email messages to patiens',
        action: EAction.Email,
    },
    {
        title: 'sms',
        text: 'Send text SMS messages to patiens',
        action: EAction.Sms,
    },
    {
        title: 'save',
        text: 'Save patient data from form even if patient confirmed',
        action: EAction.Save,
    }
]

const secondBlock: IAction[] = [
    {
        title: 'new_action',
        text: 'Send mails and text',
        action: EAction.NewAction,
        count: 12,
    },
    {
        title: 'sms',
        text: 'Send text SMS messages to patiens',
        action: EAction.Sms,
    },
]
function ActionsView() {
    const {t} = useTranslation()
    const [isShowList, setIsShowList] = useState<boolean>(true);
    return (
        <Wrapper>
            <ActionBlockComponent data={firstBlock}/>
            <ActionBlockComponent data={secondBlock}/>
            {isShowList && <ActionListComponent onClose={() => setIsShowList(false)}/>}
            <Footer>
                <FooterButton
                    onClick={() => setIsShowList(true)}
                    variant={EButtonVariants.Border}><PlusIcon/>{t('templates.action.buttons.add')}
                </FooterButton>
                <Buttons>
                    <FooterButton
                        variant={EButtonVariants.Text}>{t('templates.action.buttons.save')}</FooterButton>
                    <FooterButton
                        variant={EButtonVariants.Default}>{t('templates.action.buttons.create')}</FooterButton>
                </Buttons>
            </Footer>
        </Wrapper>
    );
}

export default ActionsView;