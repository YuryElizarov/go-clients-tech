import {IBranch, ILinked, IRowReview} from "../types";

export const mockBranch: IBranch[] = [
    {
        title: 'Название вашего филиала',
        address: 'г. Москва, ул. Луковая, 48',
        workTime: 'Пн-Пт с 9:00 до 20:00',
        isOpen: true,
        id: 123456789,
        google: {
            count: 10,
            rating: '5.0'
        },
        facebook: {
            count: 10,
            rating: '5.0'
        },
    },
    {
        title: 'Название вашего филиала',
        address: 'г. Москва, ул. Метелева, 16',
        workTime: 'Пн-Пт с 9:00 до 20:00',
        isOpen: true,
        id: 123456789,
        google: {
            count: 10,
            rating: '5.0'
        },
        facebook: {
            count: 10,
            rating: '5.0'
        },
    },
    {
        title: 'Название вашего филиала',
        address: 'г. Москва, ул. Луковая, 48',
        workTime: 'Пн-Пт с 9:00 до 20:00',
        isOpen: true,
        id: 123456789,
        google: {
            count: 10,
            rating: '5.0'
        },
        facebook: {
            count: 10,
            rating: '5.0'
        },
    },
    {
        title: 'Название вашего филиала',
        address: 'г. Москва, ул. Метелева, 16',
        workTime: 'Пн-Пт с 9:00 до 20:00',
        isOpen: true,
        id: 123456789,
        google: {
            count: 10,
            rating: '5.0'
        },
        facebook: {
            count: 10,
            rating: '5.0'
        },
    },
    {
        title: 'Название вашего филиала',
        address: 'г. Москва, ул. Луковая, 48',
        workTime: 'Пн-Пт с 9:00 до 20:00',
        isOpen: true,
        id: 123456789,
        google: {
            count: 10,
            rating: '5.0'
        },
        facebook: {
            count: 10,
            rating: '5.0'
        },
    },
    {
        title: 'Название вашего филиала',
        address: 'г. Москва, ул. Метелева, 16',
        workTime: 'Пн-Пт с 9:00 до 20:00',
        isOpen: true,
        id: 123456789,
        google: {
            count: 10,
            rating: '5.0'
        },
        facebook: {
            count: 10,
            rating: '5.0'
        },
    },
]

export const mockReviews: IRowReview[] = [
    {
        title:"Bookimed",
        count: 36,
        icon: 'bookimed.png'
    },
    {
        title:"Irecommend",
        count: 120,
        icon: 'Irecommend.png'
    },
    {
        title:"Trustpilot",
        count: 36,
        icon: 'trustpilot.png'
    },
    {
        title:"Bookimed",
        count: 36,
        icon: 'bookimed.png'
    },
    {
        title:"Irecommend",
        count: 120,
        icon: 'Irecommend.png'
    },
    {
        title:"Trustpilot",
        count: 36,
        icon: 'trustpilot.png'
    },
    {
        title:"Bookimed",
        count: 36,
        icon: 'bookimed.png'
    },
]

export const mockLinked: ILinked[] = [
    {
        title: "Bookimed",
        id: 4665890,
        isGoogle: true,
    },
    {
        title: "Bookimed",
        id: 4665890,
        isGoogle: true,
    },
    {
        title: "Bookimed",
        id: 4665890,
        isGoogle: true,
    },
    {
        title: "Irecommend",
        id: 4665890,
        isGoogle: false,
    },
]