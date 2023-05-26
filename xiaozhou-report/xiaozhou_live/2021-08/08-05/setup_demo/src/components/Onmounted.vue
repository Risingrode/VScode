<template>
  <h1>{{title}}</h1>
</template>

<script>
/* 
  编程语言：JavaScript
  框架：Vue3
  编辑器：vscode
 */
// composition api （组合api）
import { ref, reactive, onMounted } from "vue";
export default {
  setup(){  // created
    const list = [
      "你好",
      "亲爱的用户",
      "很高兴遇见你"
    ]
    const title = ref("")
    onMounted(() => {
      let i = 0;
      let t = setInterval(() => {
        title.value = list[i]
        i++;
        if(i === 3){
          clearInterval(t);
        }
      },500)
    })

    return {
      title
    }
  }
}
</script>
