import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import { selectReview, unselectReview } from "./reviewSlice";

export const getReview = (state: RootState) => state.review

export function useReviewAction() {
    const dispatch = useDispatch<AppDispatch>()
    const onSelectReview = useCallback((reviewId: number) => {
        dispatch(selectReview(reviewId))
    }, [dispatch])
    const onUnselectReview = useCallback(() => {
        dispatch(unselectReview())
    }, [dispatch])
    return useMemo(() => ({
        onSelectReview,
        onUnselectReview
    }), [
        onSelectReview,
        onUnselectReview
    ])
}

export function useReviewState() {
    return useSelector(getReview)
}
