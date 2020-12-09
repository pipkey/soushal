import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, AllActionTypes} from "../../redux/state";


export type ProfilePagePostType = {
    profilePage: ProfilePageType
    dispatch:(action:AllActionTypes)=>void

}


export const Profile = (props:ProfilePagePostType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.postsDate}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />

        </div>

    )
};

