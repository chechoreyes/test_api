import { Request, Response } from 'express';
import { pool } from '../config/database';
import { QueryResult } from 'pg';

export const getRecuperos = async (req: Request, res: Response) => {
    const response: QueryResult = await pool.query('SELECT * FROM recs');
    console.log('response', response.rows);
};
