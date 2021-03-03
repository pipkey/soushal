import React from "react"
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Input} from "../FormsControls/FormsConrollers";
import {required} from "../../utills/validators/validators";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Login"}
                    component={Input}
                    name={"login"}
                    validate ={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    component={Input}
                    name={"password"}
                    validate ={[required]}
                />
            </div>
            <div>
                <Field component={Input}
                       type={"checkbox"}
                       name={"rememberMe"}
                /> remember Me
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