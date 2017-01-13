import config from './index';
import morgan from 'koa-morgan';
import parser from 'koa-bodyparser';
import compress from 'koa-compress';
import send from 'koa-send';
import path from 'path';

export default function configKoa(app) {
    app.use(compress());
    app.use(parser({
        strict: false
    }));

    app.use(async (ctx, next) => {
        console.log(ctx.request.method, ctx.request.path, ctx.request.body);
        if (ctx.path.startsWith('/public')) {
            await send(ctx, ctx.path, {
                root: path.normalize(config.root + '/src')
            });
        } else {
            return next();
        }
    });

    app.use((ctx, next) => {
        return next();
    });

    app.on('error', err => console.error(err));

    app.use(morgan(config.logType));
}
