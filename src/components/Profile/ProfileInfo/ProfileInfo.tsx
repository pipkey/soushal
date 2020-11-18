import React from 'react';
import ss from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div >
            <img  className={ss.main} src="https://i0.wp.com/www.courthousenews.com/wp-content/uploads/2017/09/White-tiger.jpg" />

            <div className={ss.deskTopBlock}>
                ava + disc
            </div>

        </div>

    )
}


export default ProfileInfo;