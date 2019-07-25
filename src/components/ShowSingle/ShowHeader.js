import React from 'react';
import ShowRating from 'components/ShowRating/ShowRating';

 const ShowHeader = (props) => (
  <div className="showheader">
    {props.image &&
      <img src={props.image.medium} alt={props.name} />
    }

    <h1>{props.name}</h1>

    {props.rating &&
      <ShowRating
        rating={props.rating.average}
        displayNumber={true}
      />
    }

    <p>{props.summary}</p>
  </div>
 );

export default ShowHeader;
