import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import EpisodeList from './components/EpisodeList/EpisodeList'
import EpisodeDetail from './components/EpisodeDetail/EpisodeDetail'
import {TvMaze} from './util/TvMaze'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      episodeList:[],
      episodeInDetail: false,
      searchValue: ''
    }

    this.viewEpisodeDetail = this.viewEpisodeDetail.bind(this)
    this.getEpisodes = this.getEpisodes.bind(this)
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this)
  }


  viewEpisodeDetail(episode){
    this.setState({
        episodeInDetail: episode
      })
  }

  handleSearchValueChange(searchValue){
    this.setState ({
      searchValue: searchValue
    })
  }

  async getEpisodes(){
    const episodeList = await TvMaze.getEpisodes(this.state.searchValue)
    console.log(episodeList)
      this.setState({
          episodeList: episodeList,
          episodeInDetail: false
        })
     }

  render() {
    return(
      <div>
        <h1>Pi<span className="highlight">Ja</span> TV Search</h1>
          <div className="App">
            <SearchBar searchValue = {this.state.searchValue} handleSearchValueChange = {this.handleSearchValueChange} getEpisodes ={this.getEpisodes} />
            <div className="Result">
             <EpisodeList episodeList ={this.state.episodeList} viewEpisodeDetail={this.viewEpisodeDetail}/>
             <EpisodeDetail episode ={this.state.episodeInDetail}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
