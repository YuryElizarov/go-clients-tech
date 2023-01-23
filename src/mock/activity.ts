import {EActivityEvents, TData} from "../types";
import {user} from "./search";

export const mockActivityList: TData[] = [
    {
        patient: {
            ...user,
            patient_id: 0,
        },
        event: EActivityEvents.Pay,
        date: new Date(1669442971000),
        data: [
            {
                name: 'Приём терапевта',
                price: '2 000 ₽',
            },
            {
                name: 'Клинические исследования',
                price: '870 ₽ ₽',
            },
            {
                name: 'Забор биоматериала',
                price: '200 ₽',
            },
        ]
    },
    {
        patient: {
            ...user,
            patient_id: 0,
        },
        event: EActivityEvents.Message,
        date: new Date(1669615771000),
        message: 'Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…',
    },
    {
        patient: {
            ...user,
            patient_id: 0,
        },
        event: EActivityEvents.Date,
        date: new Date(1669615771000),
        dateContent: 'Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…',
    },
    {
        patient: {
            ...user,
            patient_id: 0,
        },
        event: EActivityEvents.History,
        date: new Date(1669615771000),
        history: {
            patient: "Existing",
            birthday: "8 september 2020",
            gender: "Male",
            email: "alex.pafnutov@example.com",
            phone: "+7 (999) 999 99-99",
            zipCode: "10001",
            starst: "09 / 18 / 20 7:15 AM",
            provider: "Dr. Harlet Thompson",
            insurance: "Out of pocket",
            location: "General Pedeatrics",
            appTime: "Telehealth consultation (60 min)",
            notes: "Age: 35, Allegries: No, Current medication: Test",
        }
    },
]
export const mockActivityPatient: TData[] = [
    {
        patient: {
            ...user,
            patient_id: 0,
        },
        event: EActivityEvents.Visit,
        date: new Date(1669615771000),
        visit: {
            title: `Provider`,
            provider: `Dr. Harington Brave`,
            diagnosis: `Absolutely health`,
            gender: `Male`,
            email: `alex.pafnutov@example.com`,
            phone: `+7 (999) 999 99-99`,
            zipCode: `10001`,
            conclusion: `Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…`,
            health: `10001`,
            recomend: `Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…`,
        }
    },
    {
        patient: {
            ...user,
            patient_id: 0,
        },
        event: EActivityEvents.History,
        date: new Date(1669615771000),
        history: {
            patient: "Existing",
            birthday: "8 september 2020",
            gender: "Male",
            email: "alex.pafnutov@example.com",
            phone: "+7 (999) 999 99-99",
            zipCode: "10001",
            starst: "09 / 18 / 20 7:15 AM",
            provider: "Dr. Harlet Thompson",
            insurance: "Out of pocket",
            location: "General Pedeatrics",
            appTime: "Telehealth consultation (60 min)",
            notes: "Age: 35, Allegries: No, Current medication: Test",
        }
    },
    {
        patient: {
            ...user,
            patient_id: 0,
        },
        event: EActivityEvents.Pay,
        date: new Date(1669442971000),
        data: [
            {
                name: 'Приём терапевта',
                price: '2 000 ₽',
            },
            {
                name: 'Клинические исследования',
                price: '870 ₽ ₽',
            },
            {
                name: 'Забор биоматериала',
                price: '200 ₽',
            },
        ]
    },
]