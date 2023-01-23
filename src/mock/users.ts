import {IUser} from "../types";
import { user } from "./search";

export const users: IUser[] = [
    {
        ...user,
        id: 0,
    },
    {
        id: 1,
        name: 'Иван',
        soname: 'Иванов',
        email: 'example@mail.ru',
        phone: '+7 (999) 999 99-99',
    },
    {
        id: 2,
        name: 'Вероника',
        soname: 'Агиева',
        email: 'example@mail.ru',
        phone: '+7 (999) 999 99-99',
    },
    {
        id: 3,
        name: 'Николай',
        soname: 'Митицкий',
        email: 'example@mail.ru',
        phone: '+7 (999) 999 99-99',
    },
]