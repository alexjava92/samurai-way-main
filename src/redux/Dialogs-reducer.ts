import {
    DialogPageType,
    ActionsTypes,
    SEND_MESSAGE, SendMessageAction
} from './State'; // замените на правильный путь к вашему файлу

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: action.message }]
            };
        default:
            return state;
    }
};

export const sendMessageAC = (message: string): SendMessageAction => {
    return {
        type: SEND_MESSAGE,
        message: message
    }
}