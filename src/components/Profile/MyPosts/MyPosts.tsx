import React from "react";
import ss from "./MyPosts.module.css"
import Post from "./Post/Post"
import {PostType} from "../../../redux/state"

type MyPostsPropsType= {
    posts: Array<PostType>
}
const MyPosts = (props:MyPostsPropsType) => {


    let postElement = props.posts.map( post =>
        <Post key={post.id} message={post.message} likeCounts={post.likeCounts}
        />);

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