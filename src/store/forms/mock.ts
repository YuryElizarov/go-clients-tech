import {IForm, IPatientSubmission} from "../../types";

export const mockForms: IForm[] = [
    {
        access: {
            mobile: true,
            desctop: false
        },
        title: "Test form",
        send: "117 times",
        submitted: "98 times",
        create_date: "Sep 11 2022 at 3:30 AM",
    },
    {
        access: {
            mobile: true,
            desctop: false
        },
        title: "Mobile form little",
        send: "117 times",
        submitted: "98 times",
        create_date: "Sep 11 2022 at 3:30 AM",
    },
    {
        access: {
            mobile: true,
            desctop: false
        },
        title: "Mobile formbig",
        send: "117 times",
        submitted: "98 times",
        create_date: "Sep 11 2022 at 3:30 AM",
    },
    {
        access: {
            mobile: true,
            desctop: true
        },
        title: "All form",
        send: "0 times",
        submitted: "0 times",
        create_date: "Sep 11 2022 at 3:30 AM",
    },
]

export const mockPatients: IPatientSubmission[] = [
    {
        name: 'Пафнутов Алексей Владленович',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice medical history'
            },
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice'
            },
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
    {
        name: 'Patient Full Name',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
    {
        name: 'Patient Full Name',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
    {
        name: 'Patient Full Name',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
    {
        name: 'Пафнутов Алексей Владленович',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice medical history'
            },
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice'
            },
        ]
    },
    {
        name: 'Patient Full Name',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
    {
        name: 'Patient Full Name',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
    {
        name: 'Patient Full Name',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
    {
        name: 'Patient Full Name',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
    {
        name: 'Patient Full Name',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
    {
        name: 'Patient Full Name',
        submissions: [
            {
                date: 'Sep 11 2022 at 3:30 AM',
                info: 'General practice patient info'
            },
        ]
    },
]