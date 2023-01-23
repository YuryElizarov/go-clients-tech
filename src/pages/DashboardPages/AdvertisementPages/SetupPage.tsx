import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../../UI/Heading";
import {Button, EButtonVariants} from "../../../UI/Button";
import {Input} from "../../../UI/Input";
import {FacebookIcon, GoogleIcon} from "../../../UI/Svg";

const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`

const Header = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
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

const Content = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  width: 100%;
`

const ButtonStyled = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  max-width: unset;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
    padding: 12px 16px;
  }
`

const Socials = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`
function SetupPage() {
    const [data, setData] = useState<{
        google: string,
        facebook: string,
    }>({
        google: '',
        facebook: ''
    });

    const {t} = useTranslation()

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("advertisement.ads_setup.title")}</HeadingStyled>
            </Header>
            <Content>
                <Socials>
                    <Input iconLeft={<GoogleIcon/>} value={data.google} onChange={val => onChange('google', val)} id="google"
                           label={t("advertisement.ads_setup.labels.google") as string}
                    />
                    <Input iconLeft={<FacebookIcon/>} value={data.facebook} onChange={val => onChange('facebook', val)} id="facebook"
                           label={t("advertisement.ads_setup.labels.facebook") as string}
                    />
                </Socials>
                <ButtonBlock>
                    <ButtonStyled disabled variant={EButtonVariants.Default}>{t("advertisement.ads_setup.button")}</ButtonStyled>
                </ButtonBlock>
            </Content>
        </Wrapper>
    );
}

export default SetupPage;