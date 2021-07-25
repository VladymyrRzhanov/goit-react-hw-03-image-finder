import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import s from "./Modal.module.css";

const modalRoot = document.querySelector('#modal');

export default class Modal extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    }
    
    // state = {
    //     modalImg: '',
    //     tags: ""
    // };

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
        return createPortal(
            <div className={s.overlay} onClick={this.handleBackdropClick}>
                <div className={s.modal}>
                    <img src={this.props.modalImg} alt={this.props.tags} />
                </div>
            </div>, modalRoot)
    }
}