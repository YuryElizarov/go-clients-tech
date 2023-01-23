import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {DeleteIcon, EditIcon, LinkIcon} from "../../UI/Svg";
import ActivityContentComponent from "../DashboardComponents/ActivityComponents/ActivityContentComponent";
import {Button, EButtonVariants} from "../../UI/Button";
import {TData} from "../../types";
import {UserComponent} from "../DashboardComponents/ActivityComponents";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.03));
  border-radius: 5px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center; 
  width: 100%;
  align-content: center;
  justify-content: space-between;
`

export const Account = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.lightBiege};
  ${({theme}) => theme.mediaQueries.ll} {
    width: 46px;
    height: 46px;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;
`

const DetailLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.green};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  width: fit-content;
  font-size: 16px;
  line-height: 100%;
  border-radius: 5px;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 6px 8px;
  }
`

function DetailComponent({items}: { items: TData[] }) {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Header>
                <UserComponent patient={items[0].patient} date={items[0].date}/>
                <Actions>
                    <LinkIcon/>
                    <EditIcon/>
                    <DeleteIcon/>
                </Actions>
            </Header>
            {items.map((item) => <ActivityContentComponent item={{...item}}/>)}
            <Footer>
                <Buttons>
                    <ButtonStyled variant={EButtonVariants.Default}>{t("activity.accept")}</ButtonStyled>
                    <ButtonStyled variant={EButtonVariants.Gray}>{t("activity.cancel")}</ButtonStyled>
                </Buttons>
                <DetailLink to="/">{t("activity.detail")}</DetailLink>
            </Footer>
        </Wrapper>
    );
}

export default DetailComponent;