import React from "react";
import PropTypes from "prop-types";

const ComicImgItem = ({ img, alt, title }) => {
  return (
    <>
      {/* <h2>{title}</h2> */}
      <img src={img} alt={alt} />
    </>
  );
};

ComicImgItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ComicImgItem;
