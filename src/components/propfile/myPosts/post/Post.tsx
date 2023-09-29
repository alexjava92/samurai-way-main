import React from 'react';
import styled from "styled-components";



type TypePostProps = {
    message: string
    likesCount: number
}
export const Post = (props: TypePostProps) => {
    return (
        <div>
            <StyledImgAvatar src="https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg" alt=""/>
            {props.message}
            <div>
                <span>like </span> {props.likesCount}
            </div>
        </div>
    );
};


const StyledImgAvatar = styled.img`
  max-width: 60px;
  border-radius: 100%;
`