import React from 'react';

import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './Login/LoginPage';
import authenticate from './authentication/authenticate';

const ToShow = authenticate(PostsPage)(LoginPage);

class App extends React.Component {
  state = {
    inputText: ""
  };

  handleChanges = e => this.setState({ inputText: e.target.value });

  signIn = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.inputText);
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        {/* Render the component that is created with our HOC right here */}
        <ToShow />
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChanges}
        />
        <button onClick={this.signIn}>Sign in</button>
      </div>
    );
  }
}

export default App;