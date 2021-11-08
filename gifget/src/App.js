import React, { useEffect, useState } from "react";
import "./App.css";
import Gif from "./Components/gif";
import Fav from "./Components/Fav";

function App() {
  const [gifdata, setGifData] = useState("");
  const [toggle, setToggle] = useState(false);
  // set state for form input
  const [form, setForm] = useState("");
  // This is for the form button
  const [toggle2, setToggle2] = useState(false);
  // this is for fav
  const [fav, setFav] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API}&tag=&rating=g`
    )
      .then((response) => response.json())
      .then((gifdata) => {
        setGifData(gifdata);
      });
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  // this useeffect is for a new random gif, changes after every toggle changes state
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API}&tag=&rating=g`
    )
      .then((response) => response.json())
      .then((gifdata) => {
        setGifData(gifdata);
      });
  }, [toggle]);

  // this useeffect is for gif with search results
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${process.env.REACT_APP_API}&s=` +
        form
    )
      .then((response) => response.json())
      .then((gifdata) => {
        setGifData(gifdata);
      });
  }, [toggle2]);

  const clickFav = (e) => {
    let favURL = e.target.src;
    setFav([...fav, favURL]);
  };

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  // map the favourites
  const allFav = fav.map((ele, index) => {
    return <Fav title={ele} key={index} />;
  });

  return (
    <>
      <div className="App">
        <h1>Gif Get</h1>
        <input
          placeholder="Search for a gif!"
          value={form}
          onChange={handleChange}
        />
        <button onClick={handleToggle2}>Find</button>
        <br />
        <button onClick={handleToggle}>RANDOM GIF</button>
        <Gif url={gifdata?.data?.images?.original?.url} clickFav={clickFav} />
        <div className="favourites">
          <ul>
            Favourites list (Click on your favourite gif!)
            
            {allFav}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
