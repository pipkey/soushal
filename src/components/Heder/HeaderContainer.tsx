import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType, setUserData, AuthDataType} from "../../redux/store";


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
    setUserData: (id: number | null, email: string | null, login: string | null)=>void
}

class HeaderContainer  extends React.Component<OWNtypes> {
  componentDidMount(): void {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
      .then(response => {
          if (response.data.resultCode === 0) {
              let {id, email, login} = response.data.data;
              this.props.setUserData(id, email, login)
          }})
  }

    render() {
      return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/> ;
  }
}



export default connect(mapStateToProps, {setUserData})(HeaderContainer);