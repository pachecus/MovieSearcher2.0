const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'MovieSearcher',
    password: '',
    port: '5432',
});
