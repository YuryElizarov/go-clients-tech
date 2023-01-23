import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import _ from 'lodash';
import ListWrapperComponent from "./ListWrapperComponent";
import {DeleteIcon, EditIcon, LinkIcon, UserIcon} from "../../UI/Svg";
import {Toggle} from "../../UI/Toggle";

const Content = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};

  a {
    color: ${({theme}) => theme.colors.green};
    text-decoration: underline;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const DoctorRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`
const RightBlock = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  gap: 12px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
  }
`
const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`
const User = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  } 
`

export const Account = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.lightBiege};
  ${({theme}) => theme.mediaQueries.ll} {
    width: 46px;
    height: 46px;
  }
`
const Name = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const IdBlock = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const UserInfo = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`
const ToggleBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 7px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const ToggleLabel = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
    gap: 12px;
  }
`

const reviews: any[] = [
    {
        count: '36',
        title: 'Bookimed',
    },
    {
        count: '120',
        title: 'Irecommend',
    },
    {
        count: '36',
        title: 'Trustpilot',
    },
    {
        count: '36',
        title: 'Bookimed',
    },
    {
        count: '120',
        title: 'Irecommend',
    },
    {
        count: '36',
        title: 'Trustpilot',
    },
]

const IconButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
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
function ReviewsComponent() {
    const {t} = useTranslation()
    const [values, setValues] = useState<string[]>([]);

    const onChange = (val: any) => {
        setValues(prevState => {
            if (_.includes(prevState, val)) {
                return [...prevState.filter((doctor) => doctor !== val)]
            }
            return [...prevState, val]
        })
    }
    return (
        <>
            <Content>
                {t("constructor.doctors.desc")}
            </Content>
            <ListWrapperComponent length={reviews.length}>
                {
                    reviews.map(({title, count}, rid) => (
                        <DoctorRow key={rid}>
                            <LeftBlock>
                                <User>
                                    <Account>
                                        <UserIcon/>
                                    </Account>
                                    <UserInfo>
                                        <Name>{title}</Name>
                                        <IdBlock>{t("constructor.reviews.text", {count})}</IdBlock>
                                    </UserInfo>
                                </User>
                            </LeftBlock>
                            <RightBlock>
                                <Actions>
                                    <IconButton><LinkIcon/></IconButton>
                                    <IconButton><EditIcon/></IconButton>
                                    <IconButton><DeleteIcon/></IconButton>
                                </Actions>
                                <ToggleBlock>
                                    <ToggleLabel>{t("constructor.reviews.label")}</ToggleLabel>
                                    <Toggle isActive={_.includes(values, String(rid))} onToggle={() => onChange(String(rid))}/>
                                </ToggleBlock>
                            </RightBlock>
                        </DoctorRow>
                    ))
                }
            </ListWrapperComponent>
        </>
    );
}

export default ReviewsComponent;