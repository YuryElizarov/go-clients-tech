import {ECard, EPayment, IPayment, IPaymentCard} from "./types";

export const mockCards: IPaymentCard[] = [
    {
        bank: 'Сбербанк',
        cardNumber: '5***0204',
        card: ECard.Mastercard,
        id: 0,
    },
    {
        bank: 'Тинькоф',
        cardNumber: '3***1524',
        card: ECard.Visa,
        id: 1,
    },
    {
        bank: 'Сбербанк',
        cardNumber: '6***0678',
        card: ECard.Mir,
        id: 2,
    },
]

export const mockPayments: IPayment[] = [
    {
        sender: 'Муравьёв Модест Адольфович',
        payment: EPayment.Pay,
        id: 4294967569,
        sum: '5 000 ₽',
        date: '15.11.2025',
        senderNumber: '1225675577793889',
        recipient: "Go Clients Tech",
        recipientNumber: '8895675578993456',
        time: '12:22'
    },
    {
        sender: 'Сысоев Августин Юлианович',
        payment: EPayment.Transaction,
        id: 5657687879,
        sum: '12 000 ₽',
        date: '15.11.2025',
        senderNumber: '1225675577793889',
        recipient: "Go Clients Tech",
        recipientNumber: '8895675578993456',
        time: '04:22'
    },
    {
        sender: 'Муравьёв Модест Адольфович',
        payment: EPayment.Transaction,
        id: 4294967269,
        sum: '12 000 ₽',
        date: '15.11.2025',
        senderNumber: '1225675577793889',
        recipient: "Go Clients Tech",
        recipientNumber: '8895675578993456',
        time: '14:26'
    },
    {
        sender: 'Сысоев Августин Юлианович',
        payment: EPayment.Pay,
        id: 4285967569,
        sum: '5 000 ₽',
        date: '15.11.2025',
        senderNumber: '1225675577793889',
        recipient: "Go Clients Tech",
        recipientNumber: '8895675578993456',
        time: '18:22'
    },
    {
        sender: 'Муравьёв Модест Адольфович',
        payment: EPayment.Pay,
        id: 4394902569,
        sum: '40 $',
        date: '15.11.2025',
        senderNumber: '1225675577793889',
        recipient: "Go Clients Tech",
        recipientNumber: '8895675578993456',
        time: '11:22'
    },
    {
        sender: 'Сысоев Августин Юлианович',
        payment: EPayment.Transaction,
        id: 4294967519,
        sum: '12 000 ₽',
        date: '15.11.2025',
        senderNumber: '1225675577793889',
        recipient: "Go Clients Tech",
        recipientNumber: '8895675578993456',
        time: '14:32'
    },
]