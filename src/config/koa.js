'use strict';

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
        console.log(ctx.request.method, ctx.request.path, ctx.request.body, path.normalize(config.root + '/src/public/index.html'));
        if ('/' == ctx.path) return ctx.body = 'Try GET /package.json';
        await send(ctx, path.normalize(config.root + '/src/public/index.html'));
    });

    app.use((ctx, next) => {
        console.log(ctx.request.method, ctx.request.path, ctx.request.body);
        return next();
    });

    app.on('error', err => console.error(err));

    app.use(morgan(config.logType));
}
