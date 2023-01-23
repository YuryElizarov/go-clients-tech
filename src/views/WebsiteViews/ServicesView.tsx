import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {ServiceComponent} from "../../components/BookingComponents";
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
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  width: fit-content;
  color: ${({theme}) => theme.colors.black};

  span {
    color: ${({theme}) => theme.colors.grayC4};
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
  width: 100%;
`

function ServicesView({title}:{title: string}) {
    const {t} = useTranslation()
    const {services} = useBookingState()
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t(title)}</HeadingStyled>
            </Header>
            <List>
                {services.filter((service) => !service.isHidden).map((service, id) => <ServiceComponent
                    service={service} isShowMore={false} key={`Service-${id}`}/>)}
            </List>
        </Wrapper>
    );
}

export default ServicesView;