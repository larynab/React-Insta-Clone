import React from 'react';
// import Like from './Like';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

//   render() {
//     return (
//         <div>
//           <Like
//             incrementLike = {this.incrementLike} likes={this.state.likes}
//           ></Like>
//         </div>
//     );
//   };
// };

// class Like extends React.Component {
  render() {
    return(
    <div>
      <button onClick={this.props.incrementLike}><img id='heart' src='https://heartbreaktriage.com/wp-content/uploads/gold-heart-icon-how-to-heal-a-broken-heart.png' alt='heart'  /></button>
      <p><strong>{this.props.post.likes} likes</strong></p>
    </div>
    );
  }
}

export default Likes;