import React, { Component } from 'react';
import { createPortal } from 'react-dom'
//createPortal (que voy arendizar, donde)
class ModalContainer extends Component 
{
    render ()
    {
        return createPortal(
            this.props.children,
            document.getElementById('modal-container')
        );
    }
}

export default ModalContainer