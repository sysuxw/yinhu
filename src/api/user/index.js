import { findUsers, addUser } from './user.controller';
import router from 'koa-router';

const user = router();

user.get('/list', findUsers);
user.put('/add', addUser);

export default user;
