import React, { useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import "./index.css";

const PTable = ({ props, allList }) => {
  const [tempList, setTemplist] = useState(allList);
  const [items, setItems] = useState(allList.slice(0, 5));
  const [activeSort, setActiveSort] = useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");

  const changePages = (page) => {
    console.log(page);
    if (page >= 0 && page < tempList.length ) {
      setActive(page);
      // console.log(tempList.slice(page, page + 5))
      setItems(tempList.slice(page, page + 5));
    }
  };

  const convert = (data) => {
    var dateObj = new Date(data);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var hours = dateObj.getUTCHours();
    var mins = dateObj.getUTCMinutes();
    let newdate = day + "-" + month + "-" + year + " " + hours + ":" + mins;
    return newdate;
  };

  const sort = (name) => {
    // console.log(name, activeSort, tempList[0].name);
    console.log(tempList);
    let temp = tempList;
    if (name === activeSort) {
      temp.sort((a, b) => (a[name] < b[name] ? 1 : -1));
      setActiveSort('')

    } else {
      temp.sort((a, b) => (a[name] < b[name] ? -1 : 1));
      setActiveSort(name)
    }
      setTemplist(temp);
      setItems(temp.slice(active, active + 5));
    
    ;
  };

  const handleChange =  (e) => {
    setName(e.target.value);
    setActive(0)

    if (e.target.value) {
      setTemplist((list) => {
        let temp = allList.filter(
          (item) =>
            item["Device_Type"]
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            item["Device_ID"]
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
        );
        setItems(temp.slice(active, active + 5));
        if (temp.length === 0){
          setItems([{ID: 2, Device_ID: 'Not Found', Device_Type: 'Not Found', Time_Stamp: 'NaN', Location: 'Not Found'}])
        }
        
        return temp;
      });
    } else {
      setTemplist(allList);
      setItems(allList.slice(active, active + 5));
      
    }

    
  };

  return (
    <div className="gpsHeading">
      <h1>GPS Summary</h1>
      <div className="d-flex justify-content-between align-middle mt-5 ">
        <input
          placeholder="Search by DeviceID / Type"
          onChange={handleChange}
          value={name}
          type="text"
          className="border border-light text-center rounded-pill bg-transparent text-white"
        ></input>
        <div className="d-inline-flex  align-middle ">
          <h5 className="mx-5 mt-3">
            {active} -{" "}
            {active + 5 < tempList.length ? active + 5 : tempList.length} of{" "}
            {tempList.length}{" "}
          </h5>

          <button
            previous
            onClick={() => changePages(active - 5)}
            className="navi_button"
          >
            {`❮`}
          </button>

          <button
            className="navi_button"
            onClick={() => changePages(active + 5)}
          >
            {` ❯ `}
          </button>
        </div>
      </div>

      <Table
        responsive
        bordered={false}
        hover
        className="table_main align-middle "
      >
        <thead className=" border-bottom  border-2 border-secondary">
          <tr>
            <th onClick={() => sort("Device_ID")} id="Device_ID">
              Device_ID <span className="arrow">↕️</span>
            </th>
            <th onClick={() => sort("Device_Type")} id="Type">
              Type <span className="arrow">↕️</span>
            </th>
            <th onClick={() => sort("Time_Stamp")}>
              Timestamp <span className="arrow">↕️</span>
            </th>
            <th onClick={() => sort("Location")} id="Location">
              Latest Location <span className="arrow">↕️</span>
            </th>
          </tr>
        </thead>

        <tbody className="table-group-divider table-divider-white">
          {items.map((item) => (
            <tr>
              <td scope="row ">{item.Device_ID}</td>
              <td>{item.Device_Type}</td>
              <td>{convert(item.Time_Stamp)}</td>
              <td>{item.Location}</td>
              <td className="navigate1">
                {(item.Time_Stamp !== 'NaN') && <Link className="navi d-inline-flex " to={`/device/${item.Device_ID}`}>
                  <span
                    className="test d-inline-flex align"
                    data-hover=" See Details "
                  >
                    <h1 className="hovering "> ➞</h1>
                  </span>
                </Link>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PTable;
