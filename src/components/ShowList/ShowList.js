import React from 'react';
import {Link} from 'react-router-dom';

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
      <div className="showlist">
        {showList.map(({id, name, image, rating}, index) => {
          const pathname = name.replace(/\W+/g, '-').toLowerCase();
          return (
            <Link
              to={{
                pathname: `/show/${pathname}`,
                state: {id}
              }}
              key={index}
            >
              {image &&
                <img src={image.original} alt={name} />
              }
              <h2>{name}</h2>
              {rating &&
                <p>{rating.average}</p>
              }
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ShowList;
