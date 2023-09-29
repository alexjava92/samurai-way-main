import React from 'react';
import styled from "styled-components";
import {Post} from "./post/Post";

type PostType = {
    id: number;
    message: string;
    likeCount: number;
}

export type MyPostTypeProps = {
    posts: PostType[];
}

export const MyPosts = (props: MyPostTypeProps) => {

    // let posts = [
    //     {id: 1, message: "Hello bro88787", likeCount: 12},
    //     {id: 2, message: "Все в порядке ", likeCount: 1},
    //     {id: 3, message: "Denis React ", likeCount: 1},
    //     {id: 4, message: "Alexey don`t no error", likeCount: 1}
    // ]

    let postsElements = props.posts.map(p=> <Post message={p.message} likesCount={p.likeCount}/>)

    return (
        <StyledMyPost>
            <StyledH3>My Post</StyledH3>
            <div>
                <div>
                <textarea ></textarea>
                </div>
                <StyledBtn>Add post</StyledBtn>
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
  padding: 10px;
`
const StyledH3 = styled.h3`
 margin-top: 10px;
`

const StyledBtn = styled.button`
  width: 100px;
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  
  &:hover{
    background-color: #64b5f6;
    transition: background-color 0.2s ease-in-out;
  }
  
  &:active{
    background-color: #2196F3;
    transition: background-color 0.2s ease-in-out;
  }
`