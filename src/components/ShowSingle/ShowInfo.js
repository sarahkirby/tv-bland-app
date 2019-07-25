import React from 'react';

 const ShowInfo = (props) => (
  <div className="showinfo">
    <h2>Show Info</h2>

    {props.network &&
      <a
        href={props.officialSite}
        target="_blank"
        rel="noopener noreferrer"
      >
      <p>{props.network.name}</p>
      </a>
    }

    {props.schedule &&
      <div>
        {props.schedule.days.map((day, index) =>
          <div key={index}>
            <ul>
              <li>{day}</li>
            </ul>
          </div>
        )}
      </div>
    }
    
    <p>{props.status}</p>

    <p>{props.genres}</p>
  </div>
 );

export default ShowInfo;
