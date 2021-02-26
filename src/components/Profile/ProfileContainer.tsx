import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


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
}

type OwnPropsType = mapPapType & ProfileContainerType

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
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
            userId = "13116"
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

let mapStateToProps = (state: RootStateType): mapPapType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

// let WithURLDataContainerComponent = withRouter(ProfileContainer);
// export default withAuthRedirect( connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent));

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer)