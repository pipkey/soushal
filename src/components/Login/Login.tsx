import React from "react"
import {Field, reduxForm, InjectedFormProps} from "redux-form";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={"input"} name={"login"}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={"input"} name={"password"}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
};

let LoginReduxForm = reduxForm<FormDataType>({form: "Login"})(LoginForm);

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    };

    return (
        <div>
            <h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;