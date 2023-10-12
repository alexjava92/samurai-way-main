type MessageType = {
    id: number
    message: string

}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likeCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
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

export type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

export type ActionsTypes = AddPostActionType;


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
        },
        sidebar: {}

    },


    /* changeNewText(newText: string) {
         this._state.profilePage.messageForNewPost = newText
         this._onChange()
     },*/



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
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 100
            }
            this._state.profilePage.posts.push(newPost)
            this._onChange()
        } else if (action.type === '') {
            /* changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },*/
        }

    }
}


