import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import './PostContainer.css';
import AddComment from "../CommentSection/AddComment";
import CommentContainer from '../CommentSection/CommentContainer';

function PostContainer(props) {
    return (
        <div className='post-card'>
            <p><img id='thumbnail' src={props.post.thumbnailUrl} alt={props.post.username} /><strong>{props.post.username}</strong></p>
            <img src={props.post.imageUrl} alt={props.post.username} />
            <p><strong>{props.post.likes} likes</strong></p>     
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

