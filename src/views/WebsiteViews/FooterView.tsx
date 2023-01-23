import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Button, EButtonVariants} from "../../UI/Button";
import {EyeIcon, LogoMiniIcon} from "../../UI/Svg";

const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.green};
`
const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 20px 32px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: space-between;
  gap: 22px;
`

const ButtonStyled = styled(Button)`
  width: fit-content;
  font-size: 16px;
  line-height: 100%;
  padding: 8px 10px;
  border-radius: 5px;
  svg {
    width: 16px;
    height: 16px;
  }
`

const Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  svg {
    height: 32px;
    path {
      fill: ${({theme}) => theme.colors.white};
    }
  }
`

const Copyright = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: ${({theme}) => theme.colors.white};
  max-width: 300px;
`
function FooterView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Content>
                <Desc>
                    <LogoMiniIcon/>
                    <Copyright>Сделано с помощью сервис-платформы Go Clients Tech
                        © GoClientsTech 2022. All rights reserved.</Copyright>
                </Desc>
                <ButtonStyled variant={EButtonVariants.White}><EyeIcon/>{t("website.try")}</ButtonStyled>
            </Content>
        </Wrapper>
    );
}

export default FooterView;