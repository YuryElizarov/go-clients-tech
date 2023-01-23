import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {TimetableRowComponent} from "../../components/BookingComponents";
import {BookingIcon, CameraIcon, ClinicIcon, DoctorIcon, MessageIcon, PatientIcon, WalletIcon} from "../../UI/Svg";
import {Toggle} from "../../UI/Toggle";
import {Button, EButtonVariants} from "../../UI/Button";
import {DropdownInput} from "../../UI/DropdownInput";
import {MultiselectInput} from "../../UI/MultiselectInput";
import {Input} from "../../UI/Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  background: #FFFFFF;
  border-radius: 16px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  width: fit-content;
  color: ${({theme}) => theme.colors.black};

  span {
    color: ${({theme}) => theme.colors.grayC4};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Content = styled.div`
  width: 100%;
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`


const FooterButton = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  max-width: unset;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
    padding: 12px 16px;
  }
`

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;
  justify-content: flex-end;
`

const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 16px;
`

const UserInfo = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`

const Inputs = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`

const LabelBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }

  span {
    color: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const InputsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;

  & > div {
    width: 100%;
    &:first-child {
      max-width: 40%;
    }
  }
`


const UserPhotoHover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;
  background: rgba(61, 61, 61, 0.6);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  visibility: hidden;
  opacity: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.white};
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 7px 12px;
    font-size: 12px;
  }
`

const UserPhoto = styled.div`
  min-width: 180px;
  height: 180px;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  background: #F8F8F8;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  position: relative;

  & > svg {
    width: 80px;
    height: 80px;

    path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }

  &:hover {
    ${UserPhotoHover} {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Services = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0;
  width: 100%;
  margin-top: -10px;
`

const Service = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 0;
  }
`
const ServiceHidden = styled(Service)`
  border-bottom: none;
  padding: 20px 0px 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 0 8px;
  }
`

const ServiceLabel = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  svg {
    width: 16px;
    height: 16px;
    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }

`

const optsSpecialisation: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Дантист',
        value: '0'
    },
]

const optsLocation: Array<{ item: string, shortItem: string, value: string }> = [
    {
        item: 'Баумана 32',
        shortItem: 'Баумана 32',
        value: '1'
    },
    {
        item: 'Карла-Либкнехта 34',
        shortItem: 'Карла-Либкнехта 34',
        value: '2'
    },
    {
        item: 'Иванцова 47',
        shortItem: 'Иванцова 47',
        value: '3'
    },
    {
        item: 'Баумана 86',
        shortItem: 'Баумана 86',
        value: '4'
    },
]

function EditDoctorView() {
    const [data, setData] = useState<{
        isHidden: boolean,
        isMessages: boolean,
        isOnlineBooking: boolean,
        isPatients: boolean,
        isPayments: boolean,
        specialisation: string
        location: string,
        title: string,
    }>({
        title: 'Геннадиев Олег Дмитриевич',
        isHidden: true,
        isMessages: false,
        isOnlineBooking: true,
        isPatients: false,
        isPayments: false,
        specialisation: optsSpecialisation[0].value,
        location: '1,2,3'
    });
    const {t} = useTranslation()

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("edit_doctor.title")}</HeadingStyled>
            </Header>
            <Content>
                <UserInfo>
                    <UserPhoto>
                        <DoctorIcon/>
                        <UserPhotoHover>
                            <CameraIcon/>
                            {t("edit_doctor.label.photo") as string}
                        </UserPhotoHover>
                    </UserPhoto>
                    <Inputs>
                        <Input value={data.title} onChange={val => onChange('title', val)} id="title"
                               label={t("edit_doctor.label.title") as string}
                        />
                        <InputsRow>
                            <DropdownInput value={data.specialisation} placeholder=''
                                           onSelect={val => onChange('specialisation', val)}
                                           options={optsSpecialisation}
                                           label={t("edit_doctor.label.specialisation") as string}/>
                            <MultiselectInput value={data.location} placeholder=''
                                              onSelect={val => onChange('location', val)}
                                              options={optsLocation}
                                              label={t("edit_doctor.label.address") as string}/>
                        </InputsRow>
                    </Inputs>
                </UserInfo>
                <TimetableRowComponent/>
                <TimetableRowComponent/>
                <TimetableRowComponent/>
                <ServiceHidden>
                    <ToggleBlock>
                        <LabelBlock><ClinicIcon/>
                            <div>{t("edit_doctor.hidden") as string} <span>{t("edit_doctor.after") as string}</span></div>
                        </LabelBlock>
                    </ToggleBlock>
                    <Toggle isActive={data.isHidden} onToggle={() => onChange('isHidden', !data.isHidden)}/>
                </ServiceHidden>
                {
                    data.isHidden && <Services>
                        <Service>
                            <ServiceLabel><MessageIcon/>{t("edit_doctor.services.messages")}</ServiceLabel>
                            <Toggle isActive={data.isMessages} onToggle={() => onChange('isMessages', !data.isMessages)}/>
                        </Service>
                        <Service>
                            <ServiceLabel><BookingIcon/>{t("edit_doctor.services.online_booking")}</ServiceLabel>
                            <Toggle isActive={data.isOnlineBooking} onToggle={() => onChange('isOnlineBooking', !data.isOnlineBooking)}/>
                        </Service>
                        <Service>
                            <ServiceLabel><PatientIcon/>{t("edit_doctor.services.patients")}</ServiceLabel>
                            <Toggle isActive={data.isPatients} onToggle={() => onChange('isPatients', !data.isPatients)}/>
                        </Service>
                        <Service>
                            <ServiceLabel><WalletIcon/>{t("edit_doctor.services.payments")}</ServiceLabel>
                            <Toggle isActive={data.isPayments} onToggle={() => onChange('isPayments', !data.isPayments)}/>
                        </Service>
                    </Services>
                }

                <ButtonBlock>
                    <FooterButton variant={EButtonVariants.Text}>{t("edit_doctor.discard")}</FooterButton>
                    <FooterButton variant={EButtonVariants.Default}>{t("edit_doctor.save")}</FooterButton>
                </ButtonBlock>
            </Content>
        </Wrapper>
    );
}

export default EditDoctorView;