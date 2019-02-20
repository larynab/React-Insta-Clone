import React from 'react';
// import './CommentSection.css';


function AddComment(props) {
    return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
    );
};

export default AddComment;