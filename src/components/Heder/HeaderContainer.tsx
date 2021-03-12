import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AuthDataType, setDataUserThunk} from "../../redux/auth-reducer";
import LogOutThunk from "../Login/Login";
import {AppRootStateType} from "../../redux/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type OWNtypes = AuthCallBack & mapStateToPropsType
    // & AuthDataType

const mapStateToProps =(state:AppRootStateType): mapStateToPropsType =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
type AuthCallBack ={
    setDataUserThunk: ()=> void
    LogOutThunk: () => void
}

class HeaderContainer  extends React.Component<OWNtypes> {
  componentDidMount(): void {
      this.props.setDataUserThunk()
  }

    render() {
      return <Header {...this.props} isAuth={this.props.isAuth} logOut={this.props.LogOutThunk} login={this.props.login}/> ;
  }
}



export default connect(mapStateToProps, {setDataUserThunk, LogOutThunk })(HeaderContainer);