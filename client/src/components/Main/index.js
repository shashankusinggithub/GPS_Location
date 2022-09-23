import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Table } from "reactstrap"
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './index.css'
import axios from 'axios';

const Main = () => {

  const [active, setActive] = useState(0)
  const [tempList, setTemplist] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  const [items, setItems] = useState(tempList.slice(0, 5))

  useEffect(() => {
    axios.get(`http://localhost:8080/devices`).then((response) => {
      // setDeviceData(response.data)
      console.log(response.data)
      setTemplist(response.data)
      setItems(response.data.slice(0, 5))
    });
  }, []);
  // let details  = createContext(['jhi', 'ji']);

  const changePages = (page) => {
    console.log(page)
    if (page >= 0 && page < tempList.length + 1) {
      setActive(page)
      console.log(tempList.slice(page, page + 5))
      setItems(tempList.slice(page, page + 5))
    }
  }

  const signout = () => {
    localStorage.clear()
  }
  const handleClick = () => {
    console.log("hi")
  }
  const convert = (data) => {
    var dateObj = new Date(data);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var hours = dateObj.getUTCHours()
    var mins = dateObj.getUTCMinutes()

    let newdate = day + "-" + month + "-" + year + ' ' + hours + ":" + mins;
    return newdate
  }


  return (
    <div className='container'>
      <Link to="/login">
        <button type="button" className='signout_btn' onClick={() => signout()}>
          Sign OUT
        </button>
      </Link>

      <div className='maincontainer'>
        <div className='gpsHeading'>

          <h1 >GPS  Summary</h1>
          <div className='d-flex justify-content-between align-middle mt-5 '>

            <input placeholder='type anything' className='border border-light text-center rounded-pill bg-transparent text-white'></input>
            <div className='d-flex justify-content-center'>

              <h5 className='mx-5'>
                {active} - {active + 5 < tempList.length ? active + 5 : tempList.length} of {tempList.length} </h5>
              <Pagination>
                <PaginationItem >
                  <PaginationLink dark previous
                    onClick={() =>
                      changePages(active - 5)}
                    className='bg-transparent text-white hover btn btn-outline-danger'
                  >
                    {`❮`}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className='  btn btn-outline-danger bg-transparent text-white ' next
                    onClick={() =>
                      changePages(active + 5)}
                  >
                    {` ❯ `}
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </div>

          <Table responsive bordered={false} hover className="table_main align-middle" >
            <thead className=' border-bottom  border-2 border-secondary'>
              <tr>
                <th>
                  Device_ID
                </th>

                <th >
                  Type
                </th>
                <th>
                  Timestamp
                </th>
                <th>
                  Location
                </th>
               
              </tr>
            </thead>

            <tbody className='table-group-divider table-divider-white'>
              {items.map(item => (
                <tr >

                  <td scope="row ">
                    {item.Device_ID}
                  </td>
                  <td>
                    {item.Device_Type}
                  </td>
                  <td>
                    {convert(item.Time_Stamp)}
                  </td>
                  <td>
                    {item.Location}
                  </td>
                  <td className='navigate1'>
                  <Link
                    className="btn btn-primary"
                    to=
                    {`/${item.Device_ID}`}
                    >
                      <h1 className='hovering'>➞</h1>
                  </Link>
                    </td>
                </tr>
              ))}

            </tbody>
          </Table>
        </div>


      </div>
    </div>

  )
}

export default Main