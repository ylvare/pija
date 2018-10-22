import React, { Component } from 'react';
import './Episode.css';

class Episode extends Component {

  constructor(props){
    super(props)
    this.handleViewDetail = this.handleViewDetail.bind(this)
  }

handleViewDetail(e){
  this.props.viewEpisodeDetail(this.props.episode)
  e.preventDefault()
}

  render() {
    return (
      <div className="Episode">
          <div className = "Row">
            <div className="Episode-information">
             <h3>{this.props.episode.title}</h3>
              <p>Säsong {this.props.episode.season} | Avsnitt {this.props.episode.e_Nbr}</p>
            </div>
           <img src={this.props.episode.photo ? this.props.episode.photo.medium : ''}  height="65px"/>
          </div>
        <a className="Episode-action" onClick={this.props.viewEpisodeDetail}>+</a>
      </div>
    );
  }
}

export default Episode;
