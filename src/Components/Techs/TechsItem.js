// kit abuat techs.map(tech.firstname tech.lastname ) sebagai component terpisah hanya disini dimasukan propsnya
//tech dimasukan sbgai props

import React from 'react';
import PropTypes from 'prop-types';

function TechsItem({ tech }) {
  return (
    <div>
      <li className='collection-item'>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </li>
    </div>
  );
}

TechsItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechsItem;
