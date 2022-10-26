const { Pool, Client } = require('pg')
const pgformat = require('pg-format')

const pool = new Pool({
  user: 'vidi',
  host: 'localhost',
  database: 'people_gate',
  password: 'vidi',
  port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
  // console.log(err, res)
  pool.end()
})

const text = "SELECT * FROM ticket"
const values = [
  ['{"id_sales": 67327, "id_user": 358, "visit_datetime": "2022-09-07T16:36:40Z", "id_merchant": 54, "sale_address": "54722144220907163643", "ticket_taken": 0, "sale_status": 2, "jumlah": 2}', '67327'],
  ['{"id_sales": 67328, "id_user": 358, "visit_datetime": "2022-09-07T16:36:56Z", "id_merchant": 54, "sale_address": "54722145220907163658", "ticket_taken": 0, "sale_status": 2, "jumlah": 2}', '67328'],
  ['{"id_sales": 67329, "id_user": 358, "visit_datetime": "2022-09-07T16:37:13Z", "id_merchant": 54, "sale_address": "54722146220907163717", "ticket_taken": 0, "sale_status": 2, "jumlah": 2}', '67329'],
  ['{"id_sales": 67330, "id_user": 358, "visit_datetime": "2022-09-07T16:37:21Z", "id_merchant": 54, "sale_address": "54722147220907163724", "ticket_taken": 0, "sale_status": 2, "jumlah": 2}', '67330'],
  ['{"id_sales": 67331, "id_user": 358, "visit_datetime": "2022-09-07T16:37:29Z", "id_merchant": 54, "sale_address": "54722148220907163732", "ticket_taken": 0, "sale_status": 2, "jumlah": 1}', '67331']
]

const format = pgformat("INSERT INTO scanned_ticket(data, id_sales) VALUES %L RETURNING *", values)
console.log('format >> ', format); 
pool.query(format, (err, result) => {
      if (err) {
        console.error('err> ', err);
      }
      console.log('res > ', result.rowCount);
    })


// for (let iteration of values) {
//   console.log(iteration);
//   pool.query(pgformat("INSERT INTO scanned_ticket(data, id_sales) VALUES %L", iteration), (err, result) => {
//     if (err) {
//       console.error('err> ', err);
//     }
//     console.log('res > ', result);
//   })
// }


// const result = pool.query(query)
// console.log('result >> ', result);
// pool.query(text , (err, res) => {
//   if (err) {
//     console.error('error', err);
//   }
//   console.log('res > ', res.rows);
// })


// pool
//   .query(text)
//   .then(res => {
//     console.log('response >> ', res.rows);
//   })
//   .catch(err => {
//     console.error('err > ', err)
//   })



// const client = new Client({
//   user: 'dbuser',
//   host: 'database.server.com',
//   database: 'mydb',
//   password: 'secretpassword',
//   port: 3211,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })


/**
 * [
  `('{"id_sales": 67327, "id_user": 358, "visit_datetime": "2022-09-07T16:36:40Z", "id_merchant": 54, "sale_address": "54722144220907163643", "ticket_taken": 0, "sale_status": 2, "jumlah": 2}', '67327')`,
  `('{"id_sales": 67328, "id_user": 358, "visit_datetime": "2022-09-07T16:36:56Z", "id_merchant": 54, "sale_address": "54722145220907163658", "ticket_taken": 0, "sale_status": 2, "jumlah": 2}', '67328')`,
  `('{"id_sales": 67329, "id_user": 358, "visit_datetime": "2022-09-07T16:37:13Z", "id_merchant": 54, "sale_address": "54722146220907163717", "ticket_taken": 0, "sale_status": 2, "jumlah": 2}', '67329')`,
  `('{"id_sales": 67330, "id_user": 358, "visit_datetime": "2022-09-07T16:37:21Z", "id_merchant": 54, "sale_address": "54722147220907163724", "ticket_taken": 0, "sale_status": 2, "jumlah": 2}', '67330')`,
  `('{"id_sales": 67331, "id_user": 358, "visit_datetime": "2022-09-07T16:37:29Z", "id_merchant": 54, "sale_address": "54722148220907163732", "ticket_taken": 0, "sale_status": 2, "jumlah": 1}', '67331')`
]
 */

