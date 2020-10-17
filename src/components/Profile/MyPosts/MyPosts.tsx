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
            <Post message = 'Hi, how are you?'  likeCounts={2}/>
            <Post message = "It's my first Post" likeCounts={12}/>
            
            </div>
        </div>


    )
}


export default MyPosts;