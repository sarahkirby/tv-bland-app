import React from 'react';

 const ShowRating = (props) => {
  const outOfFive = props.rating / 2;
  const ratingRounded = Math.round(outOfFive / 2);
  return (
    <div className="showrating">
      <i className={`showrating__star fa-star fas ${ratingRounded >= 1 ? `` : `o-40`}`} />
      <i className={`showrating__star fa-star fas ${ratingRounded >= 2 ? `` : `o-40`}`} />
      <i className={`showrating__star fa-star fas ${ratingRounded >= 3 ? `` : `o-40`}`} />
      <i className={`showrating__star fa-star fas ${ratingRounded >= 4 ? `` : `o-40`}`} />
      <i className={`showrating__star fa-star fas ${ratingRounded >= 5 ? `` : `o-40`}`} />

      {props.displayNumber &&
        <span>{outOfFive}/5</span>
      }
    </div>
  );
 }

export default ShowRating;
