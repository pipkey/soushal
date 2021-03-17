import {PostType} from "../../../redux/store"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";
import {AppRootStateType} from "../../../redux/redux-store";

//type
type MapStateProType = {
     posts:Array<PostType>
}
//end type

//functions
let mapStateToProps = (state: AppRootStateType): MapStateProType => {
    return {
        posts: state.profilePage.postsDate
    }
};

//end functions

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;