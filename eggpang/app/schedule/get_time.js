const Subscription = require('egg').Subscription;

class GetTime extends Subscription {
    //静态方法
    //返回一个定时任务的内容
    static get schedule() {
            return {
                //时间
                //interval: '3s',
                //时间为2分1秒
                cron: '*/10 * * * * *',
                //类型
                type: 'worker'
            };
        }
        //输出具体方法
        //读取文件，数据，存数据

    async subscribe() {
        // console.log(Date.now())
        console.log('付昌威最帅,每10秒显示一次,哈哈哈');

    }
};
module.exports = GetTime;