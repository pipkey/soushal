import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


export type ProfilePagePostType = {
    profilePage: ProfilePageType
    addPost:(postMessage:string)=>void
    ChangePostText:(newText:string)=>void
}


export const Profile = (props:ProfilePagePostType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.postsDate}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                ChangePostText={props.ChangePostText}
            />

        </div>

    )
};

