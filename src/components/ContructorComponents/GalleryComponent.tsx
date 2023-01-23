import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import AddPhotoComponent from "./AddPhotoComponent";

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

const AddPhotoStyled = styled(AddPhotoComponent)`
  min-width: 200px;
`
function GalleryComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        file: File | null,
    }>({
        file: null,
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <>
            <Content>
                {t("constructor.gallery.desc")}
            </Content>
            <AddPhotoStyled id='gallery' onChange={(val) => onChange('file', val)} value={data.file} buttonText={t("constructor.gallery.button")} text="" />
        </>
    );
}

export default GalleryComponent;