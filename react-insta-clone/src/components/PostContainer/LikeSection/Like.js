import React from 'react';

const Like = props => {
  return [
    <button
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
    <img id='heart'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G22_Xn-dO5VdXwMVIQDm2KkWad55uNFlbdBHhIILj-JOBHCe' alt='heart' />
    </button>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  ];

  // return (
  //   <div>
  //     <button onClick={props.incrementLike}><img id='heart'  src='https://heartbreaktriage.com/wp-content/uploads/gold-heart-icon-how-to-heal-a-broken-heart.png' alt='heart'  /></button>
  //     <p><strong>{props.likes} likes</strong></p>
  //   </div>
  // );
};

export default Like;