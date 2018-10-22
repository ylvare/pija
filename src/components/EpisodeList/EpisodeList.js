import React, { Component } from 'react';
import Episode from '../Episode/Episode'
import './EpisodeList.css';


class EpisodeList extends Component {

  render() {
    return (
      <div className="EpisodeList">
        <h2>Avsnitt</h2>
        {this.props.episodeList.map(episode=>{
          return <Episode key = {episode.key} episode={episode} viewEpisodeDetail = {this.props.viewEpisodeDetail}/>
        })}
      </div>
    );
  }
}

export default EpisodeList;
