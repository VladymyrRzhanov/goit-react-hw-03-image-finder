import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import s from "./Modal.module.css";

// const Modal = ({ modalImg, tags }) => (
//     <div className={s.overlay}>
//         <div className={s.modal}>
//             <img src={modalImg} alt={tags} />
//         </div>
//     </div>
// );

// export default Modal;
const modalRoot = document.querySelector('#modal');

export default class Modal extends Component {
    state = {
        modalImg: '',
        tags: ""
    };

    componentDidMount() {
        window.addEventListener('keydown', this.modalClose);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.modalClose);
    };
    
    modalClose = e => {
        const { onClose } = this.props;
        if (e.code === 'Escape') {
            onClose()
        };
    };

    handleBackdropClick = e => {
        const { onClose } = this.props;
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    render() {
        const { modalImg, tags } = this.state;
        return createPortal(<div className={s.overlay} onClick={this.handleBackdropClick}>
                <div className={s.modal}>
                    <img src={modalImg} alt={tags} />
                </div>
            </div>, modalRoot)
    }
}