import { config } from 'dotenv';
import { join } from 'path';

config({
  path: __dirname + '/' + join('..', '..', '.env'),
});

export default function (): any {
  return {
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || '',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || '',
    },
  };
}
