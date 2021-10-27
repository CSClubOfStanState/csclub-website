import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/WordBlock.scss';

function WordBlock({ text, color }) {
  return (
    <div className="word-block">
      <h2 className={color}>
        {text}
      </h2>

      <div className={`gradient-${color}`} />
    </div>
  );
}

WordBlock.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
WordBlock.defaultProps = {
  text: 'default',
  color: 'blue',
};

export default WordBlock;
