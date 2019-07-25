import React from 'react';

 const ShowRating = (props) => {
  const outOfFive = props.rating / 2;
  const ratingRounded = Math.round(outOfFive / 2);
  return (
    <div className="showrating">
      <i className={`fa-star ${ratingRounded >= 1 ? `fas` : `far`}`} />
      <i className={`fa-star ${ratingRounded >= 2 ? `fas` : `far`}`} />
      <i className={`fa-star ${ratingRounded >= 3 ? `fas` : `far`}`} />
      <i className={`fa-star ${ratingRounded >= 4 ? `fas` : `far`}`} />
      <i className={`fa-star ${ratingRounded >= 5 ? `fas` : `far`}`} />

      {props.displayNumber &&
        <span>{outOfFive}/5</span>
      }
    </div>
  );
 }

export default ShowRating;
