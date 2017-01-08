import { joinParty } from './join.model';

export async function join(ctx, next) {

  let data = await joinParty();
  ctx.status = 200;
  ctx.body = data;
  await next();
}
