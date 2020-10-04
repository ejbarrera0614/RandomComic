import React, { useEffect, useState } from "react";
import { getRandomComic } from "../helpers/getRandomComic";
import ComicImgItem from "./ComicImgItem";

const ComicContainer = () => {
  const [comic, setComic] = useState({
    title: "",
    img: "",
    alt: "",
  });

  useEffect(() => {
    getRandomComic(1).then((comic) => {
      comic && setComic(comic);
    });
  }, []);

  return (
    <div>
      <h2>{comic?.title}</h2>
      <ComicImgItem {...comic} />
    </div>
  );
};

export default ComicContainer;
