import React, { useEffect, useState } from "react";
import { getRandomComic } from "../helpers/getRandomComic";
import ComicListRate from "./ComicListRate";
import RateStars from "./RateStars";

const ComicContainer = () => {
  const initialValueComic = {
    title: "",
    img: "",
    alt: "",
    num: -1,
    rate: -1,
  };
  const [comic, setComic] = useState(initialValueComic);
  const [listComicRated, setListComicRated] = useState([]);

  useEffect(() => {
    if (comic.rate !== -1) {
      setListComicRated((list) => [...list, comic]);
      setNewComic();
    }
  }, [comic]);

  useEffect(() => {
    setNewComic();
  }, []);

  const setNewComic = () => {
    const randomNum = Math.floor(Math.random() * (2366 - 1) + 1);
    getRandomComic(randomNum).then((comic) => {
      const { title, img, alt, num } = comic;
      comic && setComic({ title, img, alt, num, rate: -1 });
    });
  };

  return (
    <>
      <div className="comicContainer">
        <h2>{comic.title}</h2>
        {comic.img !== "" && (
          <>
            <img src={comic.img} alt={comic.alt} />
            <RateStars setComic={setComic} rate={comic.rate} />
          </>
        )}
      </div>
      <div className="listComicsRated">
        <ComicListRate listComicRated={listComicRated} />
      </div>
    </>
  );
};

export default ComicContainer;
