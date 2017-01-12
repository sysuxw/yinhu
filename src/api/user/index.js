import { findUsers, addUser } from './user.controller';
import router from 'koa-router';

const user = router();

user.get('/list', findUsers);
user.post('/add', addUser);

export default user;
