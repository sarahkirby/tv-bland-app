import React from 'react';
import ScrollListener from 'components/Helpers/ScrollListener';
import HomeLandingBg from 'assets/images/homelanding-bg.png';

 const HomeLanding = () => (
  <ScrollListener>
    <div className="homelanding" style={{backgroundImage: `url(${HomeLandingBg})`}}>
      <div className="homelanding__overlay l-container">
        <h1
          role="presentation"
          className="homelanding__type-detail font--blue"
        >
          TV BLAND
          <br />
          BLAND TV
        </h1>

        <div className="homelanding__content">
          <h1 className="homelanding__title heading--large">
            <span className="font--blue">TV</span> BLAND
          </h1>

          <h3>TV Show and web series database.</h3>

          <h5 className="o-50 font--reg">
            Create personlised schedules.
            <br />
            Episode guide, cast, crew and character information.
          </h5>
        </div>
      </div>
    </div>
  </ScrollListener>
 );

export default HomeLanding;
