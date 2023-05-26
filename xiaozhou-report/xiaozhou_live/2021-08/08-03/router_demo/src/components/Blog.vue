<template>
  <h1>博客详情:{{ $route.params.id }}</h1>
  <p>
    {{blogContent}}
  </p>
</template>

<script>
export default {
  data(){
    return {
      blogContent:""
    }
  },
  created(){
    let id = this.$route.params.id;
    this.getBlogDataById(id);
  },
  methods: {
    getBlogDataById(id){
      switch(id){
        case "1":this.blogContent = "切图必备技能";break;
        case "2":this.blogContent = "JavaScript很重要";break;
        case "3":this.blogContent = "node是前端开发的运行环境";break;
        case "4":this.blogContent = "前后台数据交互";break;
        case "5":this.blogContent = "组件化模块化开发";break;
      }
    }
  }
};
</script>