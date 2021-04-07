import {UsersType} from "../redux/users-reducer";

type NewObjPropType = {
    followed: boolean
}


export let helperObj = (items: Array<UsersType>, itemId: number, objPropName: string, newOdjProps:NewObjPropType) => {
  return   items.map((u:any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newOdjProps}
        }
        return u
    })
};