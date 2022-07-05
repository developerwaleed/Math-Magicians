import React from 'react';
import styles from './Quote.module.css';

const Quote = () => (
  <div className={styles.quote}>
    <div className={styles['quote-text']}>
      &quot;Without mathematics, there’s nothing you can do. Everything around
      you is mathematics. Everything around you is numbers..&quot;
    </div>
    <br />
    <span>-Shakuntala Devi, Indian writer and mental calculator</span>
  </div>
);

export default Quote;
