import React from "react"
import style from "./FormControllers.module.css"

type MyTextareaType = {
    input: any
    meta: any
    child: any
}

const FormControl: React.FC<MyTextareaType> = ({meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span> {meta.error} </span>}
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