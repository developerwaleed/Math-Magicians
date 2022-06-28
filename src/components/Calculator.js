import React, { Component } from 'react';
import style from './Calculator.module.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <table>
            <tr>
              <td className={style['result-field']} colSpan="4">0</td>
            </tr>
            <tr>
              <td className={style['btn-type-1']}>AC</td>
              <td className={style['btn-type-1']}>+/-</td>
              <td className={style['btn-type-1']}>%</td>
              <td className={style['btn-type-3']}>&#247;</td>
            </tr>
            <tr>
              <td className={style['btn-type-1']}>7</td>
              <td className={style['btn-type-1']}>8</td>
              <td className={style['btn-type-1']}>9</td>
              <td className={style['btn-type-3']}>x</td>
            </tr>
            <tr>
              <td className={style['btn-type-1']}>4</td>
              <td className={style['btn-type-1']}>5</td>
              <td className={style['btn-type-1']}>6</td>
              <td className={style['btn-type-3']}>-</td>
            </tr>
            <tr>
              <td className={style['btn-type-1']}>1</td>
              <td className={style['btn-type-1']}>2</td>
              <td className={style['btn-type-1']}>3</td>
              <td className={style['btn-type-3']}>+</td>
            </tr>
            <tr>
              <td className={style['btn-type-1']} colSpan="2">0</td>
              <td className={style['btn-type-1']}>.</td>
              <td className={style['btn-type-3']}>=</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
