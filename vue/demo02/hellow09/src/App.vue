<template>
  <div id="app">

    <form @submit.prevent="postData">
      <!-- .prevent 表示提交以后不刷新页面 -->
      <input type="text" v-model="fruit">
      <button>添加</button>
    </form>

    <ul>
      <li v-for="(item, index) of fruitList" :key="index">
        {{ item }}
        <button @click="del(index)">删除</button>
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";

export default {
	data() {
    return {
      fruit: "",
      fruitList: [],
    }
  },

  methods: {
    //获取数据
    getFruitList() {
      axios.get("http://127.0.0.1:3000/fruits").then((res) => {
        this.fruitList = res.data;
      });
    },

    //添加数据
    postData() {
      axios
        .post("http://127.0.0.1:3000/fruits", {
          fruit: this.fruit,
        })
        .then(() => {
          this.getFruitList();
        });
    },

    //删除数据
    del(index) {
      axios.delete(`http://127.0.0.1:3000/fruits/${index}`).then(() => {
        this.getFruitList();
      });
    },

    // created() {
    //   this.getFruitList();
    // },
  },
};
</script>

<style>
</style>
