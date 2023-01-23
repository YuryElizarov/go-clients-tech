import {ReactElement, ReactNode} from "react";

export interface InputProps {
    value: string,
    onChange: (val: string) => void,
    placeholder?: string,
    label?: string
    id: string
    isRequired?: boolean
    iconLeft?: ReactNode
}
export interface CheckBoxProps {
    value: boolean,
    onChange: () => void,
    label?: string | null
    id?: string
}
export interface DateInputProps {
    value: Date | null,
    onChange: (val: Date) => void,
    placeholder: string,
    label?: string
    id: string
    iconLeft?: ReactElement,
    isRequired?: boolean
}

export interface TextAreaProps extends InputProps{
    description: string
}

export interface TagsInputProps{
    onChange: (val: string) => void,
    label?: string
    id: string
    isRequired?: boolean
    value: string
}