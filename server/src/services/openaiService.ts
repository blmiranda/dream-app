import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../config/dotenv';

const aiClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export const generateImage = async (prompt: string) => {
  const response = await aiClient.images.generate({
    prompt,
    n: 1,
    size: '1024x1024',
  });
  return response.data[0].url;
};
