import React from "react";
import ss from "./ProfileInfo.module.css";
import { ProfileType } from "../ProfileContainer";
import { Preloader } from "../../Preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusHOOKS";

type ProfileinfoType = {
  isOwner: boolean;
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileInfo = (props: ProfileinfoType) => {
  if (!props.profile) {
    return <Preloader />;
  }

  let pict = "https://flavioalvares.com.br/img/profile.png"

  return (
    <div className={ss.deskTopBlock}>
          <img src={pict}/>
      {/* <img
        src={
            props.profile.photos == undefined
            ? "https://flavioalvares.com.br/img/profile.png"
            : "photo"
        }/> */}
      <input type="file" />

      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />

      <h4>{props.profile.aboutMe}</h4>
      <hr />
      <h2>{props.profile.fullName}</h2>
      <hr />
    </div>
  );
};

export default ProfileInfo;
