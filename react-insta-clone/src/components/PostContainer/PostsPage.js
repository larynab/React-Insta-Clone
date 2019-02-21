import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
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
    render() {
        return(
            <div className='Alpha'>
                <header className="App-header">
                    <SearchBar />
                </header>
                <div className='Post-container'>
                    {this.state.dummyData.map((datamap) => (
                    <PostContainer key={datamap.timestamp} post={datamap} />            
                    ))}
                </div>
            </div> 
        );
    }
}

export default PostsPage;