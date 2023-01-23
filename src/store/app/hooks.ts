import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {AppDispatch, RootState} from "../index";
import {EModals, IAlert} from "./types";
import {closeAlert, closeModal, showAlert, showModal} from "./appSlice";

export const getApp = (state: RootState) => state.app

export function useAppAction() {
    const dispatch = useDispatch<AppDispatch>()
    const onShowModal = useCallback((modal: EModals) => {
        dispatch(showModal(modal))
    }, [dispatch])
    const onCloseModal = useCallback((modal: EModals) => {
        dispatch(closeModal(modal))
    }, [dispatch])
    const onShowAlert = useCallback((alert: IAlert) => {
        dispatch(showAlert(alert))
    }, [dispatch])
    const onCloseAlert = useCallback(() => {
        dispatch(closeAlert())
    }, [dispatch])
    return useMemo(() => ({
        onShowModal,
        onCloseModal,
        onShowAlert,
        onCloseAlert
    }), [
        onShowModal,
        onCloseModal,
        onShowAlert,
        onCloseAlert
    ])
}

export function useAppState() {
    return useSelector(getApp)
}
