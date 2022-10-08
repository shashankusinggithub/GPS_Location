import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/RingLoader";
import "./index.css";
import PTable from "./PTable";


const Main = () => {
  const token = localStorage.getItem("token");
  const headers = {
    authorization: token,
  };

  const [tempList, setTemplist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0)


  const override: CSSProperties = {
    display: "block",
    margin: "30vh",
    borderColor: "red",
    
  };

  useEffect(() => {
    setLoading(true);
    
        setTimeout(() => {
          setLoading(false)
        }, 2000);
        
  }, []);

  return loading ?
  <div className='loading'>

    
    <h1>Hold on Page is Loading...</h1>
    <PacmanLoader color={'red'} loading={loading} className='loading'
  css={override} size={500} >
  </PacmanLoader>  
  </div>:
     ( <div className="maincontainer">
        {!loading && <PTable allList={tempList} counter={count} setLoading={setLoading} />}
      </div>
  );
};

export default Main;
