import React from 'react';
import ss from "./ProfileInfo.module.css"
import {ProfileType} from "../ProfileContainer";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusHOOKS";

type ProfileinfoType ={
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props:ProfileinfoType) => {
if(!props.profile){
   return <Preloader/>
}

    return (
        <div >
            {/*<img  className={ss.main} src="https://i0.wp.com/www.courthousenews.com/wp-content/uploads/2017/09/White-tiger.jpg" />*/}

            <div className={ss.deskTopBlock}>
                <img src={props.profile.photos? props.profile.photos.large : ""} alt="photo"/>

                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />

                <h4>{props.profile.aboutMe}</h4>
                <hr/>
                <h2>{props.profile.fullName}</h2>
                <hr/>

            </div>

        </div>

    )
}


export default ProfileInfo;