import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CameraIcon, DoctorIcon} from "../../UI/Svg";
import {Heading} from "../../UI/Heading";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background: ${({theme}) => theme.colors.background};
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`
const InputLogo = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
`

const PhotoButton = styled.label`
  cursor: pointer;
  padding: 8px 16px;
  gap: 8px;
  background: rgba(61, 61, 61, 0.6);
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 56px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  white-space: nowrap;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.white};
    }
  }

  z-index: 2;

  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 7px;
    padding: 7px 12px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`


const ProfilePhoto = styled.div`
  width: 100%;
  height: 360px;
  overflow: hidden;
  display: flex;
  position: relative;
  align-content: flex-start;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
  flex-direction: column;

  &:hover {
    ${PhotoButton} {
      opacity: 1;
      visibility: visible;
    }
  }

  & > svg {
    width: 124px;
    height: 124px;
  }
`

const Photo = styled.img`
  width: 100%;
  height: auto;
`

const Title = styled(Heading)`
  font-size: 24px;
  line-height: 120%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`


const NameBlock = styled.div`
  display: flex;
  padding: 20px;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll}{
    padding: 16px;
    gap: 8px;
  }
`

function ProfileComponent() {
    const {t} = useTranslation()
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | undefined>('/images/profile.png')
    useEffect(() => {
        if (!file) {
            if (!preview) {
                setPreview(undefined)
            }
            return
        }

        const objectUrl: any = URL.createObjectURL(file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setFile(null)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setFile(e.target.files[0])
    }
    return (
        <Wrapper>
            <ProfilePhoto>
                {preview ? <Photo src={preview}/> : <DoctorIcon/>}
                <InputLogo id='profile-photo' type="file" onChange={onSelectFile}/>
                <PhotoButton htmlFor='profile-photo'><CameraIcon/>{t("user.person_data.profile.button")}</PhotoButton>
            </ProfilePhoto>
            <NameBlock>
                <Title as='h3'>Аверинов Дмитрий</Title>
                <Text>{t('user.person_data.profile.facebook')}</Text>
            </NameBlock>
        </Wrapper>
    );
}

export default ProfileComponent;