import React from 'react';
import {Link} from 'react-router-dom';
import ShowRating from 'components/ShowRating/ShowRating';

class ShowList extends React.Component {
  state = {
    showList: [],
  }

  componentDidMount() {
    this.fetchShowList();
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

  render() {
    const {showList} = this.state;
    return (
      <section className="showlist l-container">
        {showList.map(({id, name, image, rating}, index) => {
          const pathname = name.replace(/\W+/g, '-').toLowerCase();
          return (
            <Link
              to={{
                pathname: `/show/${pathname}`,
                state: {id}
              }}
              key={index}
              className="showlist__item"
            >
              <div className="showlist__image-wrapper">
                {image &&
                  <img
                    src={image.original}
                    alt={name}
                    className="showlist__image"
                  />
                }
              </div>

              {rating &&
                <ShowRating rating={rating.average} />
              }

              <h4 className="showlist__title">{name}</h4>
            </Link>
          );
        })}
      </section>
    );
  }
}

export default ShowList;
