import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  background: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 10px;
  overflow: hidden;
`

const Image = styled.div`
  height: 220px;
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
  padding: 10px 15px 15px;
  gap: 10px;
`
const Text = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: ${({theme}) => theme.colors.darkGrey};
`

const Title = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  color: ${({theme}) => theme.colors.black};
  margin: 0;
`

const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const DateBlock = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: ${({theme}) => theme.colors.darkGrey};
`

function NewsComponent({...props}) {
    return (
        <Wrapper {...props}>
            <Image>
                <img src='/images/posts/post_2.png' alt="Post"/>
            </Image>
            <Content>
                <TitleBlock>
                    <DateBlock>11 sep 2022 at 9.30 AM</DateBlock>
                    <Title>Newstitle action title</Title>
                </TitleBlock>
                <Text>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Text>
            </Content>
        </Wrapper>
    );
}

export default NewsComponent;