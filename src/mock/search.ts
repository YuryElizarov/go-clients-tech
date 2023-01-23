import {IActivity, IDoctor, IPatient, IUser} from "../types";

export const user: IUser = {
    name: 'Дмитрий',
    soname: 'Аверинов',
    email: 'example@mail.ru',
    phone: '+7 (999) 999 99-99',
}

export const mockSearchDropdown: Array<IDoctor | IPatient | IActivity> = [
    {
        ...user,
        specialization: 'Хирург-Дантист'
    },
    {
        ...user,
        image: 'account.png',
        patient_id: 0
    },
    {
        patient: {...user, patient_id: 1},
        procedure: 'Посещение дантиста',
        date: new Date(1669663766000)
    },
]
export const mockSearchModal: Array<IDoctor | IPatient | IActivity> = [
    {
        ...user,
        specialization: 'Хирург-Дантист'
    },
    {
        patient: {...user, patient_id: 1},
        procedure: 'Посещение дантиста',
        date: new Date(1669663766000)
    },
    {
        ...user,
        image: 'account.png',
        patient_id: 0
    },
    {
        ...user,
        specialization: 'Хирург-Дантист'
    },
    {
        ...user,
        image: 'account.png',
        patient_id: 0
    },
    {
        ...user,
        image: 'account.png',
        patient_id: 0
    },
    {
        ...user,
        image: 'account.png',
        patient_id: 0
    },

]