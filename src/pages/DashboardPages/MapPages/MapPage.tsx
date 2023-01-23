import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {CardComponent} from "../../../components/UserComponents";
import {Button, EButtonVariants} from "../../../UI/Button";
import {PlusIcon} from "../../../UI/Svg";
import {BranchComponent} from "../../../components/MapComponents";
import {mockBranch} from "../../../mock/map";

const CardStyled = styled(CardComponent)`
  max-width: 696px;
  z-index: 1;

  & > div:first-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;

  svg {
    path {
      stroke: ${({theme}) => theme.colors.white}
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 7px 8px;
    font-size: 12px;
  }
`

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
`

function MapPage() {
    const {t} = useTranslation()
    const [selectedBranch, setSelectedBranch] = useState<number | null>(null);
    return (
        <CardStyled title={t("map.title")}
                    headerChildren={
                        <ButtonStyled
                            as={Link}
                            to='/map/create'
                            variant={EButtonVariants.Default}><PlusIcon/>{t('map.button')}
                        </ButtonStyled>
                    }
        >
            <List>
                {
                    mockBranch.map((item, id) => <BranchComponent key={id} onSelect={() => setSelectedBranch(id)} item={item}
                                                                  isSelected={selectedBranch === id}/>)
                }
            </List>
        </CardStyled>
    );
}

export default MapPage;