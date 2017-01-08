import { join } from './join.controller';
import router from 'koa-router';

const root = router();

root.post('/join', join);

export default root;
