import React from 'react';
import styled from "styled-components";


export const ProfileInfo = () => {
    return (
        <div>
            <StyledImg
                src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-10/athletics-meta.jpg"/>
            Main content

            <StyledDescriptionsBlock>ava+description</StyledDescriptionsBlock>

        </div>
    );
};


const StyledImg = styled.img`
  max-width: 1000px;
`
const StyledDescriptionsBlock = styled.div`
 padding: 10px;
`