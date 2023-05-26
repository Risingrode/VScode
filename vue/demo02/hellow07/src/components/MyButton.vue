<template>
    <div>
        <button>
            <!-- 插槽 存在具名插槽和无名插槽 作用就是:占位置 -->
            <!-- 具名插槽：就是有一个name属性 相当于div的class -->
            <!-- 无名插槽：就是没有名字，单纯插入 -->
            <slot>这是无名插槽</slot>
        </button>
    </div>
</template>

<script>

export default{
    props:["text"]
}
</script>
