<template>
  <div class="counter-wrapper">
    <el-input-number
      :max="max"
      :min="min"
      :name="name"
      v-model="val"></el-input-number>
  </div>
</template>

<script>
  export default {
    props: {
      val: {
        default: 1
      },
      min: {
        default: 1
      },
      max: {
        default: 10
      },
      name: {
        default: 'counter-name'
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  @import "../scss/utils/vars";
  .el-input-number__decrease:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled) {
    border-color: $primary-color;
  }
  .el-input-number__decrease:hover, .el-input-number__increase:hover {
    color: $primary-color;
  }
  .counter-wrapper {}

</style>