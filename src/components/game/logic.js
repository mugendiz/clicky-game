
import React from "react";

const Container = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.handleIncrement(props.id)} alt={props.name} src={props.image} />
    </div>
   </div>

);

export default Container;
