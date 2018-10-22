import React, { Component } from 'react';
import './EpisodeDetail.css';
import '../Episode/Episode.css';

class EpisodeDetail extends Component {


  render() {
    return (
      <div className="EpisodeDetail">
       <h2>Mer info</h2>
       <div className="Episode">
         <div className="Episode-information">
           <h3>{this.props.episode.title}</h3>
           <p>Säsong {this.props.episode.season} | Avsnitt {this.props.episode.e_Nbr}</p>
         </div>
        </div>
      </div>
    );
  }
}

export default EpisodeDetail;
