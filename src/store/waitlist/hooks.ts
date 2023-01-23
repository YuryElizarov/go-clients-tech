import {useSelector} from "react-redux";
import {RootState} from "../index";

export const getWaitlist = (state: RootState) => state.waitlist

export function useWaitlistState() {
    return useSelector(getWaitlist)
}
