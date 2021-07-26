import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from "./SearchBar.module.css";

export default class SearchBar extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        value: '',
    };


    handleChangeInput = ({currentTarget: {value}}) => {
        this.setState({ value: value });
    };

    handleSubmit = e => {
        const { onSubmit } = this.props;
        const { value } = this.state;
        e.preventDefault();
        if (value.trim()) {
            onSubmit(value);
            this.setState({ value: '' });
        };
    };

    render() {
        return (
            <header
                className={s.searchBar}
            >
                <form
                    className={s.searchForm}
                    onSubmit={this.handleSubmit}
                >
                    <button
                        className={s.searchButton}
                        type='submit'
                    >
                        <span
                            className={s.buttonLabel}>
                            Search
                        </span>
                    </button>
                    <input
                        className={s.formInput}
                        type='text'
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChangeInput}
                    />
                </form>
            </header>
        );
    };
};
