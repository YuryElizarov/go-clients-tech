export const addZeroForward = (string: string, needLength: number = 2) => `${'0'.repeat(needLength - string.length)}${string}`;


export function renderDate(date: Date, withTime?: boolean, withSeconds?: boolean): string {
    if (withTime) {
        return (`${addZeroForward(date.getDate().toString())}.${addZeroForward((date.getMonth() + 1).toString())}.${date.getFullYear()}, ${addZeroForward(date.getHours().toString())}:${addZeroForward(date.getMinutes().toString())}${withSeconds ? `:${addZeroForward(date.getSeconds().toString())}` : ''}`)
    }
    return `${addZeroForward(date.getDate().toString())}.${addZeroForward((date.getMonth() + 1).toString())}.${date.getFullYear()}`
}