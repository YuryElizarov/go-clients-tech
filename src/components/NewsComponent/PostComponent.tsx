import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {ClockIcon, FacebookIcon, GoogleIcon, MoreIcon} from "../../UI/Svg";
import {IPost} from "../../types";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 15px;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
    padding: 16px;
  }
`


const Icon = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 50%;

  svg {
    width: 24px;
    height: 24px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    width: 36px;
    height: 36px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const Text = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 7px;
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
const Date = styled(Text)<{isClock: boolean}>`
  color: ${({theme, isClock}) => theme.colors[isClock ? 'green' : 'gray']};
  width: fit-content;
  svg {
    width: 12px;
    height: 12px;
    path {
      stroke: ${({theme, isClock}) => theme.colors[isClock ? 'green' : 'gray']};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 10px;
      height: 10px;
    }
  }
`

const MoreButton = styled(Text)`
  cursor: pointer;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
`

const Description = styled.div<{ isShowMore: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  max-height: ${({isShowMore}) => isShowMore ? 'unset' : '22px'};
  overflow: hidden;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
`

function PostComponent({post: {isClock, date, text, isGoogle, image}}: {post: IPost}) {
    const [isShowMore, setIsShowMore] = useState<boolean>(false);
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Header>
                <Icon>
                     {isGoogle ? <GoogleIcon/> : <FacebookIcon/>}
                </Icon>
                <Content>
                    <Text ><Date isClock={isClock}>{isClock && <ClockIcon/>} {date}</Date><MoreIcon/></Text>
                    <Description isShowMore={isShowMore}>
                        {isShowMore
                            ? text :
                            `${text.substring(0, 100)}...`}
                    </Description>
                    <MoreButton
                        onClick={() => setIsShowMore(!isShowMore)}>{t(`news.posts.show_${isShowMore ? 'less' : 'more'}`)}</MoreButton>
                </Content>
            </Header>
            <ImageWrapper>
                <Image src={`/images/posts/${image}`}/>
            </ImageWrapper>
        </Wrapper>
    );
}

export default PostComponent;