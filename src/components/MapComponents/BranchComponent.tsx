import React, {ReactNode} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CrossIcon, DeleteIcon, EditIcon, FacebookIcon, GoogleIcon, LinkIcon} from "../../UI/Svg";
import {Heading} from "../../UI/Heading";
import {StatisticItemComponent} from "../DashboardComponents/StatisticComponents";
import {ReportComponent} from "../ReviewComponents";
import {IBranch} from "../../types";

const Wrapper = styled.div<{isSelected: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  gap: 15px;
  background: ${({theme, isSelected}) => theme.colors[isSelected ? 'lightBiege' :'background']};
  border: 2px solid ${({theme}) => theme.colors.borderInputDefault};
  border-left: 2px solid ${({theme, isSelected}) => theme.colors[isSelected ? 'green' : 'borderInputDefault']};
  border-radius: 5px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
    padding: 16px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 56px;
  height: 56px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 56px;

  svg {
    width: 32px;
    height: 32px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px;
    gap: 8px;
    width: 46px;
    height: 46px;
    svg {
      width: 26px;
      height: 26px;
    }
  }
`

const DescBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const HeadingStyled = styled(Heading)`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const Address = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
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

  &:first-child {
    svg path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const TimeBlock = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -5px;
  color: ${({theme}) => theme.colors.gray};

  span {
    display: flex;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    background: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const RatingBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  padding: 8px 10px;
  border: 1px solid ${({theme}) => theme.colors.grayC4};
  border-radius: 56px;

  svg {
    width: 16px;
    height: 16px;
  }

  span {
    margin-left: -6px;
    color: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
    padding: 6px 8px;
    font-size: 12px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const Status = styled.div<{ isOpen: boolean }>`
  color: ${({theme, isOpen}) => theme.colors[isOpen ? 'green' : "red"]};
`

const IdBlock = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
  text-align: right;
  color: ${({theme}) => theme.colors.grayC4};

`

const StatisticItem = styled(StatisticItemComponent)`
  box-shadow: none;
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  max-width: calc(50% - 5px);
  & > div {
    &:nth-child(2) {
      margin-top: 0;
    }
  }
`
const RepostStyled = styled(ReportComponent)`
  box-shadow: none;
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  max-width: calc(50% - 5px);
  & > div {
    &:nth-child(2) {
      height: 52px;
    }
  }
`

const Statistic = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`
const mockStatistic: Array<{
    title: string,
    value: number | ReactNode
    period: string,
    percent: number,
    isNegative?: boolean
}> = [
    {
        title: 'total_send',
        value: 1200,
        period: '7',
        percent: 2
    },
    {
        title: 'report',
        value: 980,
        period: '7',
        percent: 2,
        isNegative: true
    },
    {
        title: 'opened',
        value: 876,
        period: '7',
        percent: 15
    }
]
function BranchComponent({isSelected, item, onSelect}: {isSelected: boolean, item: IBranch, onSelect: () => void}) {
    const {t} = useTranslation()
    return (
        <Wrapper isSelected={isSelected} onClick={onSelect}>
            <IconWrapper>
                <CrossIcon/>
            </IconWrapper>
            <DescBlock>
                <Header>
                    <HeadingStyled as='h3'>
                        {item.title}
                        <Actions>
                            <ButtonIcon><LinkIcon/></ButtonIcon>
                            <ButtonIcon><EditIcon/></ButtonIcon>
                            <ButtonIcon><DeleteIcon/></ButtonIcon>
                        </Actions>
                    </HeadingStyled>
                    <Address>{item.address}</Address>
                </Header>
                <TimeBlock>
                    <Status isOpen={item.isOpen}>{t(`map.status.${item.isOpen ? 'opened' : 'closed'}`)}</Status>
                    <span/>
                    {item.workTime}
                </TimeBlock>
                <Footer>
                    <RatingBlock>
                        <Rating><GoogleIcon/> {item.google.rating}<span>({item.google.rating})</span></Rating>
                        <Rating><FacebookIcon/> {item.facebook.rating}<span>({item.facebook.rating})</span></Rating>
                    </RatingBlock>
                    <IdBlock>id {item.id}</IdBlock>
                </Footer>

                {isSelected && <Statistic>
                    {
                        mockStatistic.map((statistic, id) => <StatisticItem
                            key={`statistic-${id}`} {...statistic}
                            title={t(`map.statistic.${statistic.title}`)}/>)
                    }
                    <RepostStyled/>
                </Statistic>}
            </DescBlock>
        </Wrapper>
    );
}

export default BranchComponent;