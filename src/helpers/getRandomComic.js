export const getRandomComic = async (randomID) => {
  try {
    const url = `http://xkcd.com/${randomID}/info.0.json`;

    const resp = await fetch(url, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(false)
  }
  //const comic = await resp.json();
};
