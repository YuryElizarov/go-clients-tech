import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Heading} from "../../UI/Heading";
import {Button, EButtonVariants} from "../../UI/Button";
import {PlusIcon, SettingsIcon} from "../../UI/Svg";
import {DoctorComponent} from "../../components/BookingComponents";
import {useBookingState} from "../../store/booking/hooks";

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  width: 100%;
  
`

const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
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
  width: fit-content;
  color: ${({theme}) => theme.colors.black};

  span {
    color: ${({theme}) => theme.colors.grayC4};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const ActionBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 16px;
  justify-content: flex-end;
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  border-radius: 5px;

  svg path {
    stroke: ${({theme}) => theme.colors.white};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 7px 8px;
    font-size: 12px;
  }
`

const List = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 30px 20px 20px;
  flex-direction: column;
  gap: 30px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 24px 16px 16px;
  }
`
const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`

function DoctorsView() {
    const {t} = useTranslation()
    const {doctors} = useBookingState()
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("booking.doctors.title")} <span>({doctors.length})</span></HeadingStyled>
                <ActionBlock>
                    <ButtonIcon>
                        <SettingsIcon/>
                    </ButtonIcon>
                    <ButtonStyled as={Link} to="/booking/settings/add" variant={EButtonVariants.Default}>
                        <PlusIcon/> {t("booking.doctors.add")}
                    </ButtonStyled>
                </ActionBlock>
            </Header>
            <List>
                {doctors.map((doctor, id) => <DoctorComponent key={`Doctor-${id}`} {...doctor}/>)}
            </List>
        </Wrapper>
    );
}

export default DoctorsView;