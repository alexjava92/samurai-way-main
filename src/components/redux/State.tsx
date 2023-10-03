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

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello bro88787", likeCount: 12},
            {id: 2, message: "Все в порядке ", likeCount: 1},
            {id: 3, message: "Denis React ", likeCount: 1},
            {id: 4, message: "Alexey don`t no errorrrrrr", likeCount: 1}
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

};

export const addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
}

