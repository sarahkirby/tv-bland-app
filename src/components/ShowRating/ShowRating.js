import React from 'react';

const ShowRating = (props) => {
  const outOfFive = props.rating / 2;
  const ratingRounded = Math.round(outOfFive);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={`showrating__star fa-star ${ratingRounded >= i ? `fas` : `far o-40`}`}
      />
    );
  }
  return (
    <div className={`showrating ${props.color ? props.color : ''}`}>
      {stars}
      {props.displayNumber &&
        <span className="showrating__text">
          {outOfFive}/5
        </span>
      }
    </div>
  );
}

export default ShowRating;
