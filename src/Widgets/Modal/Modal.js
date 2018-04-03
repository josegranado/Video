import React from 'react';
import './Modal.css';
export default function Modal (props)
{
    return (
        <div className="Modal">
            {props.children}
            <h1> Esto es un Modal </h1>
            <button onClick={ props.handleClick }  className="Modal-close"></button>
        </div>
    )
}