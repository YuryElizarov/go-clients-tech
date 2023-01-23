import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../../UI/Heading";
import {PatientsFilterComponent} from "../../../components/BookingComponents";
import {TablePatientsView} from "../../../views/BookingsViews";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  background: ${({theme}) => theme.colors.background};
  border-radius: 10px;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

function PatientsPage() {
    const {t} = useTranslation()
    return (
        <Wrapper> 
            <Header>
                <HeadingStyled as="h3">{t("booking.patients.title")}</HeadingStyled>
                <PatientsFilterComponent/>
            </Header>
            <TablePatientsView/>
        </Wrapper>
    );
}

export default PatientsPage;