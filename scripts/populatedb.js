import pg from 'pg';
import fs from 'fs';
import { connectionString } from '../db/connection.js';

const main = async () => {
    const client = new pg.Client({ connectionString });
    try {
        console.log('seeding...');
        const sql = fs.readFileSync('./scripts/relations.sql', {encoding: 'utf8'}, (error) => console.log(error));
        await client.connect();
        await client.query(sql);
        console.log('done');
    } catch (error) {
        console.log(error);
    } finally {
        await client.end();
    }
};

main();