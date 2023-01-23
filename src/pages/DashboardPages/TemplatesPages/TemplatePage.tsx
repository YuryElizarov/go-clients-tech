import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Heading} from "../../../UI/Heading";
import {Tabs} from "../../../UI/Tabs";
import {Button, EButtonVariants} from "../../../UI/Button";
import {PlusIcon} from "../../../UI/Svg";
import {TemplatesTableView} from "../../../views/TemplatesViews";

const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 5px;
  padding: 20px 20px 0;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 16px 0;
  }
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const TabsStyled = styled(Tabs)`
  gap: 5px;
`


const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;

  svg {
    path {
      stroke: ${({theme}) => theme.colors.white}
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 7px 8px;
    font-size: 12px;
  }
`

function TemplatePage() {
    const {t} = useTranslation()

    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("templates.title")}</HeadingStyled>
                <ButtonStyled
                    as={Link} to='/templates/actions'
                    variant={EButtonVariants.Default}><PlusIcon/>{t('templates.button_add')}</ButtonStyled>
            </Header>
            <TabsStyled headers={[
                <>{t("templates.tabs.all")} <span>120</span></>,
                <>{t("templates.tabs.default")} <span>2</span></>,
                <>{t("templates.tabs.custom")} <span>2</span></>,
                <>{t("templates.tabs.drafts")} <span>2</span></>,
                <>{t("templates.tabs.email")} <span>2</span></>,
                <>{t("templates.tabs.sms")} <span>2</span></>,
            ]}
                        contents={[
                            <TemplatesTableView/>,
                            <TemplatesTableView/>,
                            <TemplatesTableView/>,
                            <TemplatesTableView/>,
                            <TemplatesTableView/>,
                            <TemplatesTableView/>,
                        ]}
            />
        </Wrapper>
    );
}

export default TemplatePage;