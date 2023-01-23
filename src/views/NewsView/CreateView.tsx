import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {PaperclipIcon} from "../../UI/Svg";
import {Button, EButtonVariants} from "../../UI/Button";
import {Input} from "../../UI/Input";
import {DropdownInput} from "../../UI/DropdownInput";


const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`

const Header = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  svg {
    width: 24px;
    height: 24px;

    path {
      stroke: ${({theme}) => theme.colors.gray}
    }


  }

  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;

  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  padding: 0 20px 20px;

  ${({theme}) => theme.mediaQueries.ll} {
    padding: 0 16px 16px;
  }
`

const StyledButton = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  max-width: unset;
  width: fit-content;

  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 16px;
    font-size: 16px;
  }
`

const Form = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;

  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
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
  }

  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`


const optsWhere: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Google',
        value: '0'
    },
    {
        item: 'Facebook',
        value: '1'
    },
]

const optsWhen: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Сегодня',
        value: '0'
    },
    {
        item: 'Завтра',
        value: '1'
    },
    {
        item: 'Через неделю',
        value: '1'
    },
]

function CreateView() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        where: string,
        when: string,
        text: string
    }>({
        where: '',
        when: '',
        text: ''
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("news.create.title")}</HeadingStyled>
                <PaperclipIcon/>
            </Header>
            <Form>
                <InputsRow>
                    <DropdownInput value={data.where} placeholder=''
                                   onSelect={val => onChange('where', val)}
                                   options={optsWhere}
                                   label={t("news.create.labels.where") as string}/>
                    <DropdownInput value={data.when} placeholder=''
                                   onSelect={val => onChange('when', val)}
                                   options={optsWhen}
                                   label={t("news.create.labels.when") as string}/>
                </InputsRow>
                <Input value={data.text} onChange={val => onChange('text', val)} id="text"
                       label={t("news.create.labels.text") as string}
                />
            </Form>
            <ButtonBlock>
                <StyledButton variant={EButtonVariants.Text}>{t("news.create.buttons.cancel")}</StyledButton>
                <StyledButton variant={EButtonVariants.Default}>{t("news.create.buttons.public")}</StyledButton>
            </ButtonBlock>
        </Wrapper>
    );
}

export default CreateView;