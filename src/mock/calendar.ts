import {EActivityEvents, EPriorityEvent, ICalendarEvent, TData} from "../types";
import {users} from "./users";
import {user} from "./search";

export const mockDay: ICalendarEvent[] = [
    {
        user: users[0],
        fromDate: new Date(1670104800000),
        toDate: new Date(1670112000000),
        content: '',
        priority: EPriorityEvent.Low,
    },
    {
        user: users[0],
        fromDate: new Date(1670144400000),
        toDate: new Date(1670151600000),
        content: 'Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…',
        priority: EPriorityEvent.Normal,
    },
    {
        user: users[0],
        fromDate: new Date(1670162400000),
        toDate: new Date(1670166000000),
        content: 'Прием хирурга',
        priority: EPriorityEvent.Warning,
    },
]

export const mockWeek: Array<ICalendarEvent[]> = [
    [...mockDay],
    [
        {
            user: users[0],
            fromDate: new Date(1670104800000),
            toDate: new Date(1670112000000),
            content: '',
            priority: EPriorityEvent.Low,
        },
        {
            user: users[0],
            fromDate: new Date(1670230800000),
            toDate: new Date(1670238000000),
            content: 'Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…',
            priority: EPriorityEvent.Normal,
        },
    ],
    [],
    [],
    [
        {
            user: users[0],
            fromDate: new Date(1670482800000),
            toDate: new Date(1670486400000),
            content: 'Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…',
            priority: EPriorityEvent.Normal,
        },
    ],
    [],
    [
        {
            user: users[0],
            fromDate: new Date(1670104800000),
            toDate: new Date(1670112000000),
            content: '',
            priority: EPriorityEvent.Low,
        },
        {
            user: users[0],
            fromDate: new Date(1670738400000),
            toDate: new Date(1670763600000),
            content: 'Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…',
            priority: EPriorityEvent.Normal,
        },
    ],
]

export const mockMonth: { [day: number]: ICalendarEvent[] } = {
    13: [...mockDay.slice(0, 2)],
    7: [...mockDay.slice(1, 2), {
        user: users[0],
        fromDate: new Date(1670104800000),
        toDate: new Date(1670112000000),
        content: '',
        priority: EPriorityEvent.Low,
    },
        {
            user: users[0],
            fromDate: new Date(1670738400000),
            toDate: new Date(1670763600000),
            content: 'Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…',
            priority: EPriorityEvent.Normal,
        },],
    21: [...mockDay.slice(1, 3)],
    30: [...mockDay.slice(0, 3),
        {
            user: users[0],
            fromDate: new Date(1670482800000),
            toDate: new Date(1670486400000),
            content: 'Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…',
            priority: EPriorityEvent.Normal,
        },
        {
            user: users[0],
            fromDate: new Date(1670482800000),
            toDate: new Date(1670486400000),
            content: 'Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все "мамские" вопросы (и по несколько раз :)…',
            priority: EPriorityEvent.Normal,
        },
    ],
}

export const mockDetail: TData[] = [

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