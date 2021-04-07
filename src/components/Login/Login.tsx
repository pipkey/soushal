import React from "react"
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Input, CreateField} from "../FormsControls/FormsConrollers";
import {required} from "../../utills/validators/validators";
import {connect} from "react-redux";
import {LoginThunk, LogOutThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import style from "../../components/FormsControls/FormControllers.module.css"
import {AppRootStateType} from "../../redux/redux-store";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type loginPropsType ={
    LoginThunk: (formData:FormDataType) => void
    LogOutThunk: () => void
    isAuth: boolean
}

type MapPropsType = {
    isAuth: boolean
}




const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
               { CreateField("Email",Input,"email",[required], null)}
               { CreateField("Password",Input,"password",[required], {type:"password"})}
               { CreateField(null ,Input,"rememberMe",null, {type:"checkbox"}, "remember Me")}


            <div>
                {error && <div className={style.formSummaryError}> { error } </div>}
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>

    )
};

let LoginReduxForm = reduxForm<FormDataType>({form: "Login"})(LoginForm);

const Login = (props: loginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.LoginThunk(formData)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};


const mapStateToProps = (state: AppRootStateType):MapPropsType => ({isAuth: state.auth.isAuth});


export default connect(mapStateToProps, {LoginThunk, LogOutThunk})(Login);