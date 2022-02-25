import React from 'react'

export default props => (
    <div style ={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px',
        boxShadow:'0 4px 5px 0 rgba(0,0,0, .14)',
        borderRadius: '5px'
    }}>
     <h1>{props.name}</h1>   
    <button onClick={props.onChangeTitle} >Click</button>
    </div>
)