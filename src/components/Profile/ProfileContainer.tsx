import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, RootStateType, setUserProfile} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router";


// types new
// type stateType={
//     profile: null | ProfilePageType
// }


//start types
type PathParamsType = {
    userId: string
}


type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
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
        if (!userId){
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
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

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);