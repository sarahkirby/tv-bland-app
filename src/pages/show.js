import React from 'react';
import ShowSingle from 'components/ShowSingle/ShowSingle';

 const Show = (props) => (
  <div className="show">
    <ShowSingle showId={props.location.state.id} />
  </div>
 );

export default Show;
