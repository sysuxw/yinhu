/**
 * 在app.use(router)之前调用
 */
import MESSAGE from './MESSAGE';

const Formatter = {
    responseFormatter: async (ctx, next) => {
        // 先去执行路由
        await next();
        if (ctx.body) {
            let code = ctx.code || 0;
            ctx.body = {
                code,
                message: MESSAGE[code],
                data: ctx.body
            };
        }
    }
};

export default Formatter;
