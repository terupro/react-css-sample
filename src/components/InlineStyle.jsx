import React from 'react'

const containerStyle = {
   border: 'solid 2px grey',
   borderRadius: '20px',
   textAlign: 'center',
   padding: '20px',
   margin: '20px',
   display:'flex',
   justifyContent :'space-around',
   alignItems: 'center'
};

const titleStyle = {
   margin: '0',
   color: 'green'
};

const buttonStyle = {
   backgroundColor: 'pink',
   border: 'none',
   padding: '8px',
   borderRadius: '8px'
};

export const InlineStyle = () => {
  return (
    <div style={containerStyle}>
      <p　style={titleStyle}>Inline Style</p>
      <button style={buttonStyle}>Fight!</button>
    </div>
  )
}
