import React from 'react';

import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './Login/LoginPage';
import authenticate from './authentication/authenticate';

const ToShow = authenticate(PostsPage)(LoginPage);

class App extends React.Component {
  state = {
    inputText: "",
    passWord: ""
  };

  handleChanges = e => {
    this.setState({ inputText: e.target.valuea });
    this.setState({ passWord: e.target.valueb});
    };

  signIn = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.inputText);
    localStorage.setItem("password", this.state.passWord);
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        {/* Render the component that is created with our HOC right here */}
        <ToShow />
        <input
          type="text"
          valuea={this.state.inputText}
          onChange={this.handleChanges}
          placeholder="user"
        />
        <br />
        <input 
          type="text"
          valueb={this.state.passWord}
          onChange={this.handleChanges}
          placeholder="password"
        />
        <br />
        <button onClick={this.signIn}>Sign in</button>
      </div>
    );
  }
}

export default App;