import React, {useState} from 'react';
import styled from "styled-components";
import {Dropdown} from "../../../UI/Dropdown";

const Row = styled.tr`
  td {
    padding: 24px 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: ${({theme}) => theme.colors.black};

    &:last-child {
      color: ${({theme}) => theme.colors.green};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    td {
      padding: 20px 0;
      font-size: 10px;
    }
  }
`

const sendOpts: Array<{ item: string, value: string }> = [
    {item: 'Reminders', value: 'Reminders'},
    {item: 'Reviews', value: 'Reviews'},
    {item: 'Missed', value: 'Missed'},
    {item: 'Cancelled', value: 'Cancelled'},
]

const optOutOpts: Array<{ item: string, value: string }> = [
    {item: 'No one', value: 'No one'},
    {item: 'Reminders', value: 'Reminders'},
    {item: 'Reviews', value: 'Reviews'},
    {item: 'Missed', value: 'Missed'},
    {item: 'Cancelled', value: 'Cancelled'},
]

const DropdownStyled = styled(Dropdown)`
  min-width: 120px;
  max-width: 120px;
  & > div {
    &:first-child {
      padding: 4px 8px;
    }
    & > div {
      font-size: 12px;
      line-height: 100%;
    }
  }
`

function RowComponent() {
    const [sendValue, setSendValue] = useState<string>('');
    const [optOutValue, setOptOutValue] = useState<string>('');
    return (
        <Row>
            <td>Иванов Иван</td>
            <td>9:15 AM</td>
            <td>+7 (999) 999 99-99</td>
            <td>emailexample@gmail...</td>
            <td>

                <DropdownStyled isShowOnlyPlaceholder={false} value={sendValue} placeholder='Select'
                                onSelect={v => setSendValue(v)} options={sendOpts} label=""/>
            </td>
            <td>
                <DropdownStyled isShowOnlyPlaceholder={false} value={optOutValue} placeholder='Select'
                                onSelect={v => setOptOutValue(v)} options={optOutOpts} label=""/>
            </td>
            <td>GO Confirmed</td>
        </Row>
    );
}

export default RowComponent;