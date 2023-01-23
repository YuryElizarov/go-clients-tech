import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import { selectPost } from "./newsSlice";

export const getNews = (state: RootState) => state.news

export function useNewsAction() {
    const dispatch = useDispatch<AppDispatch>()
    const onSelectChat = useCallback((chatId: number) => {
        dispatch(selectPost(chatId))
    }, [dispatch])
    return useMemo(() => ({
        onSelectChat
    }), [
        onSelectChat
    ])
}

export function useNewsState() {
    return useSelector(getNews)
}
