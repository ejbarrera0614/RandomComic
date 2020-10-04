export const getRandomComic = async (randomID) => {
  try {
    const url = `http://xkcd.com/${randomID}/info.0.json`;

    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(false)
  }
  //const comic = await resp.json();
};
