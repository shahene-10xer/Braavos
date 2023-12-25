// db.js or database.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',     
  host: 'localhost',         
  database: 'iBraavos', 
  password: 'postgres', 
  port: 5432,                
})

// Test Query
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
  });

  
module.exports = pool;