import UserDao from '../../dao/user.dao';

export async function findUsers(ctx, next) {
    try {
        const users = await UserDao.find();
        ctx.body = users;
        await next();
    } catch (err) {
        ctx.code = -1;
        ctx.body = err;
    }
}

export async function addUser(ctx, next) {
    let body = ctx.request.body;
    const telephone = body.telephone;
    let user = await UserDao.findOne({ telephone });
    if (user === null) {
        Object.assign(body, { create_date: Date.now() });
        user = await UserDao.addUser(body);
    } else {
        ctx.code = 1;
    }
    ctx.body = user;
    await next();
}
