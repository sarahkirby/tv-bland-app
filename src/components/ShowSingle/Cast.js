import React from 'react';

 const Cast = (props) => (
  <div className="cast">
    <h2>Starring</h2>
    {props.cast.map((person, index) =>
      <div key={index}>
        {person.cast.person.name}&nbsp;
        {person.cast.character.name.split(" ")[0]}
      </div>
    )}
  </div>
 );

export default Cast;