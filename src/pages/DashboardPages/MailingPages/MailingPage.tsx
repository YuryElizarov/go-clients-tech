import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {CardComponent} from "../../../components/UserComponents";
import {Button, EButtonVariants} from "../../../UI/Button";
import {PlusIcon} from "../../../UI/Svg";
import {Tabs} from "../../../UI/Tabs";
import {TableComponent} from "../../../components/MailingComponents";
import {StatisticView} from "../../../views/MailingViews";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
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
const TabsStyled = styled(Tabs)`
  gap: 20px;

  span {
    padding: 2px 4.5px;
  }
`

const Content = styled.div`
  width: 100%;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const CardStyled = styled(CardComponent)`
  & > div:first-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`

function MailingPage() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <CardStyled title={t("mailing.title")}
                        headerChildren={
                            <ButtonStyled
                                as={Link}
                                to='/mailing/create'
                                variant={EButtonVariants.Default}><PlusIcon/>{t('mailing.button')}
                            </ButtonStyled>
                        }
            >
                <Content>
                    <TabsStyled headers={[
                        <>{t("mailing.tabs.all")} <span>120</span></>,
                        <>{t("mailing.tabs.stunt")} <span>120</span></>,
                        <>{t("mailing.tabs.draft")} <span>120</span></>,
                        <>{t("mailing.tabs.reuse")} <span>120</span></>,
                    ]} contents={[
                        <TableComponent/>,
                        <TableComponent/>,
                        <TableComponent/>,
                        <TableComponent/>,
                    ]}/>
                </Content>
            </CardStyled>
            <StatisticView/>
        </Wrapper>
    );
}

export default MailingPage;