import React, {useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

     const [editMode,setEditMode] = useState<boolean>(false);
     const [status,setStatus] = useState<string>(props.status);

     useEffect(()=>{
         setStatus(props.status)
     },[props.status]);


     const ActiveEM = () =>{
         setEditMode(true)
     };
     const onBlurEM = () =>{
         setEditMode(false)
     };

     const onChangeStatus =(e: React.ChangeEvent<HTMLInputElement>)=> {
       let val = e.currentTarget.value;
         setStatus(val);
         props.updateStatus(val)
     };


    return (
        <div>
            {editMode
                ? <input
                    onChange={onChangeStatus}
                     onBlur={onBlurEM}
                    value={status}
                    autoFocus={true}
                />
                : <span
                     onDoubleClick={ActiveEM}
                >
                    {props.status}
            </span>
            }
        </div>

    )
};


