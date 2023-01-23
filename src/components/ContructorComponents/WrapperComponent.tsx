import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {Heading} from "../../UI/Heading";
import {Toggle} from "../../UI/Toggle";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`


const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  svg {
    width: 24px;
    height: 24px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

function WrapperComponent({children, title}: {children?: ReactNode, title: string}) {
    const [isActive, setIsActive] = useState<boolean>(true);
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{title}</HeadingStyled>
                <Toggle isActive={isActive} onToggle={() => setIsActive(!isActive)}/>
            </Header>
            {isActive && children}
        </Wrapper>
    );
}

export default WrapperComponent;