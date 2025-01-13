import cors from 'cors';
import express, { Application } from 'express';

export const setupMiddlewares = (app: Application) => {
  app.use(cors());
  app.use(express.json());
};
