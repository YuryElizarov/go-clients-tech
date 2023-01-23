import {useSelector} from "react-redux";
import {RootState} from "../index";

export const getForms = (state: RootState) => state.forms


export function useFormsState() {
    return useSelector(getForms)
}
