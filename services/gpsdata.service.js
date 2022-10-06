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
  const [result] = await DB.query(`SELECT * FROM gps_locations limit 5; `);
  const [count] = await DB.query(`SELECT count(ID) FROM gps_locations; `);
  return {result, count:count[0]['count(ID)']};
}

async function searchData(data) {
  let query = data.data
  let pageStart = data.pageStart
  let order = String(data.order)
  let sorting = String(data.sorting)
  console.log(order, sorting)

  const [result] = await DB.query(`select *
  from gps_locations where 
  Device_ID like ? or 
  Device_Type  like ? 
  ORDER BY ${order} ${sorting}
  limit ?,5;
  ; `, [query, query, pageStart]);

  const [count] = await DB.query(`select count(ID)
  from gps_locations where 
  Device_ID like ? or 
  Device_Type  like ? ;
  
  `, [query, query]);

  console.log(result.at(-1), count[0]['count(ID)'])
  return {result, count:count[0]['count(ID)']};
}

export { deviceData, allData, searchData };
