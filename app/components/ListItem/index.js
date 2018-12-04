import React from 'react';
import PropTypes from 'prop-types';

function ListItem(props) {
  return (
    <div>
      <div>{props.item}</div>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
