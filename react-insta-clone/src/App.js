import React from 'react';

import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';

class App extends React.Component {
  constructor() {
    console.log('Constructor running');
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

  componentDidMount() {
    console.log('CDM running');
    this.setState({dummyData: dummyData});
  };

  // incrementLike = () => {
  //   let likes = this.state.likes + 1;
  //   this.setState({ likes });
  // };

  // shouldComponentUpdate(prevProps) {
  //   console.log('SCU is blocking renders');
  //   if (prevProps.someProp !== this.props.someProp) {
  //     return false;
  //   }
  //   return true;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   CDU checks for changing data, let's us do something based on the data that changed
  //   console.log('CDU running');
  //   if (prevProps.userID !== this.props.userID) {
  //     console.log('Will never run....');
  //     this.fetchUser(this.props.userID);
  //   }
  // }

  render() {
    console.log('rendering App.js');
    return (
      <div className="App">
        <header className="App-header">
          <div className="Search-bar">
            <SearchBar />
          </div>
        </header>
        <div className='Post-container'>
          {this.state.dummyData.map((datamap) => (
            <PostContainer key={datamap.timestamp} post={datamap} />            
          ))}
        </div>
        <div>
          {/* <Post /> */}
        </div>
      </div>
    );
  }
}

export default App;
