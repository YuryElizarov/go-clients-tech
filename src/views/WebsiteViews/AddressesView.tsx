import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CardComponent} from "../../components/UserComponents";
import {EButtonVariants} from "../../UI/Button";
import {AddressComponent} from "../../components/WebsiteComponents";

const Card = styled(CardComponent)`
  gap: 10px;
  padding: 20px;

  & > div {
    &:first-child {
      margin-bottom: 20px;
      padding: 0;
      border-bottom: none;
    }
  }
`

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
`

function AddressesView() {
    const {t} = useTranslation()
    return (
        <Card title={t("website.main.gallery")}
        >
            <List>
                <AddressComponent buttonName='website.main.addresses_button' onClick={() => {}} buttonVariant={EButtonVariants.Default}/>
                <AddressComponent buttonName='website.main.addresses_button' onClick={() => {}} buttonVariant={EButtonVariants.Default}/>
            </List>
        </Card>
    );
}

export default AddressesView;