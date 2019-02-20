import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import './PostContainer.css';
import CommentContainer from '../CommentSection/CommentContainer';
import Likes from './LikeSection/Like'

function PostContainer(props) {
 
    return (
        <div className='post-card'>
            <p><img id='thumbnail' src={props.post.thumbnailUrl} alt={props.post.username} /><strong>{props.post.username}</strong></p>
            <img src={props.post.imageUrl} alt={props.post.username} />
            <br />
            {/* <img id='heart' src='https://heartbreaktriage.com/wp-content/uploads/gold-heart-icon-how-to-heal-a-broken-heart.png' alt='heart' onClick={props.incrementLike} />
            <p><strong>{props.post.likes} likes</strong></p> */}
            <Likes incrementLike={props.incrementLike} likes={props.post.likes}/>
            <CommentContainer  comments={props.post.comments} />
            {/* {props.post.comments
                ? props.post.comments.map((comment, index) => (
                    <Fragment key={index}>
                        <p><strong>{comment.username}</strong> {comment.text}</p>
                    </Fragment>
                ))
                : null}
            <AddComment />     */}
        </div>
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

