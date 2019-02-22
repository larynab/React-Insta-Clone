import React from 'react';

const Likes = props => {
  return [
    <button
      key="derp"
      onClick={props.incrementLike}
    >
    <img id='heart'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G22_Xn-dO5VdXwMVIQDm2KkWad55uNFlbdBHhIILj-JOBHCe' alt='heart' />
    </button>,
    <div key="herp">
      <div>{props.likes}</div>
    </div>
  ];
};

export default Likes;