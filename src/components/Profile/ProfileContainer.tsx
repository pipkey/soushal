import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router";
import {getUserProfile} from "../../redux/profile-reducer";


// types new
// type stateType={
//     profile: null | ProfilePageType
// }


//start types
type PathParamsType = {
    userId: string
}


type ProfileContainerType = {
    getUserProfile: (id: string) => void
}
type mapPapType = {
    profile: ProfileType

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
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);