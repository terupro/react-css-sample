import React from 'react'

export const StyledJsx = () => {
  return (
    <>
    <div className='container'>
      <p className='title'>Styled Jsx</p>
      <button>Fight!!</button>
    </div>
    <style jsx='true'>{`
      .container {
        border: solid 2px grey;
        border-radius: 20px;
        text-align: center;
        padding: 20px;
        margin: 20px;
        display:flex;
        justify-content :space-around;
        align-items: center;
      }
      .title {
        margin: 0;
        color: green;
     }
      button {
        background-color: pink;
        border: none;
        padding: 8px;
        border-radius: 8px;
     }
    `}</style>
    </>
  )
}
