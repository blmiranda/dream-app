import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.OPENAI) {
  throw new Error('Missing OPENAI key in environment variables');
}

export const PORT = process.env.PORT || 8080;
export const OPENAI_API_KEY = process.env.OPENAI;
