import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import {Text} from "../../UI/Text";

export const WrapperNav = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  margin: 50px auto 0;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  gap: 60px;
  ${({theme}) => theme.mediaQueries.ll}{
    gap: 58px;
  }
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
  gap: 40px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 36px;
  }
`

export const FormFA = styled(Form)`
  gap: 20px;
`

export const BlockUnderInput = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ForgotLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.green};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
export const Timer = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

export const FooterLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 600px;
  margin: 24px auto 100px;
`

export const FooterLink = styled(Link)`
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

export const FooterLinkRight = styled(FooterLink)`
  color: ${({theme}) => theme.colors.green};
`

export const ButtonStyled = styled(Button)`
  max-width: 100%;
`

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`

export const Breadcrumb = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;
`