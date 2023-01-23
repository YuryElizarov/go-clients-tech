import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import { selectChat } from "./messengerSlice";

export const getMessenger = (state: RootState) => state.messenger

export function useMessengerAction() {
    const dispatch = useDispatch<AppDispatch>()
    const onSelectChat = useCallback((chatId: number) => {
        dispatch(selectChat(chatId))
    }, [dispatch])
    return useMemo(() => ({
        onSelectChat
    }), [
        onSelectChat
    ])
}

export function useMessengerState() {
    return useSelector(getMessenger)
}
