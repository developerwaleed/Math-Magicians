import React from 'react';

export default function Calculator() {
  return (
    <div>
      <div className="calulator-container">
        <table>
          <tr>
            <td colSpan="4">0</td>
          </tr>
          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <td>&#247;</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>x</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td colSpan="2">0</td>
            <td>.</td>
            <td>=</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
