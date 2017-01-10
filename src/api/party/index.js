import { list, join } from './party.controller';
import router from 'koa-router';

const party = router();

party.get('/list', list);
party.post('/join', join);

export default party;
