import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import { selectProfile, selectProfileId } from "./profileSlice";

export const getProfile = (state: RootState) => state.profile

export function useProfileAction() {
    const dispatch = useDispatch<AppDispatch>()
    const onSelectProfileId = useCallback((profileId: number) => {
        dispatch(selectProfileId(profileId))
    }, [dispatch])
    const onSelectProfile = useCallback(() => {
        dispatch(selectProfile())
    }, [dispatch])
    return useMemo(() => ({
        onSelectProfile,
        onSelectProfileId
    }), [
        onSelectProfile,
        onSelectProfileId
    ])
}

export function useProfileState() {
    return useSelector(getProfile)
}
