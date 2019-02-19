import React from 'react';
import './CommentSection.css';

function CommentSection(props) {
    return (
        <div>
            <form className='addcomment'>
                <input 
                    type='text'
                    placeholder='Add a comment...'
                />
            </form>
        </div>
    );
};

export default CommentSection;