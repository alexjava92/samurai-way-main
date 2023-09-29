import React from 'react';
import styled from "styled-components";

type MessageProps = {
    message: string
}

export const Message = (props: MessageProps) => {
    return <StyledMessage>{props.message} </StyledMessage>
}


const StyledMessage = styled.div`

`