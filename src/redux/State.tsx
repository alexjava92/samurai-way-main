import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";

type MessageType = {
    id: number
    message: string

}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type AddPostAction = {
    type: typeof ADD_POST;
    postText: string;
};

type UpdateNewMessageAction = {
    type: typeof UPDATE_NEW_MESSAGE_BODY;
    body: string;
};

export type SendMessageAction = {
    type: typeof SEND_MESSAGE;
    message: string
};
export type ActionsTypes = AddPostAction | UpdateNewMessageAction | SendMessageAction;

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello bro88787", likeCount: 12},
                {id: 2, message: "Все в порядке ", likeCount: 1},
                {id: 3, message: "Denis React ", likeCount: 1},
                {id: 4, message: "Alexey don`t no servererror", likeCount: 1}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Denis"},
                {id: 4, name: "Alexey"}
            ],
            messages: [
                {id: 1, message: "hi"},
                {id: 2, message: "yo"},
                {id: 3, message: "how is your"},
                {id: 4, message: "hi"}
            ],
            newMessageBody: "",
        },
        sidebar: {}

    },

    _onChange() {
        console.log('state changed')
    },

    subscribe(callback) {
        this._onChange = callback
    },

    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);


    }
}
