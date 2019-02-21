import React from "react";
import PropTypes from 'prop-types';

import './PostContainer.css';
import CommentContainer from '../CommentSection/CommentContainer';
import Likes from './LikeSection/Like';
import styled, { css } from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid gold;
    color: red;
`;


const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

function PostContainer(props) {
 
    return (
        <WrapperDiv>
            <p><img id='thumbnail' src={props.post.thumbnailUrl} alt={props.post.username} /><strong>{props.post.username}</strong></p>
            <img src={props.post.imageUrl} alt={props.post.username} />
            <br />
            <Likes incrementLike={props.incrementLike} likes={props.post.likes}/>
            <CommentContainer  comments={props.post.comments} />
            {/* <img id='heart' src='https://heartbreaktriage.com/wp-content/uploads/gold-heart-icon-how-to-heal-a-broken-heart.png' alt='heart' onClick={props.incrementLike} />
            <p><strong>{props.post.likes} likes</strong></p> */}
            {/* {props.post.comments
                ? props.post.comments.map((comment, index) => (
                    <Fragment key={index}>
                        <p><strong>{comment.username}</strong> {comment.text}</p>
                    </Fragment>
                ))
                : null}
            <AddComment />     */}
                  <Button type="primary">Primary</Button>
                  <Button type="success">Success</Button>
                  <Button type="danger">Danger</Button>
                  <Button type="warning">Warning</Button>
        </WrapperDiv>
    );
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

