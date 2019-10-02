<template>
  <div class="input-wrapper">
    <el-input v-model="value" :name="name" :type="type" :placeholder="placeholder"></el-input>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        default: ''
      },
      name: {
        default: 'input-name'
      },
      type: {
        default: 'text'
      },
      placeholder: {
        default: ''
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  @import "../scss/utils/vars";
  .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: $primary-color;
  }
  .input-wrapper {}

</style>