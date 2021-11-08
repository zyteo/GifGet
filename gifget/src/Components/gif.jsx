import React from "react";

function Gif(props) {
  return (
    <div className="gif-row">
      <img src={props.url} alt="..." onClick={props.clickFav}/>
      <footer>Powered By GIPHY. Made with ReactJS.</footer>
    </div>
  );
}

export default Gif;
