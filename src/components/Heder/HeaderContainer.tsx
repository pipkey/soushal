import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {AuthDataType, setDataUser} from "../../redux/auth-reducer";


type mapStateToPropsType ={
    isAuth: boolean,
    login:string | null
}

type OWNtypes = AuthCallBack & mapStateToPropsType & AuthDataType

const mapStateToProps =(state:RootStateType): mapStateToPropsType =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
type AuthCallBack ={
    setDataUser: ()=>void
}

class HeaderContainer  extends React.Component<OWNtypes> {
  componentDidMount(): void {
      this.props.setDataUser()
  }

    render() {
      return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/> ;
  }
}



export default connect(mapStateToProps, {setDataUser})(HeaderContainer);