import React from 'react';
import styled from "styled-components";
import ListWrapperComponent from "./ListWrapperComponent";
import RowCheckbox from "./RowCheckbox";

const ListWrapperStyled = styled(ListWrapperComponent)`
  & > div {
    gap: 0;
  }
`

const locations: {item: string, value: string}[] = [
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
]
function SelectLocationComponent() {
    return (
        <ListWrapperStyled length={locations.length}>
            {
                locations.map((loc, id) => <RowCheckbox key={`Loc-${id}`} {...loc}/>)
            }
        </ListWrapperStyled>
    );
}

export default SelectLocationComponent;