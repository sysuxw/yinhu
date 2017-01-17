import {
    findParties,
    findPartyById,
    addParty,
    updateParty,
    deleteParty,
    joinParty,
    rejectParty
} from './party.controller';

import router from 'koa-router';

const party = router();

party.get('/list', findParties);
party.get('/list/:id', findPartyById);
party.post('/add', addParty);
party.put('/update', updateParty);
party.delete('/delete/:id', deleteParty);

party.post('/join', joinParty);
party.delete('/reject', rejectParty);

export default party;
