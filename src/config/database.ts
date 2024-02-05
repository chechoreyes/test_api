import { Pool } from 'pg';

export const pool = new Pool({
    user: 'chechoreyes',
    host: 'http://192.168.171.13:5432',
    password: 'Socovesa123',
    database: 'postgres',
    // port: 5432,
});
