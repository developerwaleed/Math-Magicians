import React, { useState } from 'react';
import style from './Calculator.module.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.innerHTML;
    setCalculator((prevState) => ({
      ...calculate(prevState, buttonName),
    }));
  };

  return (
    <div>
      <div className={style.CalContainer}>
        <table>
          <tr>
            <td className={style['result-field']} colSpan="4">
              {calculator.next || calculator.operation || calculator.total || ''}
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                AC
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                +/-
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                %
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-3']}
                onClick={handleClick}
              >
                &#247;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                7
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                8
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                9
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-3']}
                onClick={handleClick}
              >
                x
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                4
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                5
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                6
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-3']}
                onClick={handleClick}
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                1
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                2
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                3
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-3']}
                onClick={handleClick}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                type="button"
                className={style.zero}
                onClick={handleClick}
              >
                0
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-1']}
                onClick={handleClick}
              >
                .
              </button>
            </td>
            <td>
              <button
                type="button"
                className={style['btn-type-3']}
                onClick={handleClick}
              >
                =
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
