import React from 'react';
import ss from "./Post.module.css"


const Post = () => {
    return (
    <div className={ss.item}>
        <img className={ss.ava} src="https://static.wixstatic.com/media/79c9822b89594184828440001e15fc21.jpg/v1/fill/w_640,h_560,al_c,q_80,usm_0.66_1.00_0.01/79c9822b89594184828440001e15fc21.webp" />
        post 1
        <div>
            <span className={ss.hart}>Like</span>
        </div>
    </div>
     )
}


export default Post;