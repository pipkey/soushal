import React from "react";
import ss from "./MyPosts.module.css"
import Post from "./Post/Post"
import {PostType} from "../../../redux/state"

type MyPostsPropsType= {
    posts: Array<PostType>
    addPost:(postMessage:string)=>void
}


const MyPosts = (props:MyPostsPropsType) => {


    let postElement = props.posts.map( post =>
        <Post key={post.id} message={post.message} likeCounts={post.likeCounts}
        />);

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    const addPostHandler = ()=> {
        debugger;
        if (newPostElement.current) {
        props.addPost(newPostElement.current.value)
    }
    };


    return (
        <div className={ss.postsBlock}>
            <h3>My Posts </h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={ss.posts}>
                {postElement}

            </div>
        </div>


    )
};


export default MyPosts;