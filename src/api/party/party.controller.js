import PartyDao from '../../dao/party';
import UserDao from '../../dao/user';

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
