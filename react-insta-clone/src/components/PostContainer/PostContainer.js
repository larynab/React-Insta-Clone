import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className='post-card'>
            <img src={props.post.imageUrl} alt={props.post.username} />
            <CommentSection />
        </div>
    );
};

export default PostContainer; 