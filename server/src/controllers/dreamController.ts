import { Request, Response } from 'express';
import { generateImage } from '../services/openaiService';

export const createDream = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;

    const imageURL = await generateImage(prompt);
    res.status(200).send({ imageURL });
  } catch (error: any) {
    res.status(500).send({ error: 'Failed to generate image' });
  }
};
