import React from "react";
import ss from "./MyPosts.module.css"
import Post from "./Post/Post"
import {PostType} from "../../../redux/store"
import  {Field,InjectedFormProps} from "redux-form";
import {reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utills/validators/validators";
import {Textarea} from "../../FormsControls/FormsConrollers";

type MyPostsPropsType = {
    addPost: (post:string) => void
    posts: Array<PostType>
}


const MyPosts = (props: MyPostsPropsType) => {


    let postElement = props.posts.map(post =>
        <Post key={post.id} message={post.message} likeCounts={post.likeCounts}
        />);

    const AddPost = (value:AddPostFormType) => {
        props.addPost(value.post)
    };

    return (
        <div className={ss.postsBlock}>
            <h3>My Posts </h3>

                <AddPostReduxForm onSubmit={AddPost}/>

            <div className={ss.posts}>
                {postElement}
            </div>
        </div>


    )
};

type AddPostFormType = {
    post: string
}

const maxLength30 = maxLengthCreator(30);


const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"post"}
                   component={Textarea}
                   placeholder={"send your post"}
                   validate={[
                       required,
                       maxLength30,
                   ]}
            />

            <button>Add post</button>
        </form>
    )
};

const AddPostReduxForm = reduxForm<AddPostFormType>({form: "addPost"})(AddPostForm);


export default MyPosts;