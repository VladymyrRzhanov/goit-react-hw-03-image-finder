import React from 'react';
// import PropTypes from 'prop-types';
import s from "./Button.module.css";

const Button = ({onLoadMore}) => (
    <button className={s.button} type="button" onClick={()=>onLoadMore()}>
        Load more
    </button>
)

export default Button;