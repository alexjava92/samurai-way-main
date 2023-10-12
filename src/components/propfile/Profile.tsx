import React from 'react';
import {MyPosts, MyPostTypeProps} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";



export const Profile = (props: MyPostTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    );
};


