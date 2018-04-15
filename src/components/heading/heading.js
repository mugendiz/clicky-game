import React from "react";
import "./heading.css";


const Heading = (props) => (
 <nav className="heading">
   <div className="sticky-top">
     <ul>
     <li>
     <a id="clickyGame" href="/"> <h4> <strong> The Clicky Game </strong> </h4> </a>
     </li>
     <li>
     <h4 className="statusBoolean"> {props.value} </h4>
     </li>
     <li>
     <h4 className="scoreUpdate"> {props.value} </h4>
     </li>
     </ul>
   </div>

 </nav>
);

export default Heading;
