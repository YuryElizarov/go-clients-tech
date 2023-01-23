import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 2px solid ${({theme}) => theme.colors.borderInputDefault};
  filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.03));
  border-radius: 10px;
  min-width: 284px;
  overflow: hidden;
`

const Image = styled.div`
  height: 280px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  img {
    height: auto;
    width: 100%;
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;  
  gap: 10px;
`
const Text = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.darkGrey};
`

const Title = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  margin: 0;
`
function DoctorComponent({...props}) {
    return (
        <Wrapper to='/website/doctor' {...props}>
            <Image>
                <img src="/images/profile.png" alt="Profile"/>
            </Image>
            <Content>
                <Title>Аверинов Дмитрий</Title>
                <Text>Врач-стоматолог</Text>
            </Content>
        </Wrapper>
    );
}

export default DoctorComponent;