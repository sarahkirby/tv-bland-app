import React from 'react';

 const ShowRating = (props) => {
  const outOfFive = Math.round(props.rating / 2)
  return (
    <div className="showrating">
      <i className={`fa-star ${outOfFive >= 1 ? `fas` : `far`}`} />
      <i className={`fa-star ${outOfFive >= 2 ? `fas` : `far`}`} />
      <i className={`fa-star ${outOfFive >= 3 ? `fas` : `far`}`} />
      <i className={`fa-star ${outOfFive >= 4 ? `fas` : `far`}`} />
      <i className={`fa-star ${outOfFive >= 5 ? `fas` : `far`}`} />
    </div>
  );
 }

export default ShowRating;
