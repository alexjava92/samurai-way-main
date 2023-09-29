import React from 'react';
import styled from "styled-components";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";


let dialogs = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Denis"},
    {id: 4, name: "Alexey"}
]
let messages = [
    {id: 1, message: "hi"},
    {id: 2, message: "yo"},
    {id: 3, message: "how is your"},
    {id: 4, message: "hi"}
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = messages.map(m => <Message message={m.message}/>)

export const Dialogs = () => {

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
