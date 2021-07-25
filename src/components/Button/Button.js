import React from 'react';
import PropTypes from 'prop-types';
import s from "./Button.module.css";

const Button = ({onLoadMore}) => (
    <button className={s.button} type="button" onClick={()=>onLoadMore()}>
        Load more
    </button>
)

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}

export default Button;