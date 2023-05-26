function checktoken() {
    return async function(ctx, next) {
        try {
            //验证token
            let token = ctx.header.token;
            ctx.app.jwt.verify(token, ctx.app.config.secret);
            await next();
        } catch (error) {
            ctx.body = {
                code: 40000,
                msg: "token验证失败"
            }

        }
    }
}

module.exports = checktoken