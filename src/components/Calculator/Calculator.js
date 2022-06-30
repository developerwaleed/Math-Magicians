import React, { Component } from 'react';
import style from './Calculator.module.css';
import calculate from '../../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  handleClick = (e) => {
    const buttonName = e.target.innerHTML;
    this.setState((prevState) => ({
      ...calculate(prevState, buttonName),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <div>
          <table>
            <tr>
              <td className={style['result-field']} colSpan="4">{ next || operation || total || ''}</td>
            </tr>
            <tr>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>AC</button></td>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>+/-</button></td>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>%</button></td>
              <td><button type="button" className={style['btn-type-3']} onClick={this.handleClick}>&#247;</button></td>
            </tr>
            <tr>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>7</button></td>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>8</button></td>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>9</button></td>
              <td><button type="button" className={style['btn-type-3']} onClick={this.handleClick}>x</button></td>
            </tr>
            <tr>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>4</button></td>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>5</button></td>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>6</button></td>
              <td><button type="button" className={style['btn-type-3']} onClick={this.handleClick}>-</button></td>
            </tr>
            <tr>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>1</button></td>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>2</button></td>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>3</button></td>
              <td><button type="button" className={style['btn-type-3']} onClick={this.handleClick}>+</button></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="button" className={style.zero} onClick={this.handleClick}>0</button></td>
              <td><button type="button" className={style['btn-type-1']} onClick={this.handleClick}>.</button></td>
              <td><button type="button" className={style['btn-type-3']} onClick={this.handleClick}>=</button></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
