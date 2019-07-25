import React from 'react';

 const ShowRating = (props) => {
  const outOfFive = props.rating / 2;
  const ratingRounded = Math.round(outOfFive / 2);
  return (
    <div className={`showrating ${props.color ? props.color : ''}`}>
      <i className={`showrating__star fa-star ${ratingRounded >= 1 ? `fas` : `far o-40`}`} />
      <i className={`showrating__star fa-star ${ratingRounded >= 2 ? `fas` : `far o-40`}`} />
      <i className={`showrating__star fa-star ${ratingRounded >= 3 ? `fas` : `far o-40`}`} />
      <i className={`showrating__star fa-star ${ratingRounded >= 4 ? `fas` : `far o-40`}`} />
      <i className={`showrating__star fa-star ${ratingRounded >= 5 ? `fas` : `far o-40`}`} />

      {props.displayNumber &&
        <span className="showrating__text">
          {outOfFive}/5
        </span>
      }
    </div>
  );
 }

export default ShowRating;
