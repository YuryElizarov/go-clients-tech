import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import { selectChat } from "./bookingSlice";

export const getBooking = (state: RootState) => state.booking

export function useBookingAction() {
    const dispatch = useDispatch<AppDispatch>()
    const onSelectChat = useCallback(() => {
        dispatch(selectChat())
    }, [dispatch])
    return useMemo(() => ({
        onSelectChat
    }), [
        onSelectChat
    ])
}

export function useBookingState() {
    return useSelector(getBooking)
}
