import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.handleGetEpisodes = this.handleGetEpisodes.bind(this)
    this.handleInputValueChange = this.handleInputValueChange.bind(this)
  }

  handleInputValueChange(e){
    this.props.handleSearchValueChange(e.target.value)
  }

  handleGetEpisodes(e){
    this.props.getEpisodes()
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.props.handleInputValueChange} defaultValue = {this.props.searchValue} placeholder="Skriv namnet på en serie" />
        <a  onClick={this.handleGetTracks}> SEARCH </a>
      </div>
    );
  }
}

export default SearchBar;
