import React from 'react';
import styled from 'styled-components'
import {DeleteIcon, EditIcon, FacebookIcon, GoogleIcon, LinkIcon} from "../../UI/Svg";
import {IAccount} from "../../types";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 20px 0;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 0;
  }
`

const Info = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const Name = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const Date = styled.div`
  display: flex;
  gap: 7px;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};

  svg {
    width: 16px;
    height: 16px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
    font-size: 12px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const DateNameBlock = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 48px;

  svg {
    width: 24px;
    height: 24px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    width: 46px;
    height: 46px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`
const Image = styled.img`
  width: auto;
  height: 100%;
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

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
  }
`

function AccountComponent({account: {name, image, date, soname, isGoogle}}: { account: IAccount }) {
    return (
        <Wrapper>
            <Info>
                <Icon>
                    {
                        image
                            ? <Image src={`/images/${image}`}/>
                            : isGoogle ? <GoogleIcon/> : <FacebookIcon/>
                    }
                </Icon>
                <DateNameBlock>
                    <Name>{name} {soname}</Name>
                    <Date>{image ? isGoogle ? <GoogleIcon/> : <FacebookIcon/> : null} {date}</Date>
                </DateNameBlock>
            </Info>
            <Actions>
                <ButtonIcon><LinkIcon/></ButtonIcon>
                <ButtonIcon><EditIcon/></ButtonIcon>
                <ButtonIcon><DeleteIcon/></ButtonIcon>
            </Actions>
        </Wrapper>
    );
}

export default AccountComponent;