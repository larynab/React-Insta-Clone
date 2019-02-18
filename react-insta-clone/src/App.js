import React from 'react';

import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      username: '',
      thumbnailURL: '',
      imageUrl: '',
      likes: '',
      timestamp: '',
      comments: [],
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Search-bar">
            <SearchBar />
          </div>
        </header>
        <div className='Post-container'>
          {this.state.dummyData.map((datamap, index) => (
            <PostContainer key={index} post={datamap} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
