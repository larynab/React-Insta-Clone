import React from 'react';

import './App.css';

import PostPage from './components/PostContainer/PostsPage';

class App extends React.Component {
  render() {
    console.log('rendering App.js');
    return (
      <div className="App">
        <div>
          <PostPage />
        </div>
      </div>
    );
  }
}

export default App;
