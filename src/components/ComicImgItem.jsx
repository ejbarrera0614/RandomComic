import React from "react";
import PropTypes from "prop-types";

const ComicImgItem = ({ img, alt }) => {
  return (
    <div>
      <img src={img} alt={alt} />
    </div>
  );
};

ComicImgItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ComicImgItem;
