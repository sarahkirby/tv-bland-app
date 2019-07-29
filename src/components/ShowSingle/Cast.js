import React from 'react';

 const Cast = (props) => (
  <div className="cast">
    {props.cast.length > 0 &&
      <div>
        <h2>Starring</h2>

        <ul className="cast__list">
          {props.cast.map((person, index) =>
            <li
              key={index}
              className="cast__item"
            >
              <div className="image-circle__wrapper">
                <img
                  src={person.cast.person.image.medium}
                  alt={person.cast.person.name}
                  className="cast__image image-circle__image"
                />
              </div>

              <div className="cast__info">
                <h4 className="cast__actor">
                  {person.cast.person.name}
                </h4>

                <h5 className="cast__character font--reg">
                  {person.cast.character.name.split(" ")[0]}
                </h5>
              </div>
            </li>
          )}
        </ul>
      </div>
    }
  </div>
 );

export default Cast;