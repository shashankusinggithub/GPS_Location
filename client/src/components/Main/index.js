import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './index.css'
import axios from 'axios';
import PTable from './PTable';

const Main = () => {

  
  
  const [tempList, setTemplist] = useState([])
  const[loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8080/devices`).then((response) => {
      // setDeviceData(response.data)
      setTemplist(response.data)
      // setItems(response.data.slice(0, 5))
      setLoading(false)
      return 'hi'
    });
  }, []);


  const signout = () => {
    localStorage.clear()
  }



  return (
    <div className='container'>
      <Link to="/login">
        <button type="button" className='signout_btn' onClick={() => signout()}>
          Sign OUT
        </button>
      </Link>

      <div className='maincontainer'>
         {!loading && <PTable allList={tempList}/>}
        </div> 


      {/* </div> */}
    </div>

  )
}

export default Main