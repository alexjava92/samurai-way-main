import React from 'react';

import {NavLink} from "react-router-dom";


type DialogItemProps = {
    name: string;
    id: number;
}
export const DialogItem: React.FC<DialogItemProps> = ({name, id}) => {
    return <div><NavLink to={"/dialogs/" + id}>{name}</NavLink></div>
}


