import express from 'express';
import { NextFunction, Request, Response } from 'express';

import * as routes from './routes';
import webRoutes from './routes/web';
import apiRoutes from './routes/api';

const server = express();

server.use(express.json());

// Configure Express to parse incoming JSON data
server.use(express.json());

// Configure routes
routes.register(server);
server.use('/', webRoutes);
server.use('/api', apiRoutes);

export default server;
