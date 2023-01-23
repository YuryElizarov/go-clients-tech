import {ReactNode} from "react";

export interface IMenuItem {
    link: string
    icon: string
    tip: string
}

export interface IUser {
    name: string,
    id?: number,
    soname: string,
    email: string,
    phone: string,
    image?: string,
}

export interface IDoctor extends IUser {
    specialization: string,
}

export interface IPatient extends IUser {
    patient_id: number
}

export interface IActivity {
    patient: IPatient,
    procedure: string
    date: Date,
}

export enum EActivityEvents {
    Pay = 'pay',
    Review = 'review',
    Message = 'message',
    Date = 'date',
    History = 'history',
    Visit = 'visit',
}

export interface IActivityDetail {
    patient: IPatient,
    event: EActivityEvents
    date: Date,
    customTitle?: string
}

export interface IActivityPayment extends IActivityDetail {
    data: Array<{ name: string, price: string }>
}

export interface IActivityReview extends IActivityDetail {
    review: string
    stars: number
}

export interface IActivityMessage extends IActivityDetail {
    message: string
}

export interface IActivityDate extends IActivityDetail {
    dateContent: string
}

export interface IHistory {
    patient: string,
    birthday: string,
    gender: string,
    email: string,
    phone: string,
    zipCode: string,
    starst: string,
    provider: string,
    insurance: string,
    location: string,
    appTime: string,
    notes: string,
}

export interface IActivityHistory extends IActivityDetail {
    history: IHistory
}
export interface IVisit {
    title: string
    provider: string
    diagnosis: string
    gender: string
    email: string
    phone: string
    zipCode: string
    conclusion: string
    health: string
    recomend: string
}

export interface IActivityVisit extends IActivityDetail {
    visit: IVisit
}

export type TData = IActivityDate | IActivityMessage | IActivityHistory | IActivityReview | IActivityPayment | IActivityVisit

export interface IReview {
    id: number,
    user: IUser,
    social?: "Facebook" | "Google",
    content?: string | ReactNode,
    date: string,
    stars?: string
    childReview?: IReview[]
}

export enum EPatientStatus {
    Default,
    Error,
    Success
}

export interface IPatientItem extends IUser {
    birth: string,
    status: EPatientStatus,
    apptCreated: string
    apptStatus: string
    provider: string
    response: string
    charge: boolean
}

export interface IService {
    title: string,
    price: string,
    isHidden: boolean,
    content: string
    delay: string
}

export interface IDoctorBooking extends IDoctor {
    isVacation: boolean,
    workHours: {
        day1: string,
        day2: string,
        day3: string,
    },
    typesList: string[]
}

export interface IAccount extends IUser {
    isGoogle: boolean
    date: string
}

export interface IPost {
    isGoogle: boolean
    date: string
    text: string,
    image: string,
    isClock: boolean
}

export interface IWaitlistItem {
    num: string
    provider: string
    app_time: string
    recipient: string
    openrate: string
}

export interface IForm {
    access: {
        mobile: boolean,
        desctop: boolean,
    },
    title: string,
    send: string,
    submitted: string,
    create_date: string,
}

export interface IPatientSubmission {
    name: string,
    submissions: { date: string, info: string }[]
}

export interface ITemplate {
    status: {
        mobile: boolean,
        desctop: boolean,
    }
    title: string
    total_sent: string
    recipients: string
    updated: {
        date: string,
        user: IUser
    }
    create_date: {
        date: string,
        user: IUser
    }
}

export enum EAction {
    NewAction,
    Email,
    Sms,
    Save,
}

export interface IAction {
    action: EAction,
    title: string,
    text: string,
    count?: number
}

export interface IPerfomance {
    patient: string
    doctor_seen: string
    received: string
    score: number
}
export interface ITemplateHistory {
    patient: string,
    communication: string,
    type: string,
    sent: string,
    provider: string,
    appointment: string,
}

export interface IPersonalItem extends IUser{
    num: number
    location: string[]
}


export interface IProfileAccount extends IUser {
    isGoogle: boolean
    facebookLink?: string
}

export interface IMailing {
    status: boolean
    name: string
    total_sent: string
    recipient: string
    open_rate: string
    clicked: string
    last_updated: {
        date: string,
        userName: string
    }
    created: {
        date: string,
        userName: string
    }
}

export interface IPatientTable extends IUser{
    viaService: string
    birth: string
}

export interface IBranch {
    title: string,
    address: string,
    workTime: string
    isOpen: boolean,
    id: number

    google: {
        count: number
        rating: string
    },
    facebook: {
        count: number
        rating: string
    },
}

export interface IRowReview {
    title: string
    count: number
    icon?: string
}
export interface ILinked {
    title: string
    isGoogle: boolean
    id: number
}

export enum EPriorityEvent {
    Normal,
    Warning,
    High,
    Low
}

export interface ICalendarEvent {
    user: IUser,
    priority: EPriorityEvent,
    fromDate: Date,
    toDate: Date,
    content: string
}