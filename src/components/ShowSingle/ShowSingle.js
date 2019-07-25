import React from 'react';
import ShowRating from 'components/ShowRating/ShowRating';

class ShowSingle extends React.Component {
  state = {
    show: [],
    cast: []
  }

  componentDidMount() {
    this.fetchShowInfo();
  }

  fetchShowInfo = () => {
    Promise.all([
      fetch(`http://api.tvmaze.com/shows/${this.props.showId}`),
      fetch(`http://api.tvmaze.com/shows/${this.props.showId}/cast`)
    ]).then(async([showData, castData]) => {
      const show = await showData.json();
      const cast = await castData.json();
      this.setState({
        show,
        cast
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const {name, genres, image, rating, summary,
          status, schedule, network, officialSite} = this.state.show;
    const regex = /(<([^>]+)>)/ig;
    const summaryCleanHTML = summary ? summary.replace(regex, '') : '';
    return (
      <div className="showsingle">
        <p>{name}</p>
        <p>{genres}</p>

        {rating &&
          <ShowRating rating={rating.average} />
        }

        {image &&
          <p>{image.medium}</p>
        }

        {summaryCleanHTML}

        {status}

        {schedule &&
          <div>
            {schedule.days.map((day, index) =>
              <div key={index}>
                <ul>
                  <li>{day}</li>
                </ul>
              </div>
            )}
          </div>
        }

        {network &&
          <a
            href={officialSite}
            target="_blank"
            rel="noopener noreferrer"
          >
          <p>{network.name}</p>
          </a>
        }
      </div>
    );
  }
}

export default ShowSingle;
