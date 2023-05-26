function f(numBottles, numExchange) {
  let total = 0, //定义一个喝酒的总数
    empty = 0;   //定义空瓶子的数量
  while (numBottles > 0) { //只要有酒就接着喝
    total += numBottles; //不停的喝
    empty += numBottles; //喝完了产生空瓶子
    numBottles = 0;  //喝完了原酒清零
    if (empty / numExchange >= 1) {
      // 计算能换多少瓶
      numBottles = Math.floor(empty / numExchange)
      // 剩余多少和空瓶
      empty = empty % numExchange;
    }
  }
  return total;
}

console.log(f(9,3))