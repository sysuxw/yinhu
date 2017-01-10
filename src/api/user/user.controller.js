import UserDao from '../../dao/user.dao';

export async function list(ctx, next) {
    try {
        const users = await UserDao.list();
        ctx.status = 200;
        ctx.body = users;
        await next();
    } catch (err) {
        ctx.status = 500;
        ctx.body = err;
    }
}

export async function addUser(ctx, next) {
    const user = await UserDao.addUser(ctx);
    ctx.status = 200;
    ctx.body = party;
    await next();
}
