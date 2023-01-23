
export enum ECard {
    Mastercard,
    Mir,
    Visa
}

export enum EPayment {
    Transaction,
    Pay
}

export interface IPaymentCard {
    bank: string,
    cardNumber: string,
    card: ECard
    id: number
}

export interface IPayment {
    sender: string,
    payment: EPayment
    id: number
    sum: string
    date: string
    time: string
    senderNumber: string,
    recipient: string
    recipientNumber: string
}