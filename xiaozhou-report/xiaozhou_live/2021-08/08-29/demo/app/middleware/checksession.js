module.exports = () => {
    return async function(ctx, next) {
     if (ctx.session.testname) {
      await next();
    } else {
       await ctx.redirect("/login");   }
    }
  };

  // 语言是JavaScript
  // 运行环境是node
  // 框架是Egg