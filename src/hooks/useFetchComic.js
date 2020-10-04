import { useEffect, useState } from "react";
import { getRandomComic } from "../helpers/getRandomComic";

export const useFetchComic = () => {
  const [state, setState] = useState({
    comic: {},
    isLoading: true,
  });

  useEffect(() => {
    getRandomComic(1).then((comic) => {
      setState({
        comic,
        isLoading: false,
      });
    });
  }, []);

};
