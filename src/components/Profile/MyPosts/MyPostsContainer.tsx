import React from "react";
import {addPostAC, ChangePostAC, PostType, RootStateType} from "../../../redux/store"
import {dispatchType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


//type
 type MapDisProType = {
    addPosts: () => void
    onPostChange: (newText: string) => void
}
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
let mapDispatchToProps = (dispatch: dispatchType): MapDisProType => {
    return {
        addPosts: () => {
            dispatch(addPostAC());
        },
        onPostChange: (newText: string) => {
            dispatch(ChangePostAC(newText))
        }
    }
};
//end functions

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;