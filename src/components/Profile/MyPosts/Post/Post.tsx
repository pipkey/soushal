import { type } from 'os';
import React from 'react';
import ss from "./Post.module.css"

type PostType = {
    message: string,
    likeCounts: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={ss.item}>
            <img className={ss.ava} src="https://static.wixstatic.com/media/79c9822b89594184828440001e15fc21.jpg/v1/fill/w_640,h_560,al_c,q_80,usm_0.66_1.00_0.01/79c9822b89594184828440001e15fc21.webp" />
            {props.message}
            <div>
                <span className={ss.hart}>Like</span> {props.likeCounts}
            </div>
        </div>
    );
}


export default Post;