import React, {ComponentType} from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {RootStateType} from "../redux/store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to="/login"/>;
        return <Component {...restProps as T}/>
    };
    let ConectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConectedRedirectComponent
};
