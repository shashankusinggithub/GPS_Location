import React from "react";
import { Link } from "react-router-dom";
import img from '../../images/pngegg.png'

const Error = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          
          <img src={img} />
        </div>
        <Link to={'./'}><h1 >Homepage</h1></Link>
      </div>
    </div>
  );
};

export default Error;
