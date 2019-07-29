import React from 'react';

 const ShowInfo = (props) => (
  <div className="showinfo">
    <h2>Show Info</h2>

    <ul className="showinfo__list">
      {props.network &&
        <li className="showinfo_item">
          <h4 className="showinfo__title">Streamed on</h4>
          <span className="showinfo__content">
            <a
              href={props.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {props.network.name}
            </a>
          </span>
        </li>
      }

      {props.schedule &&
        <li className="showinfo_item">
          <h4 className="showinfo__title">Schedule</h4>
          <span className="showinfo__content">
            {props.schedule.days.length > 1
              ? props.schedule.days.join(', ')
              : `${props.schedule.days}s`
            }
          </span>
        </li>
      }

      {props.status &&
        <li className="showinfo_item">
          <h4 className="showinfo__title">Status</h4>
          <span className="showinfo__content">{props.status}</span>
        </li>
      }

      {props.genres && props.genres.length > 0 &&
        <li className="showinfo_item">
          <h4 className="showinfo__title">Genres</h4>
          <span className="showinfo__content">
            {props.genres.join(', ')}
          </span>
        </li>
      }
    </ul>
  </div>
);

export default ShowInfo;
