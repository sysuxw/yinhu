'use strict';

import mount from 'koa-mount';
import { root, user, party } from '../api';

export default function configRoutes(app) {
    app.use(mount('/', root.routes()));
    app.use(mount('/user', user.routes()));
    app.use(mount('/party', party.routes()));

  // List Endpoints Here
}
