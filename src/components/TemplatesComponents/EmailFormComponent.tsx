import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {MessageIcon} from "../../UI/Svg";
import {Toggle} from "../../UI/Toggle";
import {Input, InputAutosize} from "../../UI/Input";
import {Heading} from "../../UI/Heading";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  gap: 0;
`
const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
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

  span {
    color: ${({theme}) => theme.colors.gray};
  }

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 10px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const Content = styled.div`
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
`

const SmartCommand = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 254px;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
    padding: 16px;
    
  }
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`

function EmailFormComponent({
                                isEmail,
                                onChange,
                                theme,
                                logotype,
                                patient,
                                location,
                                company,
                                content
                            }: {
    isEmail: boolean,
    content: string
    logotype: string,
    patient: string,
    location: string,
    company: string,
    theme: string, onChange: (key: string, val: any) => void,
}) {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <ToggleBlock>
                <LabelBlock><MessageIcon/> {t("templates.action.edit.labels.email") as string}</LabelBlock>
                <Toggle isActive={isEmail} onToggle={() => onChange('isEmail', !isEmail)}/>
            </ToggleBlock>
            <Input value={theme} onChange={val => onChange('theme', val)} id="theme"
                   label={t("templates.action.edit.labels.theme") as string}/>
            <Content>
                <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={(event: any, editor: any) => {
                        const data = editor.getData();
                        onChange('content', data)
                    }}
                />
                <SmartCommand>
                    <Header>
                        <HeadingStyled
                            as="h3">{t("templates.action.edit.smart_commands.title") as string}</HeadingStyled>
                        <Text>{t("templates.action.edit.smart_commands.text") as string}</Text>
                    </Header>

                    <InputAutosize value={logotype} onChange={val => onChange('logotype', val)} id="logotype"
                                   label={t("templates.action.edit.smart_commands.labels.logotype") as string}/>

                    <InputAutosize value={patient} onChange={val => onChange('patient', val)} id="patient"
                                   label={t("templates.action.edit.smart_commands.labels.patient") as string}/>

                    <InputAutosize value={location} onChange={val => onChange('location', val)} id="location"
                                   label={t("templates.action.edit.smart_commands.labels.location") as string}/>

                    <InputAutosize value={company} onChange={val => onChange('company', val)} id="company"
                                   label={t("templates.action.edit.smart_commands.labels.company") as string}/>
                </SmartCommand>
            </Content>
        </Wrapper>
    );
}

export default EmailFormComponent;