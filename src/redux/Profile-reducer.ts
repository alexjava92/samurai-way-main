import {ActionsTypes, AddPostAction, PostType, ProfilePageType} from "./State";
export const ADD_POST = 'ADD_POST'

// Определите тип для действия ADD_POST
type AddPostActionType = {
    type: typeof ADD_POST;
    postText: string;
};

// Мы можем использовать объединение типов на случай, если будут другие действия для обработки в будущем
type ProfileActionTypes = AddPostActionType; // | AnotherActionType | YetAnotherActionType;

type ProfileStateType = {
    profilePage: {
        posts: PostType[]
    };
};

export const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 100
            };
            // Мы просто добавляем новый пост к текущему массиву постов
            console.log(action.postText)
            return {
                ...state,
                posts: [...state.posts, newPost]

            };
        default:

            return state;
    }
};


export const addPostAC = (postText: string): AddPostAction => {
    console.log("Запускается" + postText)
    return {
        type: ADD_POST,
        postText: postText
    }
}