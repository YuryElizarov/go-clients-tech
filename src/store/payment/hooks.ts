import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import {selectCard, selectPayment} from "./paymentSlice";

export const getPayment = (state: RootState) => state.payment

export function usePaymentAction() {
    const dispatch = useDispatch<AppDispatch>()
    const onSelectCard = useCallback((cardId: number) => {
        dispatch(selectCard(cardId))
    }, [dispatch])
    const onSelectPayment = useCallback((paymentId: number) => {
        dispatch(selectPayment(paymentId))
    }, [dispatch])
    return useMemo(() => ({
        onSelectCard,
        onSelectPayment
    }), [
        onSelectCard,
        onSelectPayment
    ])
}

export function usePaymentState() {
    return useSelector(getPayment)
}
