import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.homeContainer}>
    <h2>Welcome to my CalCulator!</h2>
    <p>
      A calculator is a device that performs arithmetic operations on numbers.
      Basic calculators can do only addition, subtraction, multiplication and
      division mathematical calculations. However, more sophisticated
      calculators can handle exponential operations, square roots, logarithms,
      trigonometric functions and hyperbolic functions. Internally, some
      calculators perform all these functions by repeated addition processes.
      <br />
      Most calculators these days require electricity to operate or are
      battery-powered calculators. Calculators work by performing programmed
      functions based on numerical inputs
    </p>
  </div>
);

export default Home;
