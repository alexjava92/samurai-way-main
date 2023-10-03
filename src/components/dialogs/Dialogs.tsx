import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogPageType} from "../redux/State";



type DialogsProps = {
    dialogsPage: DialogPageType;
}



export const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const [message, setMessage] = useState('');
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const addPost = () => {
        alert(message)
    }


    return (
        <StyledDialogs>
            <StyledDialogsItems>
                <StyledDialog>
                    {dialogsElements}
                </StyledDialog>
            </StyledDialogsItems>
            <StyledMessages>
                {messagesElements}
            </StyledMessages>

            <textarea onChange={handleChange} value={message}></textarea>
            <button onClick={addPost}>add</button>

        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  display: grid;
  background-color: antiquewhite;
  grid-template-columns: 2fr 10fr;
`
const StyledDialogsItems = styled.div`
  padding: 10px;
`
const StyledDialog = styled.div`
  &:active {
    color: white;
  }

  &:hover {
    color: white;
  }
`
const StyledMessages = styled.div`
  padding: 10px;
`
