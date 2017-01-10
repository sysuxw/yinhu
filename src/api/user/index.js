import { list, addUser } from './user.controller';
import router from 'koa-router';

const user = router();

user.get('/list', list);
user.post('/add', addUser);

export default user;
