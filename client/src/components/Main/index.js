import React, { useState, useEffect } from 'react'
import './index.css'
import axios from 'axios';
import PTable from './PTable';

const Main = () => {

  const token = localStorage.getItem("token")
  const headers = {
      authorization: token
  }

  
  
  const [tempList, setTemplist] = useState([])
  const[loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8080/devices`,{headers}).then((response) => {
      setTemplist(response.data)
      setLoading(false)
      return response
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers.pre);
        if ('jwt' in error.response.data){
          localStorage.clear()
          window.location = "/";
        }
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }, []);




  return (
    <div className='container'>
      <div className='maincontainer'>
         {!loading && <PTable allList={tempList}/>}
        </div> 
    </div>
  )
}

export default Main