import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

const PTable = ({ props, allList, counter }) => {
  const token = localStorage.getItem("token");
  const headers = {
    authorization: token,
  };

  

  const [items, setItems] = useState(allList);
  const [activeSort, setActiveSort] = useState(""); // active colum active
  const [active, setActive] = useState(0); // pages number
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(counter);
  const [defaultSort, setDefaultSort] = useState("Device_ID");

  const changePages = (page) => {
    console.log(page, items);

    if (page >= 0 && page < count) {
      setActive(page);
      let order = activeSort === "" ? "DESC" : "ASC";
      modify(search, page, defaultSort, order);
    } else {
      return;
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
    console.log(name);
    if (name === activeSort) {
      modify(search, active, name, "DESC");
      setActiveSort("");
    } else {
      modify(search, active, name, "ASC");
      setActiveSort(name);
    }
    setDefaultSort(name);
  };

  const modify = async (data, page, order, sorting) => {
    setActive(page);
    await axios
      .post(
        `http://localhost:8080/devices/search`,
        {
          data: `%${data}%`,
          pageStart: page,
          sorting: sorting,
          order: order,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data.result);
        setItems(res.data.result);
        setCount(res.data.count);

        if (res.data.result.length === 0) {
          setItems([
            {
              ID: 2,
              Device_ID: "Not Found",
              Device_Type: "Not Found",
              Time_Stamp: "NaN",
              Location: "Not Found",
            },
          ]);
        }
      });
  };

  const handleChange = async (e) => {
    setSearch(e.target.value);
    setActive(0);
    if (e.target.value) {
      modify(e.target.value, 0, defaultSort, "ASC");
    } else {
      modify("", 0, defaultSort, "ASC");
    }
  };

  return (
    <div className="gpsHeading">
      <h1>GPS Summary</h1>
      <div className="d-flex justify-content-between align-middle mt-5 ">
        <input
          placeholder="Search by DeviceID / Type"
          onChange={handleChange}
          value={search}
          type="text"
          className="border border-light text-center rounded-pill bg-transparent text-white"
        ></input>
        <div className="d-inline-flex  align-middle ">
          <h5 className="mx-5 mt-3">
            {active} - {active + 5 < count ? active + 5 : count} of {count}{" "}
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
            <th
              onClick={() => sort("Device_ID")}
              id="Device_ID"
              className={defaultSort === "Device_ID" ? "activeHead" : ""}
            >
              Device_ID
              {defaultSort === "Device_ID" &&
                (activeSort === "Device_ID" ? (
                  <span className="arrow">⬇</span>
                ) : (
                  <span className="arrow">⬆</span>
                ))}
            </th>
            <th
              onClick={() => sort("Device_Type")}
              id="Type"
              className={defaultSort === "Device_Type" ? "activeHead" : ""}
            >
              Type
              {defaultSort === "Device_Type" &&
                (activeSort === "Device_Type" ? (
                  <span className="arrow">⬇</span>
                ) : (
                  <span className="arrow">⬆</span>
                ))}
            </th>
            <th
              onClick={() => sort("Time_Stamp")}
              className={defaultSort === "Time_Stamp" ? "activeHead" : ""}
            >
              Timestamp
              {defaultSort === "Time_Stamp" &&
                (activeSort === "Time_Stamp" ? (
                  <span className="arrow">⬇</span>
                ) : (
                  <span className="arrow">⬆</span>
                ))}
            </th>
            <th
              onClick={() => sort("Location")}
              id="Location"
              className={defaultSort === "Location" ? "activeHead" : ""}
            >
              Latest Location
              {defaultSort === "Location" &&
                (activeSort === "Location" ? (
                  <span className="arrow">⬇</span>
                ) : (
                  <span className="arrow">⬆</span>
                ))}
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
                {item.Time_Stamp !== "NaN" && (
                  <Link
                    className="navi d-inline-flex "
                    to={`/device/${item.Device_ID}`}
                  >
                    <span
                      className="test d-inline-flex align-center"
                      data-hover=" See Details "
                    >
                      <h1 className="hovering "> ➞</h1>
                    </span>
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PTable;
