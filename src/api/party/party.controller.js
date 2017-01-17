import PartyDao from '../../dao/party.dao';

export async function findParties(ctx, next) {
    const parties = await PartyDao.find();
    ctx.body = parties;
    await next();
}

export async function findPartyById(ctx, next) {
    const party = await PartyDao.findById(ctx.params.id);
    ctx.body = party;
    await next();
}

export async function addParty(ctx, next) {
    let body = ctx.request.body;
    Object.assign(body, { create_date: Date.now() });
    const party = await PartyDao.create(body);
    ctx.body = party;
    await next();
}

export async function deleteParty(ctx, next) {
    const party = await PartyDao.deleteById(ctx.params.id);
    ctx.body = party;
    await next();
}

export async function updateParty(ctx, next) {
    let body = ctx.request.body;
    let id = body.id;
    delete body.id;
    const party = await PartyDao.updateById(id, body);  // 返回的是原来的party，不是更新后的
    ctx.body = party;
    await next();
}

export async function joinParty(ctx, next) {
    const body = ctx.request.body;
    let result = await PartyDao.findJoinParty(body);
    if (result === null) {
        result = await PartyDao.joinParty(body);
    }
    ctx.body = result;
    await next();
}

export async function rejectParty(ctx, next) {
    const body = ctx.request.body;
    result = await PartyDao.deleteJoinParty(body);
    ctx.body = result;
    await next();
}
