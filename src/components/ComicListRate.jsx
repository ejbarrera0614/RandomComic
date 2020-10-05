import React from "react";
import RateStars from "./RateStars";

const ComicListRate = ({ listComicRated }) => {
  return (
    <>
      {listComicRated.map(({ num, title, rate, img, alt }, index) => {
        return (
          <div key={num} className="itemListComic">
            <img src={img} alt={alt} />
            <RateStars className="clasificado" rate={rate} num={index+1} />
          </div>
        );
      })}
    </>
  );
};

export default ComicListRate;
