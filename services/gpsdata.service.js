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
  await DB.query(`SET sql_mode = 'PAD_CHAR_TO_FULL_LENGTH'`)
  await DB.query(`
  create TEMPORARY table IF NOT EXISTS new_table 
  (select ID, Device_ID,Device_Type, max(Time_Stamp) as "Time_Stamp",Location from gps_locations
  group by Device_ID
  order by Device_ID desc
  );
   `);
   const [result] = await DB.query(`select * from new_table limit 5`)
  const [count] = await DB.query(`SELECT count(ID) FROM new_table; `);
  // await DB.query(`  drop TEMPORARY table new_table; `)
  console.log(result)
  return {result, count:count[0]['count(ID)']};
}

async function searchData(data) {
  await DB.query(`SET sql_mode = 'PAD_CHAR_TO_FULL_LENGTH'`)
  let query = data.data
  let pageStart = data.pageStart
  let order = String(data.order)
  let sorting = String(data.sorting)
  console.log(order, sorting)
  
  await DB.query(`
  create TEMPORARY table IF NOT EXISTS new_table 
  (select ID, Device_ID,Device_Type, max(Time_Stamp) as "Time_Stamp",Location from gps_locations
  where 
  Device_ID like ? or 
  Device_Type  like ? 
  group by Device_ID
  ORDER BY ${order} ${sorting}
  ); `, [query, query]);
   
  const [result] = await DB.query(`select * from new_table limit ?,5`,[pageStart])
  const [count] = await DB.query(`SELECT count(ID) FROM new_table; `);
  // await DB.query(`  drop TEMPORARY table new_table; `)

  console.log(result.at(-1), count[0]['count(ID)'])
  return {result, count:count[0]['count(ID)']};
}

export { deviceData, allData, searchData };
