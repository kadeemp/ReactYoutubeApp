import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from "./components/video_detail"
import _ from 'lodash';
const API_KEY = 'AIzaSyC4oLAks9Bv7L6IOBOHDYag-nOrF3dw27A';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos : [],
      selectedVideo:null
    }
    this.videoSearch('you and me james brown')
  }
videoSearch(term) {
  YTSearch({key:API_KEY, term:term}, (videos) => {
    this.setState({
      videos:videos ,
      selectedVideo:videos[0]
    });
    console.log(videos);
  })
}

  render() {
const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoselect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    )
  }
}




ReactDOM.render(<App/>, document.querySelector('.container'));
