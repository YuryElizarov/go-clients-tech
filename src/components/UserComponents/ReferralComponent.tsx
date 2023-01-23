import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {AddPatientIcon, CloseIcon} from "../../UI/Svg";
import {Heading} from "../../UI/Heading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  background: ${({theme}) => theme.colors.greenHover};
  border: 1px solid ${({theme}) => theme.colors.green};
  border-radius: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const Content = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 15px;
  svg {
    width: 40px;
    height: 40px;
    path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
    svg {
      width: 36px;
      height: 36px;
    }
  }
`

const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  align-content: center;
  background: none;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
    path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
`

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
  }
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.green};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Text = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll}{
    font-size: 12px;
  }
`

function ReferralComponent() {
    const {t} = useTranslation()
    const [isShow, setIsShow] = useState<boolean>(true);
    if (!isShow) return null
    return (
        <Wrapper>
            <Content>
                <AddPatientIcon/>
                <Info>
                    <HeadingStyled as="h3">{t("user.person_data.referral.title")}</HeadingStyled>
                    <Text as="h3">{t("user.person_data.referral.text")}</Text>
                </Info>
            </Content>
            <CloseButton onClick={() => setIsShow(false)}>
                <CloseIcon/>
            </CloseButton>
        </Wrapper>
    );
}

export default ReferralComponent;