/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled';

export const Emotion = () => {
   const containerStyle = css`
   border: solid 2px grey;
   border-radius: 20px;
   text-align: center;
   padding: 20px;
   margin: 20px;
   display:flex;
   justify-content :space-around;
   align-items: center;
   `;
   const titleStyle = css({
      margin: 0,
      color: 'green',
   });
   return (
      <div css={containerStyle}>
         <p css={titleStyle}>Emotion</p>
         <SButton>Fight!!</SButton>
      </div>
   )
}

const SButton = styled.button`
background-color: pink;
border: none;
padding: 8px;
border-radius: 8px;
&:hover {
   background-color: white;
}
`