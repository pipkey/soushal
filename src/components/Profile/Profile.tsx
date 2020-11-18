import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ss from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type PostDataType={
    id: number,
    message: string,
    likeCounts: number
}


 type ProfilePropsType ={
    postsDate: Array<PostDataType>
}


const Profile = (props: ProfilePropsType) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsDate={props.postsDate}
            />

        </div>

    )
}


export default Profile;