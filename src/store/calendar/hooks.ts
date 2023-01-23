import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import { selectDuration } from "./calendarSlice";
import {EDuration} from "./types";

export const getCalendar = (state: RootState) => state.calendar

export function useCalendarAction() {
    const dispatch = useDispatch<AppDispatch>()
    const onSelectDuration = useCallback((durationId: EDuration) => {
        dispatch(selectDuration(durationId))
    }, [dispatch])
    return useMemo(() => ({
        onSelectDuration
    }), [
        onSelectDuration
    ])
}

export function useCalendarState() {
    return useSelector(getCalendar)
}
