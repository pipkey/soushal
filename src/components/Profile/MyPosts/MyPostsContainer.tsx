import React from "react";
import {PostType, RootStateType} from "../../../redux/store"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, ChangePost} from "../../../redux/profile-reducer";


//type

type MapStateProType = {
    newPostText: string
    posts:Array<PostType>
}
//end type

//functions
let mapStateToProps = (state: RootStateType): MapStateProType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postsDate
    }
};

//end functions

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    ChangePost})
(MyPosts);

export default MyPostsContainer;