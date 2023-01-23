import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useFormsState} from "../../store/forms/hooks";

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;

  thead {
  }


  th {
    padding: 20px 0 5px 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: ${({theme}) => theme.colors.grayC4};
    text-align: left;

    &:first-child {
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }

  td {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({theme}) => theme.colors.black};
    text-align: left;


    &:last-child {
      padding-right: 20px;
    }
  }
  tbody {
    cursor: pointer;
    &:hover {
      td {
        background: ${({theme}) => theme.colors.lightBiege};
      }
    }
  }
`

const MainRow = styled.tr<{isAlone: boolean}>`
  ${({theme, isAlone})=> isAlone ? `border-bottom: 1px solid ${theme.colors.borderInputDefault};` : ''}
  &:last-child {
    border-bottom: none;
  }

  td {
    ${({isAlone})=> isAlone ? `padding-bottom: 30px;` : 'padding-bottom: 20px;'}

    &:first-child {
      padding-left: 20px;
    }
  }
`
const ListRow = styled.tr<{isLast: boolean}>`
  ${({theme, isLast})=> isLast ? `border-bottom: 1px solid ${theme.colors.borderInputDefault};` : ''}
  &:last-child {
    border-bottom: none;
  }

  td {
    padding-bottom: 20px;
  }
`

const Name = styled.td<{isAlone: boolean}>`
  padding: ${({isAlone}) => isAlone ? '30px 0' : '20px 0'};
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  background: ${({theme}) => theme.colors.background};
`

function PatientsTableView() {
    const {t} = useTranslation()
    const {patientsSubmissions} = useFormsState()

    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("forms.patients.headers.name")}</th>
                    <th>{t("forms.patients.headers.submission")}</th>
                    <th>{t("forms.patients.headers.submitted_by_patients")}</th>
                </tr>
                </thead>
                {
                    patientsSubmissions.map((item, id) => (
                        <tbody key={`Form-${id}`}>
                            <MainRow isAlone={item.submissions.length < 2}>
                                <Name isAlone={item.submissions.length < 2} rowSpan={item.submissions.length}>{item.name}</Name>
                                <td>{item.submissions[0]?.date}</td>
                                <td>{item.submissions[0]?.info}</td>
                            </MainRow>
                            {
                                item.submissions.length > 1 &&
                                item.submissions.slice(1).map((submission, sid) => (
                                    <ListRow isLast={sid + 1 === item.submissions.length - 1} key={`Submission-${id}-${sid}`}>
                                        <td>{submission.date}</td>
                                        <td>{submission.info}</td>
                                    </ListRow>
                                ))
                            }
                        </tbody>
                    ))
                }
            </Table>
        </Wrapper>
    );
}

export default PatientsTableView;