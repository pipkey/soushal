import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";


type ProfilePType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner:boolean
}

export const Profile = (props: ProfilePType) => {


    return (
        <div>
            <ProfileInfo
            isOwner ={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>

            <MyPostsContainer/>
        </div>
    )
};

