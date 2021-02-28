import React from "react";
import {PostType, RootStateType} from "../../../redux/store"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";

//type
type MapStateProType = {
     posts:Array<PostType>
}
//end type

//functions
let mapStateToProps = (state: RootStateType): MapStateProType => {
    return {
        posts: state.profilePage.postsDate
    }
};

//end functions

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;