import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children }) => (
  <section className={s.section}>
    <div className={s.container}>{children}</div>
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
