import React from 'react';

const SaveShow = (props) => (
  <button
    onClick={() => props.addShow(props.show)}
    className="btn btn__blue--ghost"
  >
    Add to list
  </button>
);

export default SaveShow;
