export const getRandomComic = async (randomID) => {
  try {
    //const url = `http://xkcd.com/${randomID}/info.0.json`;
    const url = `https://xkcd.now.sh/?comic=${randomID}`
    //const url = `https://cors-anywhere.herokuapp.com/https://xkcd.com/${randomID}/info.0.json`;
    //const url = process.env.URL_API.replace('{randomID}', randomID)
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(false);
  }
};
