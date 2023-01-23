import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import {change, nextStep, remove} from "./stepsSlice";
import {EStep} from "./types";

export const getSteps = (state: RootState) => state.steps

export function useStepsAction() {
    const dispatch = useDispatch<AppDispatch>()
    const onNext = useCallback((step: EStep) => {
        dispatch(nextStep(step))
    }, [dispatch])
    const onChange = useCallback((key: string, val: any) => {
        dispatch(change({key, val}))
    }, [dispatch])
    const onDelete = useCallback((key: string) => {
        dispatch(remove({key}))
    }, [dispatch])
    return useMemo(() => ({
        onNext,
        onChange,
        onDelete,
    }), [
        onNext,
        onChange,
        onDelete,
    ])
}

export function useStepsState() {
    return useSelector(getSteps)
}
