import React from "react";
import ss from "./MyPosts.module.css"
import Post from "./Post/Post"
import {PostDataType} from "../Profile";


type MyPostsType={
    postsDate: Array<PostDataType>
}

const MyPosts = (props:MyPostsType ) => {

    let postElement = props.postsDate.map( p => <Post message={p.message} likeCounts={p.likeCounts}/>);

    return (
        <div className={ss.postsBlock}>
            <h3>My Posts </h3>
            <div>
                <textarea>=</textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={ss.posts}>
                {postElement}

            </div>
        </div>


    )
};


export default MyPosts;