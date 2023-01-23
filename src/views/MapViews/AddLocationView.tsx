import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {CardComponent} from "../../components/UserComponents";
import {AddPhotoComponent} from "../../components/MapComponents";
import {Heading} from "../../UI/Heading";
import WorktimeComponent from "../../components/MapComponents/WorktimeComponent";
import {Input, InputAutosize, PhoneInput} from "../../UI/Input";
import DateInput from "../../UI/DateInput/DateInput";
import {Button, EButtonVariants} from "../../UI/Button";

const CardStyled = styled(CardComponent)`
  max-width: 842px;

  & > div:first-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
`

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`
const FormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`

const FormTitle = styled(Heading)`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
`

const RowInput = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;

  & > div {
    min-width: 120px;

    &:nth-child(2) {
      flex: 1;
    }
  }
`
const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
`

const ButtonStyled = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  width: fit-content;
`
function AddLocationView() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        photo: File | null,
        title: string,
        found: Date | null,
        address: string,
        zipCode: string,
        description: string,
        usefulLink: string,
        phone: string,
    }>({
        photo: null,
        title: '',
        found: null,
        address: '',
        zipCode: '',
        description: '',
        usefulLink: '',
        phone: '',
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    return (
        <CardStyled title={t("map.add_location.title")}>
            <Content>
                <AddPhotoComponent onChange={(val) => onChange('photo', val)} id="location-photo" value={data.photo}
                                   buttonText={t("map.add_location.add_photo")} text=""/>
                <Form>
                    <FormBlock>
                        <FormTitle>{t("map.add_location.main_data.title")}</FormTitle>
                        <RowInput>
                            <Input value={data.title} onChange={val => onChange('title', val)} id="title"
                                   label={t("map.add_location.main_data.labels.title") as string}/>
                            <DateInput
                                value={data.found}
                                placeholder={t("map.add_location.main_data.labels.found") as string}
                                label={t("map.add_location.main_data.labels.found") as string}
                                onChange={(val) => onChange('found', val)}
                            />
                        </RowInput>
                        <RowInput>
                            <Input value={data.address} onChange={val => onChange('address', val)} id="address"
                                   label={t("map.add_location.main_data.labels.address") as string}/>
                            <Input value={data.zipCode} onChange={val => onChange('zipCode', val)} id="zipCode"
                                   label={t("map.add_location.main_data.labels.zipCode") as string}/>
                        </RowInput>
                        <InputAutosize value={data.description} onChange={val => onChange('description', val)}
                                       id="description"
                                       label={t("map.add_location.main_data.labels.description") as string}/>
                        <Input value={data.zipCode} onChange={val => onChange('zipCode', val)} id="zipCode"
                               label={t("map.add_location.main_data.labels.zipCode") as string}/>
                        <Input value={data.usefulLink} onChange={val => onChange('usefulLink', val)} id="usefulLink"
                               label={t("map.add_location.main_data.labels.usefulLink") as string}/>
                        <PhoneInput value={data.phone} onChange={val => onChange('phone', val)} id="phone"
                                    label={t("map.add_location.main_data.labels.phone") as string}/>
                    </FormBlock>
                    <FormBlock>
                        <FormTitle>{t("map.add_location.work_time.title")}</FormTitle>
                        <WorktimeComponent/>
                    </FormBlock>
                    <Buttons>
                        <ButtonStyled variant={EButtonVariants.Text}>{t("map.add_location.buttons.discacrd")}</ButtonStyled>
                        <ButtonStyled variant={EButtonVariants.Default}>{t("map.add_location.buttons.save")}</ButtonStyled>
                    </Buttons>
                </Form>
            </Content>
        </CardStyled>
    );
}

export default AddLocationView;