import React from 'react';

import PostsPage from '../components/PostContainer/PostsPage';
import LoginPage from './LoginPage';
import authenticate from '../authentication/authenticate';

const ToShow = authenticate(PostsPage)(LoginPage);

class Login extends React.Component {

  render() {
    return (
      <div className="App">
        <ToShow />
      </div>
    );
  }
}

export default Login;