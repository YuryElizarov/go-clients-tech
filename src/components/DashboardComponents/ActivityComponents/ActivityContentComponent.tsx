import React, {useMemo, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {ClinicIcon, ClockIcon, CommentIcon, GoogleIcon, PaperclipIcon, ReitingIcon, WalletIcon} from "../../../UI/Svg";
import ChevronDown from "../../../UI/Svg/icons/ChevronDown";
import HistoryComponent from './HistoryComponent';
import {TData} from "../../../types";
import {VisitComponent} from "./index";
import {renderDate} from "../../../utils";

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 16px;
  padding: 16px 16px 20px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 5px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;
  justify-content: space-between;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 8px;
  }
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  svg path {
    stroke: ${({theme}) => theme.colors.green};
    stroke-width: 2px;
  }
`

const DropdownIcon = styled.div<{ isShowMore: boolean }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  svg {

    ${({isShowMore}) => isShowMore ? 'transform: rotateZ(180deg);' : ''}
    path {
      stroke: ${({theme}) => theme.colors.green};
      stroke-width: 1px;
    }
  }
`

const ListPay = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const Item = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};

  span {
    color: ${({theme}) => theme.colors.black};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const StarBlock = styled.div`
  padding: 4px 8px;
  border: 1px solid ${({theme}) => theme.colors.grayC4};
  border-radius: 56px;
  display: flex;
  gap: 0;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 2px 6px;
    font-size: 10px;
  }
`

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const Review = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  margin: 0;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Body = styled.div<{isShowMore: boolean}>`
  width: 100%;
  max-height: ${({isShowMore}) => isShowMore ? '1000px' : '0' };;
  overflow: hidden;
  margin-top: ${({isShowMore}) => isShowMore ? '0' : '-16px' };
`

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 5px;
    font-size: 12px;
  }
`

const DateBlock = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`

function ActivityContentComponent({item, isShow}: {item: TData, isShow?: boolean}) {
    const [isShowMore, setIsShowMore] = useState<boolean>(false);
    const {t} = useTranslation()
    const customTitle = useMemo(() => 'customTitle' in item ? item.customTitle : null, [item])
    return (
        <Content>
            <Header onClick={() => setIsShowMore(!isShowMore)}>
                    <Title>
                    {
                        'history' in item && <>
                            <IconWrap>
                                <PaperclipIcon/>
                            </IconWrap>
                            <TitleBlock>
                                {t(customTitle || "activity.title.history")}
                                {isShow && <DateBlock>{renderDate(item.date, true)}</DateBlock>}
                            </TitleBlock>
                        </>
                    }
                    {
                        'visit' in item && <>
                            <IconWrap>
                                <ClinicIcon/>
                            </IconWrap>
                            <TitleBlock>
                                {t(customTitle || "visit.title")}
                                {isShow && <DateBlock>{renderDate(item.date, true)}</DateBlock>}
                            </TitleBlock>
                        </>
                    }
                    {
                        'review' in item && <>
                            <GoogleIcon/>
                            <TitleBlock>
                                {t(customTitle || "activity.title.review")}
                                {isShow && <DateBlock>{renderDate(item.date, true)}</DateBlock>}
                            </TitleBlock>
                        </>
                    }
                    {
                        'message' in item && <>
                            <IconWrap>
                                <CommentIcon/>
                            </IconWrap>
                            <TitleBlock>
                                {t(customTitle || "activity.title.message")}
                                {isShow && <DateBlock>{renderDate(item.date, true)}</DateBlock>}
                            </TitleBlock>
                        </>
                    }
                    {
                        'dateContent' in item && <>
                            <IconWrap>
                                <ClockIcon/>
                            </IconWrap>
                            <TitleBlock>
                                {t(customTitle || "activity.title.date")}
                                {isShow && <DateBlock>{renderDate(item.date, true)}</DateBlock>}
                            </TitleBlock>
                        </>
                    }
                    {
                        'data' in item && <>
                            <IconWrap>
                                <WalletIcon height={16} width={16}/>
                            </IconWrap>
                            <TitleBlock>
                                {t(customTitle || "activity.title.pay")}
                                {isShow && <DateBlock>{renderDate(item.date, true)}</DateBlock>}
                            </TitleBlock>
                        </>
                    }
                </Title>
                <RightBlock>

                    {
                        'review' in item &&
                        <StarBlock>
                            {item.stars} <ReitingIcon height={16} width={16}/>
                        </StarBlock>
                    }
                    <DropdownIcon isShowMore={isShowMore}>
                        <ChevronDown height={16} width={16}/>
                    </DropdownIcon>
                </RightBlock>
            </Header>
            <Body isShowMore={isShowMore}>
                {
                    'history' in item &&
                    <HistoryComponent {...item.history}/>
                }
                {
                    'visit' in item &&
                    <VisitComponent {...item.visit}/>
                }
                {
                    'data' in item &&
                    <ListPay>
                        {
                            item.data.map((row, id) => <Item key={`row-${id}`}>{row.name}
                                <span>{row.price}</span></Item>)
                        }
                    </ListPay>
                }
                {
                    ('review' in item) &&
                    <Review>
                        {item.review}
                    </Review>
                }
                {
                    ('message' in item) &&
                    <Review>
                        {item.message}
                    </Review>
                }
                {
                    ('dateContent' in item) &&
                    <Review>
                        {item.dateContent}
                    </Review>
                }
            </Body>
        </Content>
    );
}

export default ActivityContentComponent;