import PartyDao from '../../dao/party.dao';
import UserDao from '../../dao/user.dao';

export async function list(ctx, next) {
    const parties = await PartyDao.list(ctx);
    ctx.status = 200;
    ctx.body = parties;
    await next();
}

export async function join(ctx, next) {
    const user = await UserDao.addUser(ctx);
    const party = await PartyDao.joinParty([user]);
    ctx.status = 200;
    ctx.body = party;
    await next();
}
