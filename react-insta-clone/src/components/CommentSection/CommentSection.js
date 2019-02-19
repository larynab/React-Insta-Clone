import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <form className='addcomment'>
            <input 
                type='text'
                placeholder='Add a comment...'
            />
        </form>
    );
};

export default CommentSection;