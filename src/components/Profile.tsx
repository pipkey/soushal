import React from 'react';
import ss from "./Profile.module.css"


const Profile = () => {
    return (
        <div className={ss.content}>
            <div>
                <img src="https://i0.wp.com/www.courthousenews.com/wp-content/uploads/2017/09/White-tiger.jpg" />
            </div>
        <div>
            ava + disc
        </div>
            <div>
                my Post
            <div>
                 new post
            </div>
                <div className={ss.posts}>
                    <div className={ss.item}>post 1</div>
                    <div className={ss.item}>post 2</div>
                </div>
            </div>

        </div>
    )
}


export default Profile;