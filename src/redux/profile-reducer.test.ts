import profileReducer, {addPost, deletePost} from "./profile-reducer";
import {ProfilePageType} from "./store";
import {ProfileType} from "../components/Profile/ProfileContainer";




it ("new post should be added ", ()=>{

    //1 test data
    let action = addPost("pipKEY");
    let state: ProfilePageType = {

        postsDate: [
            {id: 1, message: "Hi, how are you?", likeCounts: 35},
            {id: 2, message: "It's my first Post", likeCounts: 74},
            {id: 3, message: "beer?", likeCounts: 3000000},
            {id: 4, message: "go home", likeCounts: 22},
            {id: 5, message: "we live in your dream", likeCounts: 11}
        ],
        // newPostText: "hello my dear friends",
        profile: {} as ProfileType,
        status: ""
    };
//2 action
    let newState = profileReducer(state,action);
//3 expectation
    expect(newState.postsDate.length).toBe(6);
    expect(newState.postsDate[5].message).toBe("pipKEY");
});

it ("name new post should be correct ", ()=>{

    //1 test data
    let action = addPost("pipKEY");
    let state: ProfilePageType = {

        postsDate: [
            {id: 1, message: "Hi, how are you?", likeCounts: 35},
            {id: 2, message: "It's my first Post", likeCounts: 74},
            {id: 3, message: "beer?", likeCounts: 3000000},
            {id: 4, message: "go home", likeCounts: 22},
            {id: 5, message: "we live in your dream", likeCounts: 11}
        ],
        // newPostText: "hello my dear friends",
        profile: {} as ProfileType,
        status: ""
    };
//2 action
    let newState = profileReducer(state,action);
//3 expectation
    expect(newState.postsDate[5].message).toBe("pipKEY");
});

it ("after deleted length should be decrement", ()=>{

    //1 test data
    let action = deletePost(1);
    let state: ProfilePageType = {

        postsDate: [
            {id: 1, message: "Hi, how are you?", likeCounts: 35},
            {id: 2, message: "It's my first Post", likeCounts: 74},
            {id: 3, message: "beer?", likeCounts: 3000000},
            {id: 4, message: "go home", likeCounts: 22},
            {id: 5, message: "we live in your dream", likeCounts: 11}
        ],
        // newPostText: "hello my dear friends",
        profile: {} as ProfileType,
        status: ""
    };
//2 action
    let newState = profileReducer(state,action);
//3 expectation
    expect(newState.postsDate.length).toBe(4);

});

it ("after deleted length should be decrement if incorrect", ()=>{

    //1 test data
    let action = deletePost(100);
    let state: ProfilePageType = {

        postsDate: [
            {id: 1, message: "Hi, how are you?", likeCounts: 35},
            {id: 2, message: "It's my first Post", likeCounts: 74},
            {id: 3, message: "beer?", likeCounts: 3000000},
            {id: 4, message: "go home", likeCounts: 22},
            {id: 5, message: "we live in your dream", likeCounts: 11}
        ],
        // newPostText: "hello my dear friends",
        profile: {} as ProfileType,
        status: ""
    };
//2 action
    let newState = profileReducer(state,action);
//3 expectation
    expect(newState.postsDate.length).toBe(5);

});