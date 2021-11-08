import React from "react";

function Fav(props) {
  return <a className="fav" href={props.title} target="_blank">{props.title}</a>;
}

export default Fav;
