import {EPatientStatus, IDoctorBooking, IPatientItem, IService} from "../../types";
import {users} from "../../mock/users";

export const patients: IPatientItem[] = [
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Success,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: true,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Default,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: false,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Success,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: true,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Default,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: false,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Success,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: true,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Default,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: false,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Success,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: true,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Default,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: false,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Success,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: true,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Default,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: false,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Success,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: true,
    },
    {
        ...users[0],
        birth: '14 jun 1995',
        status: EPatientStatus.Default,
        apptCreated: '17 Sep 2021 at 5:10 AM',
        apptStatus: '17 Sep 2021 at 5:10 AM',
        provider: 'George J.r',
        response: '1st Choice',
        charge: false,
    },
]

export const services: IService[] = [
    {
        title: 'УЗИ Брюшной полости',
        price: '1 870 ₽',
        isHidden: false,
        content: 'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n' +
            'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n',
        delay: '5–10 min',
    },
    {
        title: 'Консультация терапевта',
        price: '1 870 ₽',
        isHidden: true,
        content: 'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n' +
            'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n',
        delay: '5–10 min',
    },
    {
        title: 'Консультация хирурга',
        price: '1 870 ₽',
        isHidden: false,
        content: 'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n' +
            'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n',
        delay: '5–10 min',
    },
    {
        title: 'УЗИ Брюшной полости',
        price: '1 870 ₽',
        isHidden: false,
        content: 'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n' +
            'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n',
        delay: '5–10 min',
    },
    {
        title: 'Консультация ревматолога',
        price: '1 870 ₽',
        isHidden: false,
        content: 'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n' +
            'В левом сайтбаре список услуг и кнопка для доабвления их, в правой части список врачей\n',
        delay: '10-40 min',
    },
]

export const doctors: IDoctorBooking[] = [
    {
        ...users[0],
        isVacation: false,
        specialization: 'Дантист',
        workHours: {
            day1: '07:00 - 15:00 РМ',
            day2: '07:00 - 19:00 РМ',
            day3: '14:00 - 15:00 РМ',
        },
        typesList: [
            "Дантист",
            "Стоматология",
            "Ортодонт",
            "Кариес",
            "Брекеты",
            "Пульпит",
            "Импланты",
            "Протезирование",
        ]
    },
    {
        ...users[0],
        isVacation: true,
        specialization: 'Челюстно-лицевой хирург',
        workHours: {
            day1: '07:00 - 15:00 РМ',
            day2: '07:00 - 19:00 РМ',
            day3: '14:00 - 15:00 РМ',
        },
        typesList: [
            "Дантист",
            "Стоматология",
            "Ортодонт",
            "Кариес",
            "Брекеты",
            "Пульпит",
            "Импланты",
            "Протезирование",
        ]
    },
    {
        ...users[0],
        isVacation: true,
        specialization: 'Челюстно-лицевой хирург',
        workHours: {
            day1: '07:00 - 15:00 РМ',
            day2: '07:00 - 19:00 РМ',
            day3: '14:00 - 15:00 РМ',
        },
        typesList: [
            "Дантист",
            "Стоматология",
            "Ортодонт",
            "Кариес",
            "Брекеты",
            "Пульпит",
            "Импланты",
            "Протезирование",
        ]
    },
]