import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppRootStateType} from "../../redux/redux-store";


//start types
type PathParamsType = {
    userId: string
}
type ProfileContainerType = {
    getUserProfile: (id: string) => void
    getStatus: (id: string) => void
    updateStatus: (status: string) => void
}
type mapPapType = {
    profile: ProfileType,
    status: string
    authorizedUserId: any
    isAuth: boolean
}

type OwnPropsType = mapPapType & ProfileContainerType

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: string,
    photos: PhotoProfileType
}
type ContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}
type PhotoProfileType = {
    small: string,
    large: string
}
type UserURLPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

//end types


class ProfileContainer extends React.Component<UserURLPropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props}
                     profile = {this.props.profile}
                     status = {this.props.status}
                     updateStatus = {this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state: AppRootStateType): mapPapType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

// let WithURLDataContainerComponent = withRouter(ProfileContainer);
// export default withAuthRedirect( connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent));

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer)