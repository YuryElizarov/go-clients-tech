import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {TableListComponent, WaitlistFilterComponent} from "../../components/WaitlistComponents";
import {Tabs} from '../../UI/Tabs';
import {useWaitlistState} from "../../store/waitlist/hooks";

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

function WaitListPage() {
    const {t} = useTranslation()
    const {all, drafts, continuing, asap} = useWaitlistState()

    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("waitlist.title")}</HeadingStyled>
                <WaitlistFilterComponent/>
            </Header>
            <TabsStyled headers={[
                <>{t("waitlist.tabs.all")} <span>{all.length}</span></>,
                <>{t("waitlist.tabs.asap")} <span>{asap.length}</span></>,
                <>{t("waitlist.tabs.continuing")}<span>{continuing.length}</span></>,
                <>{t("waitlist.tabs.drafts")}<span>{drafts.length}</span></>,
            ]}
                        contents={[
                            <TableListComponent data={all}/>,
                            <TableListComponent data={asap}/>,
                            <TableListComponent data={continuing}/>,
                            <TableListComponent data={drafts}/>,
                        ]}
            />
        </Wrapper>
    );
}

export default WaitListPage;