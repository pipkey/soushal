import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ss from "./Profile.module.css"


const Profile = () => {
    return (
        <div className={ss.content}>
            <img  className={ss.main} src="https://i0.wp.com/www.courthousenews.com/wp-content/uploads/2017/09/White-tiger.jpg" />

            <div>
                ava + disc
            </div>
     <div>
         <MyPosts />
     </div>
        </div>

    )
}


export default Profile;