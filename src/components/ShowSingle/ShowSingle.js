import React from 'react';
import ShowHeader from 'components/ShowSingle/ShowHeader';
import ShowInfo from 'components/ShowSingle/ShowInfo';
import Cast from 'components/ShowSingle/Cast';

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
        cast: cast.slice(0, 5).map(person => ({
          cast: person
        }))
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const {name, genres, image, rating, summary,
          status, schedule, network, officialSite} = this.state.show;

    const {cast, show} = this.state;

    const summaryCleanHTML = summary ? summary.replace(/(<([^>]+)>)/ig, '') : '';
    return (
      <div>
        {!show &&
          <h2 className="is-loading">Loading...</h2>
        }

        {show &&
          <div className="showsingle">
            <ShowHeader
              name={name}
              rating={rating}
              image={image}
              summary={summaryCleanHTML}
            />

            <div className="showsingle__content l-container">
              <ShowInfo
                network={network}
                officialSite={officialSite}
                schedule={schedule}
                status={status}
                genres={genres}
              />

              <Cast cast={cast} />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default ShowSingle;
