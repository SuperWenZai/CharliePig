<!-- 报错页面 Error.vue -->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Error : 404'
            }
        }
    }
</script>
<style lang="less" type="text/less" scoped>
  h1{
    margin-top: 5rem;
    text-align: center;
  }
</style>
