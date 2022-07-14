import React from 'react'
import styled from 'styled-components'

export const StyledComponents = () => {
   return (
      <SContainer>
         <STitle>Styled Components</STitle>
         <SButton>Fight!!</SButton>
      </SContainer>
   )
}

const SContainer = styled.div`
   border: solid 2px grey;
   border-radius: 20px;
   text-align: center;
   padding: 20px;
   margin: 20px;
   display:flex;
   justify-content :space-around;
   align-items: center;
`;

const STitle = styled.p`
margin: 0;
color: green;
`;

const SButton = styled.button`
background-color: pink;
border: none;
padding: 8px;
border-radius: 8px;
&:hover {
   background-color: white;
}
`;