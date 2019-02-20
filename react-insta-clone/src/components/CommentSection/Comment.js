import React from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
  return (
    <div>
      <span><strong>{props.comment.username}</strong> </span>
      <span>{props.comment.text}</span>{' '}
      
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;