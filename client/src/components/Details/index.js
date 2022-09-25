import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import "./index.css";
import { VictoryPie } from "victory";

const Details = () => {
  const token = localStorage.getItem("token");
  const headers = {
    authorization: token,
  };

  const [deviceData, setDeviceData] = useState([]);
  const [loading, setLoading] = useState([]);

  let { id } = useParams();
  const colors = ["tomato", "orange", "gold", "cyan", "navy"];
  const [maxi, setMaxi] = useState(0);

  const [data, setData] = useState([]);

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

  const signout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/devices/${id}`, { headers })
      .then((response) => {
        console.log(response);
        setDeviceData(response.data);

        return response;
      })
      .then((res) => {
        console.log(res.data);

        let temp = {};
        for (var i = 0; i < res.data.length; i++) {
          let loc = res.data[i].Location in temp;
          if (loc) {
            temp[res.data[i].Location] += 1;
          } else {
            temp[res.data[i].Location] = 1;
          }
        }

        let maxi = 0;

        let data = Object.keys(temp).map((loc, key) => {
          if (maxi < temp[loc]) {
            maxi = temp[loc];
            // console.log(maxi, temp)
          }
          return { x: loc, y: temp[loc], color: colors[key % colors.length] };
        });

        data.sort(function (a, b) {
          var keyA = a.y;
          var keyB = b.y;
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        data.reverse();
        data = data.map((item, key) => ({
          ...item,
          color: colors[key % colors.length],
          key: key,
        }));
        console.log(data);
        setData(data);
        setMaxi(maxi);
        console.log(data, temp);
        setLoading(false);
        return res;
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log(error.response.data);

          if ("jwt" in error.response.data) {
            localStorage.clear();
            window.location = "/";
            console.log("sign out");
          }
        } else if (error.request) {
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }, []);

  return (
    <div className="container_details">
      <div className="maincontainer_details">
        <h1>{id}</h1>
        {!loading && <h1>{deviceData[0].Device_Type}</h1>}
        <div className="d-flex">
          <Table responsive hover className="table_details table align-middle">
            <thead className="table align-middle ">
              <tr>
                <th>Timestamp</th>

                <th>Location</th>
              </tr>
            </thead>

            <tbody className="">
              {deviceData.map((item) => (
                <tr>
                  <td>{convert(item.Time_Stamp)}</td>
                  <td>{item.Location}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="stats d-inline-flex">
            <div className="pie_chart ">
              <VictoryPie
                className="piechart"
                height={600}
                width={600}
                style={{
                  data: {
                    fillOpacity: 0.9,
                    stroke: "white",
                    strokeWidth: 3,
                    width: "20vw",
                  },
                }}
                data={data}
                colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                animate={{
                  duration: 2000,
                }}
                radius={({ datum }) => {
                  let radi = 270 - datum.key * 20;
                  return radi;
                }}
              />
            </div>

            <div className="legend">
              <h4> % Time spent on each location </h4>
              <br></br>
              {data.map((item) => {
                console.log(item);
                return (
                  <div className="d-flex flex-row align-middle label_all ">
                    <div
                      style={{ backgroundColor: item.color }}
                      className="dots mr-3"
                    >
                      {" "}
                    </div>
                    <h1 style={{ color: "white" }} className="ml-2 px-2 lable">
                      {item.x}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
