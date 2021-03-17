import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {LogOutThunk} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type OWNtypes = AuthCallBack & mapStateToPropsType


const mapStateToProps =(state:AppRootStateType): mapStateToPropsType =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
type AuthCallBack ={
    LogOutThunk: () => void
}

class HeaderContainer  extends React.Component<OWNtypes> {


    render() {
      return <Header {...this.props} isAuth={this.props.isAuth} LogOutThunk={this.props.LogOutThunk}  login={this.props.login}/> ;
  }
}



export default connect(mapStateToProps, { LogOutThunk })(HeaderContainer);