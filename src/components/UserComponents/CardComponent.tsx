import React, {ReactNode} from 'react';
import styled from "styled-components";
import {Heading} from "../../UI/Heading";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  flex-direction: column;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
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
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`

function CardComponent({
                           title,
                           children,
                           headerChildren,
                           ...props
                       }: { title: string, children?: ReactNode, headerChildren?: ReactNode }) {
    return (
        <Wrapper {...props}>
            <Header>
                <HeadingStyled as="h3">{title}</HeadingStyled>
                {headerChildren}
            </Header>
            <Content>{children}</Content>
        </Wrapper>
    );
}

export default CardComponent;