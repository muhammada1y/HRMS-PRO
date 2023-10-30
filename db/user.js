const { Pool } = require('pg');
const config = {
    database: 'node_test'
}
const pool = new Pool(config);

module.exports = pool;
