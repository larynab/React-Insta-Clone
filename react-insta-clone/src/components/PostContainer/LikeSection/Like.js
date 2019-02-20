import React from 'react';

const Like = props => {

//   return [
//     <div
//       className="like-section"
//       key="likes-icons-container"
//       onClick={props.incrementLike}
//     >
//       <div className="like-section-wrapper">
//         <i className="far fa-heart" />
//       </div>
//       <div className="like-section-wrapper">
//         <i className="far fa-comment" />
//       </div>
//     </div>,
//     <div className="like-section" key="likes-container">
//       <div className="like-section-wrapper">{props.likes}</div>
//     </div>
//   ];
// };

  return (
    <div>
      <button onClick={props.incrementLike}><img id='heart'  src='https://heartbreaktriage.com/wp-content/uploads/gold-heart-icon-how-to-heal-a-broken-heart.png' alt='heart'  /></button>
      <p><strong>{props.likes} likes</strong></p>
    </div>
  );
};

export default Like;