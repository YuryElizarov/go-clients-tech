import {IPatientTable} from "../types";
import {users} from "./users";

export const mockPatients: IPatientTable[] = [
    {
        ...users[0],
        viaService: 'New patient',
        birth: 'Sep 11 2022',
    },
    {
        ...users[0],
        viaService: 'Confirm',
        birth: 'Sep 11 2022',
    },
    {
        ...users[0],
        viaService: 'Payment',
        birth: 'Sep 11 2022',
    },
    {
        ...users[0],
        viaService: '',
        birth: 'Sep 11 2022',
    },
]