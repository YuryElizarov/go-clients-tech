import {IReview} from "../../types";
import {user} from "../../mock/search";

export const reviews: IReview[] = [
    {
        id: 0,
        user: {
            ...user,
            name: 'Наталья',
            soname: 'Валентинова'
        },
        social: "Facebook",
        content: "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…",
        stars: '5.0',
        date: 'Час назад',
        childReview: [
            {
                id: 3,
                user: {
                    ...user,
                    name: 'Go Clients Tech',
                    soname: ''
                },
                content: `Екатерина, искренне благодарим за такой теплый отзыв!
                    Работа с детьми - большая ответственность и мы очень рады, что оправдали Ваши ожидания.
                    Растите счастливыми и здоровыми :)
                    
                    С уважением,
                    команда Клиники "Go Clients Tech"!`,
                date: 'Час назад',
            },
            {
                id: 11,
                user: {
                    ...user,
                    name: 'Go Clients Tech',
                    soname: ''
                },
                content: `Екатерина, искренне благодарим за такой теплый отзыв!
                    Работа с детьми - большая ответственность и мы очень рады, что оправдали Ваши ожидания.
                    Растите счастливыми и здоровыми :)
                    
                    С уважением,
                    команда Клиники "Go Clients Tech"!`,
                date: 'Час назад',
            },
        ]
    },
    {
        id: 1,
        user: {
            ...user,
            name: 'Селиверстов',
            soname: 'Климент'
        },
        social: "Google",
        stars: '5.0',
        date: '7 августа в 8:30',
    },
    {
        id: 2,
        user: {
            ...user,
            name: 'Анисимов',
            soname: 'Казимир'
        },
        social: "Facebook",
        content: "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…",
        stars: '5.0',
        date: 'Час назад',
    },
    {
        id: 4,
        user: {
            ...user,
            name: 'Наталья',
            soname: 'Валентинова'
        },
        social: "Facebook",
        content: "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…" +
            "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…",
        stars: '5.0',
        date: '7 августа в 9:30',
    },
    {
        id: 5,
        user: {
            ...user,
            name: 'Селиверстов',
            soname: 'Климент'
        },
        social: "Google",
        stars: '5.0',
        date: '7 августа в 8:30',
    },
    {
        id: 6,
        user: {
            ...user,
            name: 'Анисимов',
            soname: 'Казимир'
        },
        social: "Facebook",
        content: "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…",
        stars: '5.0',
        date: 'Час назад',
    },
    {
        id: 7,
        user: {
            ...user,
            name: 'Наталья',
            soname: 'Валентинова'
        },
        social: "Facebook",
        content: "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…" +
            "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…",
        stars: '5.0',
        date: '7 августа в 9:30',
    },
    {
        id: 8,
        user: {
            ...user,
            name: 'Селиверстов',
            soname: 'Климент'
        },
        social: "Google",
        stars: '5.0',
        date: '7 августа в 8:30',
    },
    {
        id: 9,
        user: {
            ...user,
            name: 'Анисимов',
            soname: 'Казимир'
        },
        social: "Facebook",
        content: "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…",
        stars: '5.0',
        date: 'Час назад',
    },
    {
        id: 10,
        user: {
            ...user,
            name: 'Наталья',
            soname: 'Валентинова'
        },
        social: "Facebook",
        content: "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…" +
            "Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, " +
            "спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры, четкие объяснения, никаких лишних назначений. " +
            "Отдельное спасибо за ответы на все \"мамские\" вопросы (и по несколько раз :)…",
        stars: '5.0',
        date: '7 августа в 9:30',
    },
]