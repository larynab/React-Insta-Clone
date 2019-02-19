import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className='post-card'>
            <p><img id='thumbnail' src={props.post.thumbnailUrl} alt={props.post.username} />{props.post.username}</p>
            <img src={props.post.imageUrl} alt={props.post.username} />
            <CommentSection />
        </div>
    );
};

export default PostContainer; 