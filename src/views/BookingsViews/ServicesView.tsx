import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {Button, EButtonVariants} from "../../UI/Button";
import {PlusIcon} from "../../UI/Svg";
import {ServiceComponent} from "../../components/BookingComponents";
import {useBookingState} from "../../store/booking/hooks";
import {useAppAction} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  width: 100%;
  max-width: 696px;
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
    font-size: 12px;
    padding: 7px 8px;
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

function ServicesView() {
    const {t} = useTranslation()
    const {onShowModal} = useAppAction()
    const {services} = useBookingState()
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("booking.services.title")} <span>({services.length})</span></HeadingStyled>
                <ActionBlock>
                    <ButtonStyled onClick={() => onShowModal(EModals.AddService)} variant={EButtonVariants.Default}>
                        <PlusIcon/> {t("booking.services.add")}
                    </ButtonStyled>
                </ActionBlock>
            </Header>
            <List>
                {services.map((service, id) => <ServiceComponent key={`Service-${id}`} service={service}/>)}
            </List>
        </Wrapper>
    );
}

export default ServicesView;