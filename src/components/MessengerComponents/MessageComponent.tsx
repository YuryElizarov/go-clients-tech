import React, {useMemo} from 'react';
import styled from "styled-components";
import {DoctorIcon} from "../../UI/Svg";
import {IUser} from "../../types";

const Wrapper = styled.div<{isNotMyMessage: boolean}>`
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: ${({isNotMyMessage}) => isNotMyMessage ? 'flex-start' : "flex-end"};
  width: 100%;
`

const Message = styled.div<{isNotMyMessage: boolean}>`
  display: flex;
  max-width: 50%;
  align-items: flex-end;
  align-content: flex-end;
  flex-direction: ${({isNotMyMessage}) => isNotMyMessage ? 'row-reverse' : "row"};
  gap: 20px;
  justify-content: flex-end;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Icon = styled.div`
  min-width: 40px;
  height: 40px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  ${({theme}) => theme.mediaQueries.ll} {
    min-width: 36px;
    height: 36px;
  }
`

const Content = styled.div<{isNotMyMessage: boolean}>`
  display: flex;
  align-items: ${({isNotMyMessage}) => isNotMyMessage ? 'flex-start' : "flex-end"};
  align-content: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`

const DateBlock = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  text-align: right;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`

const Name = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
const InfoBlock = styled.div<{isNotMyMessage: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  gap: 10px;
  background: ${({theme, isNotMyMessage}) => theme.colors[isNotMyMessage ? 'green' :'lightBiege']};
  border-radius: 15px 15px 0 15px;
  width: fit-content;
  ${Text} {
    color: ${({theme, isNotMyMessage}) => theme.colors[isNotMyMessage ? 'white' :'black']};
  }
  ${Name} {
    color: ${({theme, isNotMyMessage}) => theme.colors[isNotMyMessage ? 'white' :'green']};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px;
    gap: 8px;
  }
`

const Image = styled.img`
  width: auto;
  height: 100%;
`

const accoutId = 0;

function MessageComponent({user: {name, soname, image, id}, text, date}: { user: IUser, text: string, date: string }) {
    const isNotMyMessage = useMemo(() => id !== accoutId, [id])
    return (
        <Wrapper isNotMyMessage={isNotMyMessage}>
            <Message isNotMyMessage={isNotMyMessage}>
                <Content isNotMyMessage={isNotMyMessage}>
                    <InfoBlock isNotMyMessage={isNotMyMessage}>
                        <Name>{name} {soname}</Name>
                        <Text>{text}</Text>
                    </InfoBlock>
                    <DateBlock>{date}</DateBlock>
                </Content>
                <Icon>
                    {
                        image
                            ? <Image src={`/images/${image}`}/>
                            : <DoctorIcon width={20} height={20}/>
                    }
                </Icon>
            </Message>
        </Wrapper>
    );
}

export default MessageComponent;