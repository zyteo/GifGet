import React from "react";

function Fav(props) {
  return <a className="fav" href={props.title}>{props.title}</a>;
}

export default Fav;
