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
    label?: string
    id: string
}
export interface DateInputProps {
    value: Date | null,
    onChange: (val: Date | null) => void,
    placeholder: string,
    label?: string
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