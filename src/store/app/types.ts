import {ReactNode} from "react";

export enum EModals {
    Search,
    Pin,
    ReviewAnswer,
    Timetable,
    AddService,
    EditService,
    NewWaitlist,
    Qrcode,
    CustomizeForm,
    Preview,
    Send,
    AddEmployee,
    AddPatient,
    CalendarDetail,
    DeleteEvent,
    NewEvent,
}
export enum EAlert {
    Success,
    Error,
    Info
}

export interface IAlert {alertType: EAlert, content: string | ReactNode}
