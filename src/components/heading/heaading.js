import React from "react";
import "/heading.css";

const Heading = () => (
 <nav className="heading">
   <div className="sticky-top">
    <a id="clickyGame" href="/">
     <ul>
     <li>
     <h4> <strong> The Clicky Game </strong> </h4>
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
)};

export default Heading;
