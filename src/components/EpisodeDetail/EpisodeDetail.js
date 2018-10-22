import React, { Component } from 'react';
import './EpisodeDetail.css';

class EpisodeDetail extends Component {

 renderEpisodeDetail() {
    if(!this.props.episode) {
      return <div></div>
    } else {
      return (
        <div>
        <p>Titel: {this.props.episode.title} | Säsong: {this.props.episode.season} | Avsnitt: {this.props.episode.e_Nbr} | Airdate: {this.props.episode.airdate}</p>
         <p>{this.props.episode.summary.replace('<p>', '').replace('</p>', '')}</p>
        <img src={this.props.episode.photo ? this.props.episode.photo.original : ''} alt="" width="100%"/>
        </div>
      );
    }
  }


  render() {
    return (
      <div className="EpisodeDetail">
       <h2>Mer info </h2>
       {this.renderEpisodeDetail()}
      </div>
    );
  }
}


export default EpisodeDetail;
