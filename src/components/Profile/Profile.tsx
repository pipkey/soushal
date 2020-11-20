import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


export type ProfilePagePostType = {
    profilePage: ProfilePageType

}


export const Profile = (props:ProfilePagePostType) => {
debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.postsDate}
            />

        </div>

    )
};

