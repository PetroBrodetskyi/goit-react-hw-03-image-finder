import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { FiSearch } from 'react-icons/fi';


class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.serchbar}>
        <div className={css.searchhover}>
        <form className={css.searchform} onSubmit={this.handleSubmit}>
          <button className={css.searchformbutton} type="submit">
            <FiSearch size={25} stroke="#3f51b5" />
          </button>

          <input
            className={css.searchforminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
          </form>
          </div>
      </header>
    );
  }
}

export default Searchbar;
