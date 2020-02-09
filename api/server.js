import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import CarRouter from './cars/router';

const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api/cars', CarRouter);

server.use('/*', (req, res) => {
  return res.status(404).json({ error: 'path not found' });
});

server.use((err, req, res, next) => {
  return res.status(500).json({ error: 'Internal Server Error' });
});

export default server;
