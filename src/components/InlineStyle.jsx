import React from 'react'

const containerStyle = {

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
