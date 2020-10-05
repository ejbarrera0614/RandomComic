import React from "react";

const RateStars = ({
  className = "clasificacion",
  setComic,
  rate = -1,
  num = 0,
}) => {
  const handleClick = (e) => {
    const value = e.target.value;
    e.target.checked=false
    setComic((comic) => ({ ...comic, rate: value }));
  };

  return (
    <p className={`${className}`}>
      <input
        id={`radio1${num}`}
        type="radio"
        name={`estrellas${num}`}
        value="5"
        onClick={handleClick}
        defaultChecked={rate === '5' && true}
        disabled={!setComic && true}
      />
      <label htmlFor={`radio1${num}`}>★</label>
      <input
        id={`radio2${num}`}
        type="radio"
        name={`estrellas${num}`}
        value="4"
        onClick={handleClick}
        defaultChecked={rate === '4' && true}
        disabled={!setComic && true}
      />
      <label htmlFor={`radio2${num}`}>★</label>
      <input
        id={`radio3${num}`}
        type="radio"
        name={`estrellas${num}`}
        value="3"
        onClick={handleClick}
        defaultChecked={rate === '3' && true}
        disabled={!setComic && true}
      />
      <label htmlFor={`radio3${num}`}>★</label>
      <input
        id={`radio4${num}`}
        type="radio"
        name={`estrellas${num}`}
        value="2"
        onClick={handleClick}
        defaultChecked={rate === '2' && true}
        disabled={!setComic && true}
      />
      <label htmlFor={`radio4${num}`}>★</label>
      <input
        id={`radio5${num}`}
        type="radio"
        name={`estrellas${num}`}
        value="1"
        onClick={handleClick}
        defaultChecked={rate === '1' && true}
        disabled={!setComic && true}
      />
      <label htmlFor={`radio5${num}`}>★</label>
    </p>
  );
};

export default RateStars;
