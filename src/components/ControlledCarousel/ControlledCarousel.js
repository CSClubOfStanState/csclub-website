import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

import CarouselData from '../../data/CarouselData';

import '../../styles/ControlledCarousel.scss';

const ControlledCarousel = ({ interval }) => {
  const [data] = useState(CarouselData);

  return (
    <div className="slideshow">
      <Carousel interval={interval}>
        {data && data.map((d) => (
          <Carousel.Item className="slideshow-item-wrap" key={d.alt}>
            <img
              key={d.alt}
              className="slideshow-item d-block w-100 h-20"
              src={d.link}
              alt={d.alt}
            />
            {d.caption && (
            <Carousel.Caption className="caption-container">
              <h1 className="slideshow-caption">{d.caption}</h1>
            </Carousel.Caption>
            )}
          </Carousel.Item>

        ))}
      </Carousel>
    </div>
  );
};

ControlledCarousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  interval: PropTypes.number,
};

ControlledCarousel.defaultProps = {
  // eslint-disable-next-line react/forbid-prop-types
  interval: 5000,
};

export default ControlledCarousel;
