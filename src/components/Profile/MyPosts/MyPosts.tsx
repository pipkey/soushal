import React, {ChangeEvent} from "react";
import ss from "./MyPosts.module.css"
import Post from "./Post/Post"
import {PostType} from "../../../redux/state"

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    newPostText: string
    ChangePostText: (newText: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {


        let postElement = props.posts.map(post =>
            <Post key={post.id} message={post.message} likeCounts={post.likeCounts}
            />);


        const addPostHandler = () => {
            props.addPost(props.newPostText);
            props.ChangePostText("");
        };

        const onPostChangeHeandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.ChangePostText(e.currentTarget.value)
        };


        return (
            <div className={ss.postsBlock}>
                <h3>My Posts </h3>
                <div>
                <textarea
                    onChange={onPostChangeHeandler}
                    value={props.newPostText}
                />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
                <div className={ss.posts}>
                    {postElement}

                </div>
            </div>


        )
    }
;


export default MyPosts;