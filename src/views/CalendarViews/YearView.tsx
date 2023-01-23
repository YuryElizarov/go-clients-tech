import React, {useMemo} from 'react';
import styled from "styled-components";
import {CalendarComponent} from "../../components/CalendarComponents";

const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 0;
  flex-wrap: wrap;
  border-radius: 0 0 10px 10px;
`

function YearView() {

    const months = useMemo(() => {
        const now = new Date()
        return [...Array(12).keys()].map((item) => new Date(now.getFullYear(), item))
    }, [])

    return (
        <Wrapper>
            {months.map((month) => <CalendarComponent date={month}/>)}
        </Wrapper>
    );
}

export default YearView;