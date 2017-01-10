import config from './config';
import configRoutes from './config/routes';
import configDB from './config/db';
import Koa from 'koa';
import configKoa from './config/koa';

const app = new Koa();
app.port = config.port;

configDB();
configKoa(app);
configRoutes(app);

export default app;
