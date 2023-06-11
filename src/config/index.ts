import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const PORT = Number(process.env.PORT) || 3001;
const HOST = process.env.HOST || '127.0.0.1';
const BASE_URL = process.env.BASE_URL;
const AUTHOR_NAME = process.env.AUTHOR_NAME;
const AUTHOR_LASTNAME = process.env.AUTHOR_LASTNAME;

export { PORT, HOST, BASE_URL, AUTHOR_NAME, AUTHOR_LASTNAME };
