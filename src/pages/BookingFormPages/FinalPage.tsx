import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {CheckIcon, LinkSecondIcon, LogoFullIcon, MessageIcon} from "../../UI/Svg";
import {Button, EButtonVariants} from "../../UI/Button";


export const WrapperNav = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  margin: 50px auto 0;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 35px;
  max-width: 456px;
  margin: auto;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 30px;
  }
`

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 30px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 24px;
  }
`
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`

const Title = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: ${({theme}) => theme.colors.black};
  margin: 0;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: ${({theme}) => theme.colors.darkGrey};
  margin: 0;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }

`

const Icon = styled.div`
  width: 64px;
  height: 64px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 50%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.greenHover};

  svg {
    width: 32px;
    height: 32px;

    path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    width: 58px;
    height: 58px;
    svg {
      width: 26px;
      height: 26px;
    }
  }
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  border-radius: 5px;
  width: fit-content;
  svg {
    width: 16px;
    height: 16px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 7px 8px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

function FinalPage() {

    const {t} = useTranslation()

    return (
        <>
            <WrapperNav>
                <LogoFullIcon/>
            </WrapperNav>
            <Block>
                <ContentBlock>
                    <Icon>
                        <CheckIcon/>
                    </Icon>
                    <TextBlock>
                        <Title>{t("final.title")}</Title>
                        <Text>{t("final.text")}</Text>
                    </TextBlock>
                </ContentBlock>
                <Buttons>
                    <ButtonStyled variant={EButtonVariants.Gray}><MessageIcon/>{t("final.buttons.subscribe")}</ButtonStyled>
                    <ButtonStyled as={Link} to='/website' variant={EButtonVariants.Default}><LinkSecondIcon/>{t("final.buttons.link")}</ButtonStyled>
                </Buttons>
            </Block>
        </>
    );
}

export default FinalPage;