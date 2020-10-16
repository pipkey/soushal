import React from 'react';
import ss from "./MyPosts.module.css"
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My Posts 
            <div>
                <textarea></textarea>
            </div>
            <div className={ss.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            </div>
        </div>


    )
}


export default MyPosts;