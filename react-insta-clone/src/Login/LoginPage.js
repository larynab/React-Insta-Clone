import React from 'react';

class LoginPage extends React.Component {
  state = {
    inputText: "",
    passWord: ""
  };

  handleChanges = e => {
    this.setState({ inputText: e.target.value });

    };
  handleChangesB = e => {
    this.setState({ passWord: e.target.value });
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
      <h1>Login</h1>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChanges}
          placeholder="user"
        />
        <br />
        <input 
          type="text"
          value={this.state.passWord}
          onChange={this.handleChangesB}
          placeholder="password"
        />
        <br />
        <button onClick={this.signIn}>Sign in</button>
      </div>
    );
  }
}

// const LoginPage = props => {
//     return (
//     <>
//     <h1>Login</h1>
//             <input
//           type="text"
//           value={props.inputText}
//           onChange={props.handleChanges}
//           placeholder="user"
//         />
//         <br />
//         <input 
//           type="text"
//           value={props.passWord}
//           onChange={props.handleChangesB}
//           placeholder="password"
//         />
//         <br />
//         <button onClick={props.signIn}>Sign in</button>
//     </>
//     );
// };

export default LoginPage;