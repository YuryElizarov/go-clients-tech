import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import logo from '../../assets/images/ClinicLogo.png'
import {CalendarIcon} from "../../UI/Svg";
import {LangComponent, LocationComponent} from "../../components/DashboardComponents/SettingComponents";
import {Button, EButtonVariants} from "../../UI/Button";
import RatingComponent from "../../components/WebsiteComponents/RatingComponent";

const Navbar = styled.nav`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
`

const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 20px 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  background: ${({theme}) => theme.colors.background};
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  gap: 20px;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const Logo = styled.img`
  min-width: 58px;
  ${({theme}) => theme.mediaQueries.ll} {
    width: 48px;
    min-width: unset;
  }
`

const Title = styled(Heading)`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 32px;
`

const ButtonStyled = styled(Button)`
  width: fit-content;
  font-weight: 500;
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 16px;
    font-size: 16px;
  }
`

function NavbarView() {
    const {t} = useTranslation()
    return (
        <Navbar>
            <Content>
                <Heading>
                    <LogoLink to='/website'>
                        <Logo src={logo}/>
                    </LogoLink>
                    <DescBlock>
                        <Title>{t("website.title")}</Title>
                        <RatingComponent/>
                    </DescBlock>
                </Heading>
                <Actions>
                    <LocationComponent/>
                    <LangComponent/>
                    <ButtonStyled
                        as={Link} to="/website/booking"
                        variant={EButtonVariants.Default}>
                        <CalendarIcon/> {t("website.button")}
                    </ButtonStyled>
                </Actions>
            </Content>
        </Navbar>
    );
}

export default NavbarView;