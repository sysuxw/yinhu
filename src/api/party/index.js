import { list, join } from './party.controller';
import router from 'koa-router';

const root = router();

root.get('/party/list', list);
root.post('/party/join', join);

export default root;
