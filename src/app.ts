import * as express from 'express';
import * as logger from 'morgan';
import * as compression from 'compression';
import * as cors from 'cors';

import * as userController from './controllers/users';
import * as openAPIController from './controllers/openapi';

const app = express();
app.use(compression());
app.use(logger('dev'));
app.use(cors());
app.set('port', process.env.PORT || 2015);
app.set('x-powered-by', false);

app.get('/api/v1/users', userController.getAllUsers);
app.get('/api/v1/users/:userId', userController.getUserById);
app.post('/api/v1/users', userController.createUser);
app.get('/api/v1/docs', openAPIController.index);

export default app;
