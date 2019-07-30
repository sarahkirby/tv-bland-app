import React from 'react';
import ShowRating from 'components/ShowRating/ShowRating';
import ScrollListener from 'components/Helpers/ScrollListener';

class ShowHeader extends React.Component {
  state = {
    readMore: false
  }

  readMoreText = e => {
    this.setState({
      readMore: !this.state.readMore
    });
  }
   
  render() {
    const {image, name, rating, summary} = this.props;
    const {readMore} = this.state;

    const maxLength = summary.substr(0, 300);
    const shortSummary = maxLength.substr(0, Math.min(maxLength.length, maxLength.lastIndexOf(" ")));
    return (
      <ScrollListener>
        <div className="showheader">

          {image &&
            <img
              src={image.original}
              alt={name}
              role="presentation"
              className="showheader__bg-image"
            />
          }

          <div className="showheader__wrapper overlay__gradient--black l-container">
            <div className="showheader__visual">
              <div className="image-ratio__wrapper">
                {image &&
                  <img
                    src={image.original}
                    alt={name}
                    className="image-ratio__image"
                  />
                }
              </div>
            </div>

            <div className="showheader__content">
              {rating &&
                <ShowRating
                  rating={rating.average}
                  displayNumber={true}
                  color="font--white"
                />
              }

              <h1 className="showheader__title font--white">
                {name}
              </h1>

              <p className="showheader__summary font--white font--secondary">
                {!readMore &&
                  <span>{shortSummary}...</span>
                }
                {readMore &&
                  <span>{summary}</span>
                }
              </p>

              <button
                onClick={e => this.readMoreText(e)}
                className="showheader__btn btn btn__blue"
              >
                {readMore ? 'Read less' : 'Read more'}
              </button>
            </div>
          </div>
        </div>
      </ScrollListener>
    );
  }
}

export default ShowHeader;
