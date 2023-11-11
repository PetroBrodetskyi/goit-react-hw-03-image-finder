import React, { Component } from 'react';
import css from './Button.module.css';
import { ImPlus } from "react-icons/im";

class Button extends Component {
  render() {
    const { onloadMore } = this.props;

      return (
        <div className={css.buttoncontainer}>
            <button className={css.button} type="button" onClick={onloadMore}>
                <ImPlus />
            </button>
        </div>
    );
  }
}

export default Button;
