import * as express from 'express';
import * as logger from 'morgan';
import * as compression from 'compression';

import * as userController from './controllers/users';

const app = express();
app.use(compression());
app.use(logger('dev'));
app.set('port', process.env.PORT || 2015);
app.set('x-powered-by', false);

app.get('/api/v1/users', userController.getAllUsers);
app.get('/api/v1/users/:userId', userController.getUserById);
app.post('/api/v1/users', userController.createUser);

export default app;
