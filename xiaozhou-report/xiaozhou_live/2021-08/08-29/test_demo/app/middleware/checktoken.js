module.exports = () => {
    return async function(ctx, next) {
     if (ctx.session.user) {
      await next();
    } else {
       await ctx.redirect("/login");   }
    }
};