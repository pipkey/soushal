import React, {ChangeEvent} from "react";
import ss from "./MyPosts.module.css"
import Post from "./Post/Post"
import {addPostAC, AllActionTypes, ChangePostAC, PostType} from "../../../redux/state"

type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: AllActionTypes) => void
    newPostText:string

}
const MyPosts = (props: MyPostsPropsType) => {


        let postElement = props.posts.map(post =>
            <Post key={post.id} message={post.message} likeCounts={post.likeCounts}
            />);


        const addPostHandler = () => {
            props.dispatch(addPostAC());

        };

        const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let newText = e.currentTarget.value;
            props.dispatch(ChangePostAC(newText))
        };


        return (
            <div className={ss.postsBlock}>
                <h3>My Posts </h3>
                <div>
                <textarea
                    onChange={onPostChangeHandler}
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