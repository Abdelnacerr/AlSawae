import React from "react";

import {Link} from "react-router-dom";

function myHeader() {
  return (
    <ul>
        <li>
            <Link to= "/"> Home </Link>
        </li>
        <li>
            <Link to= "/About"> Home </Link>
        </li>
        <li>
            <Link to= "/"> Home </Link>
        </li>
    </ul>
  );
}

export default myHeader;
