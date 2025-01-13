import { Application } from 'express';
import routes from '../routes';

export const setupRoutes = (app: Application) => {
  routes.forEach((route) => {
    app.use(route.path, route.handler);
  });

  app.use((_, res) => {
    res.status(404).send({ error: 'Route not found' });
  });
};
