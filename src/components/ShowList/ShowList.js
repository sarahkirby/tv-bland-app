import React from 'react';
import {Link} from 'react-router-dom';
import ShowRating from 'components/ShowRating/ShowRating';
import SaveShow from 'components/SavedShow/SaveShow';

class ShowList extends React.Component {
  state = {
    showList: [],
    savedItems: [],
    savedShows: [],
  }

  componentDidMount() {
    this.fetchShowList();

    const json = localStorage.getItem("savedShows");
    const shows = JSON.parse(json);
    if (shows) {
      this.setState(() => ({savedShows: shows}));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.savedShows.length !== this.state.savedShows.length) {
      const json = JSON.stringify(this.state.savedShows);
      localStorage.setItem("savedShows", json);
    }
  }

  fetchShowList = () => {
    fetch('http://api.tvmaze.com/schedule?country=US')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          showList: data.map(show => ({
            id: show.show.id,
            name: show.show.name,
            image: show.show.image,
            rating: show.show.rating,
        }))
      });
    });
  }

  addShow = (show) => {
    let currentShows = [...this.state.savedShows];
    currentShows.push(show);
    this.setState({savedShows: currentShows});
  }

  render() {
    const {showList} = this.state;
    return (
      <section className="showlist l-container">
        {showList.map(({id, name, image, rating}, index) => {
          const pathname = name.replace(/\W+/g, '-').toLowerCase();

          return (
            <div key={index}>
              <Link
                to={{
                  pathname: `/show/${pathname}`,
                  state: {id}
                }}
                className="showlist__item"
              >
                <div className="showlist__image-wrapper image-ratio__wrapper">
                  {image &&
                    <img
                      src={image.original}
                      alt={name}
                      className="showlist__image image-ratio__image"
                    />
                  }
                </div>

                {rating &&
                  <ShowRating
                    rating={rating.average}
                    color="font--black"
                  />
                }

                <h4 className="showlist__title">{name}</h4>
              </Link>

              <SaveShow
                show={[name, image]}
                addShow={this.addShow}
              />
            </div>
          );
        })}
      </section>
    );
  }
}

export default ShowList;
