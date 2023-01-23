import React from 'react';
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {TabsView} from "../../../views/BookingsViews";
import UserPage from "./UserPage";
import PersonalPage from "./PersonalPage";
import AccountPage from "./AccountPage";
import {Button, EButtonVariants} from "../../../UI/Button";
import {PlusIcon} from "../../../UI/Svg";
import AddEmployeeModal from "../../../components/Modals/AddEmployeeModal";

const links: Array<{ title: string, link: string }> = [
    {title: 'user.tabs.person_data', link: '/clinic'},
    {title: 'user.tabs.accounts', link: '/clinic/accounts'},
    {title: 'user.tabs.personal', link: '/clinic/personal'},
]

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
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

function Index() {
    const {t} = useTranslation()
    return (
        <>
            <AddEmployeeModal/>
            <Routes>
                <Route path="/" element={<><TabsView links={links}/><UserPage/></>}/>
                <Route path="/accounts" element={
                    <>
                        <HeaderStyled>
                            <TabsView links={links}/>
                            <ButtonStyled
                                // onClick={() => onShowModal(EModals.NewWaitlist)}
                                variant={EButtonVariants.Default}><PlusIcon/>{t('user.accounts.button')}
                            </ButtonStyled>
                        </HeaderStyled>
                        <AccountPage/>
                    </>
                }/>
                <Route path="/personal" element={<><TabsView links={links}/><PersonalPage/></>}/>
            </Routes>
        </>
    );
}

export default Index;