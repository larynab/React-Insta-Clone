import React from "react";
import PropTypes from 'prop-types';

import './PostContainer.css';
import CommentContainer from '../CommentSection/CommentContainer';
import Likes from './LikeSection/Likes';
import styled, { css } from 'styled-components';

const WrapperDiv = styled.div`
    width: 500px;
    height: 100%;
    border: 1px solid gold;
    color: red;
    margin-bottom: 10px;
    margin-top: 10px;
`;

const PostImg = styled.img`
    width: 100%
`;

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;
    &:hover {
      padding: 0.5em 2em;
    }

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

class PostContainer extends React.Component {
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
  render() {
    return (
        <WrapperDiv>
            <p><img id='thumbnail' src={this.props.post.thumbnailUrl} alt={this.props.post.username} /><strong>{this.props.post.username}</strong></p>
            <PostImg src={this.props.post.imageUrl} alt={this.props.post.username} />
            <br />
            <Likes
              incrementLike={this.incrementLike}
              likes={this.state.likes}
            />
            <CommentContainer  comments={this.props.post.comments} />
            <br />
            <p>Testing Buttons</p>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="danger">Danger</Button>
            <Button type="warning">Warning</Button>
            <br />
            <p>End Testing</p>
        </WrapperDiv>
    );
  };  
};

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnailUrl: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      like: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
};
PostContainer.defaultProps = {
  dummyData: []
};

export default PostContainer; 

