import DB from "./db.config.js";

async function deviceData(data) {
  const [result] = await DB.query(
    `SELECT * FROM gps_locations 
      where  Device_ID = ?`,
    [data]
  );
  console.log(result);
  return result;
}

async function allData() {
  const [result] = await DB.query(`SELECT * FROM gps_locations; `);
  return result;
}

export { deviceData, allData };
