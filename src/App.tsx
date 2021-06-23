import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Friends from "./components/Navbar/Friends/Friends";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Heder/HeaderContainer";
// import Login from "./components/Login/Login";
// import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { AppRootStateType } from "./redux/redux-store";
import { Preloader } from "./components/Preloader/Preloader";
import WithSuspense from "./HOC/withSuspense";

const ProfileContainer = React.lazy(
  () => import("./components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(
  () => import("./components/Users/UsersContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));
const DialogsContainer = React.lazy(
  () => import("./components/Navbar/Dialogs/DialogsContainer")
);

type AppType = {
  initializeApp: () => void;
  initializedSuc: boolean;
};
type mapStateType = {
  initializedSuc: boolean;
};

class App extends React.Component<AppType> {
  componentDidMount(): void {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initializedSuc) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />

        <NavBar />
        <div className="app-wrapper-content">
          <Route
            path={"/profile/:userId?"}
            render={WithSuspense(ProfileContainer)}
          />

          <Route
            path={"/dialogs"}
            render={WithSuspense( DialogsContainer )}
          />

          <Route
            path={"/users"}
            render={ WithSuspense( UsersContainer )}
          />

          <Route
            path={"/login"}
            render={ WithSuspense(Login) }
          />

          <Route path={"/news"} component={News} />
          <Route path={"/music"} component={Music} />
          <Route path={"/settings"} component={Settings} />
          <Route path={"/friends"} component={Friends} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType): mapStateType => ({
  initializedSuc: state.app.initializedSuc,
});

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
