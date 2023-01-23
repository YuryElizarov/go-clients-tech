import {IPerfomance, ITemplate, ITemplateHistory} from "../types";
import {users} from "./users";

export const mockTemplates: ITemplate[] = [
    {
        status: {
            mobile: true,
            desctop: false,
        },
        title: 'Test form',
        total_sent: '117',
        recipients: '98',
        updated: {
            date: '14 Sep 2020 at 3:30 AM',
            user: users[0]
        },
        create_date: {
            date: '14 Sep 2020  at 3:30 AM',
            user: users[0]
        }
    },
    {
        status: {
            mobile: true,
            desctop: false,
        },
        title: 'Test form',
        total_sent: '117',
        recipients: '98',
        updated: {
            date: '14 Sep 2020 at 3:30 AM',
            user: users[0]
        },
        create_date: {
            date: '14 Sep 2020  at 3:30 AM',
            user: users[0]
        }
    },
    {
        status: {
            mobile: true,
            desctop: false,
        },
        title: 'Test form',
        total_sent: '117',
        recipients: '98',
        updated: {
            date: '14 Sep 2020 at 3:30 AM',
            user: users[0]
        },
        create_date: {
            date: '14 Sep 2020  at 3:30 AM',
            user: users[0]
        }
    },
    {
        status: {
            mobile: true,
            desctop: false,
        },
        title: 'Test form',
        total_sent: '117',
        recipients: '98',
        updated: {
            date: '14 Sep 2020 at 3:30 AM',
            user: users[0]
        },
        create_date: {
            date: '14 Sep 2020  at 3:30 AM',
            user: users[0]
        }
    },
    {
        status: {
            mobile: true,
            desctop: false,
        },
        title: 'Test form',
        total_sent: '117',
        recipients: '98',
        updated: {
            date: '14 Sep 2020 at 3:30 AM',
            user: users[0]
        },
        create_date: {
            date: '14 Sep 2020  at 3:30 AM',
            user: users[0]
        }
    },
    {
        status: {
            mobile: true,
            desctop: false,
        },
        title: 'Test form',
        total_sent: '117',
        recipients: '98',
        updated: {
            date: '14 Sep 2020 at 3:30 AM',
            user: users[0]
        },
        create_date: {
            date: '14 Sep 2020  at 3:30 AM',
            user: users[0]
        }
    },
]

export const mockPerfomance: IPerfomance[] = [
    {
        patient: 'Alex Pafnutov',
        doctor_seen: 'Dr. Training Doctor',
        received: '3 sep 2022 at 6:45 AM',
        score: 5
    },
    {
        patient: 'Alex Pafnutov',
        doctor_seen: 'Dr. Training Doctor',
        received: '3 sep 2022 at 6:45 AM',
        score: 5
    },
    {
        patient: 'Alex Pafnutov',
        doctor_seen: 'Dr. Training Doctor',
        received: '3 sep 2022 at 6:45 AM',
        score: 4
    },
]

export const mockHistory: ITemplateHistory[] = [
    {
        patient: 'Alex Pafnutov',
        communication: 'Same day survey',
        type: 'SMS',
        sent: '3 sep 2022 at 6:45 AM',
        provider: 'Dr. Training Doctor',
        appointment: '13 sep 2022 at 6:45 AM',
    },
    {
        patient: 'Alex Pafnutov',
        communication: 'Same day survey',
        type: 'SMS',
        sent: '3 sep 2022 at 6:45 AM',
        provider: 'Dr. Training Doctor',
        appointment: '13 sep 2022 at 6:45 AM',
    },
    {
        patient: 'Alex Pafnutov',
        communication: 'Same day survey',
        type: 'SMS',
        sent: '3 sep 2022 at 6:45 AM',
        provider: 'Dr. Training Doctor',
        appointment: '13 sep 2022 at 6:45 AM',
    },
    {
        patient: 'Alex Pafnutov',
        communication: 'Same day survey',
        type: 'SMS',
        sent: '3 sep 2022 at 6:45 AM',
        provider: 'Dr. Training Doctor',
        appointment: '13 sep 2022 at 6:45 AM',
    },
]