import * as gpsdata from "../services/gpsdata.service.js";

async function deviceData(req, res, next) {
  try {
    console.log(req.params.id);
    res.json(await gpsdata.deviceData(req.params.id));
  } catch (err) {
    console.error(`Error while fetching ${req.params.id} data`, err.message);
    next(err);
  }
}

async function allData(req, res, next) {
  try {

    res.json(await gpsdata.allData());
  } catch (err) {
    console.error(`Error while fetching gps locations`, err.message);
    next(err);
  }
}

async function searchData(req, res, next) {
  try {
    console.log(req.body.data)
    res.json(await gpsdata.searchData(req.body));
  } catch (err) {
    console.error(`Error while fetching gps locations`, err.message);
    next(err);
  }
}

export { deviceData, allData, searchData };
