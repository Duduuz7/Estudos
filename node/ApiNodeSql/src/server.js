import express from 'express'

import { Router } from 'express';

const routes = Router();

const api = express();

api.use(express.json());
api.use(routes);

api.listen(3000);