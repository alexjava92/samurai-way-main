import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {Post} from "./post/Post";
import {Button, TextField} from "@mui/material";

type PostType = {
    id: number;
    message: string;
    likeCount: number;
}

export type MyPostTypeProps = {
    posts: PostType[];
    addPost: (text: string) => void
}

export const MyPosts = (props: MyPostTypeProps) => {
    const [text, setText] = useState('');

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);


    }
    const handleAddPostClick = () => {
        props.addPost(text);

    };

    return (
        <StyledMyPost>
            <StyledH3>My Post</StyledH3>
            <div>
                <div>
                    <StyledTextField variant="outlined"
                               label="My Post"
                               id="outlined-basic"
                               onChange={handleChange}
                               value={text}></StyledTextField >
                </div>
                <StyledButton variant="contained" onClick={handleAddPostClick}>Add post</StyledButton>
                <div>
                    New Post
                </div>
                {postsElements}
            </div>
        </StyledMyPost>
    );
};

const StyledMyPost = styled.div`
  background-color: antiquewhite;
  padding: 20px;
  
`
const StyledH3 = styled.h3`
  margin-top: 10px;
  padding: 20px;
`

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
  width: 80%;  // если вы хотите, чтобы поле ввода занимало всю ширину контейнера
  padding: 100px;  // добавьте отступ вокруг текста внутри поля ввода
`;

const StyledButton = styled(Button)`
  padding: 100px 200px;  // добавьте отступ вокруг текста внутри кнопки
`;