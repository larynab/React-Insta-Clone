import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Search-bar">
            <SearchBar />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
