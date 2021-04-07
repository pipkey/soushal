import React, {Component} from "react"
import style from "./FormControllers.module.css"
import {required} from "../../utills/validators/validators";
import {Field} from "redux-form";
import {string} from "prop-types";

type MyTextareaType = {
    input: any
    meta: any
    child: any
}

const FormControl: React.FC<MyTextareaType> = ({meta: {touched,error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span> {error} </span>}
        </div>
    )
};


export const Textarea: React.FC<MyTextareaType> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...restProps} {...input}/> </FormControl>
};

export const Input: React.FC<MyTextareaType> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...restProps} {...input}/> </FormControl>
};

type placeholderType = string | null
type PropsType = typeType | null
type typeType ={type: string}
type textType = string | null

export const CreateField = (placeholder: placeholderType, component: any, name: string, validate: any, props:PropsType , text?:textType) => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                component={component}
                name={name}
                validate={validate}
                {...props}
            /> {text}
        </div>)
};