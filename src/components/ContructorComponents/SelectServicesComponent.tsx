import React from 'react';
import styled from "styled-components";
import ListWrapperComponent from "./ListWrapperComponent";
import RowCheckbox from "./RowCheckbox";

const ListWrapperStyled = styled(ListWrapperComponent)`
  & > div {
    gap: 0;
  }
`

const services: {item: string, value: string}[] = [
    {
        item: 'УЗИ Брюшной полости',
        value: '1 870 ₽',
    },
    {
        item: 'Консультация терапевта',
        value: '1 870 ₽',
    },
    {
        item: 'УЗИ Брюшной полости',
        value: '1 870 ₽',
    },
    {
        item: 'Консультация терапевта',
        value: '1 870 ₽',
    },
    {
        item: 'УЗИ Брюшной полости',
        value: '1 870 ₽',
    },
    {
        item: 'Консультация терапевта',
        value: '1 870 ₽',
    },
    {
        item: 'УЗИ Брюшной полости',
        value: '1 870 ₽',
    },
    {
        item: 'Консультация терапевта',
        value: '1 870 ₽',
    },
]
function SelectServicesComponent() {
    return (
        <ListWrapperStyled length={services.length}>
            {
                services.map((loc, id) => <RowCheckbox key={`Loc-${id}`} {...loc}/>)
            }
        </ListWrapperStyled>
    );
}

export default SelectServicesComponent;