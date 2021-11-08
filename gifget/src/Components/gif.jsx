import React from "react";

function Gif(props) {
  return (
    <div className="gif-row">
      <img src={props.url} alt="..." onClick={props.clickFav}/>
      <footer>Powered By GIPHY. Made with ReactJS. Github code <a className="git" href="https://github.com/zyteo/GifGet" target="_blank">here.</a></footer>
    </div>
  );
}

export default Gif;
