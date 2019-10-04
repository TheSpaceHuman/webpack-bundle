<template>
  <div class="input-wrapper">
    <el-input
      v-model="val"
      :name="name"
      :type="type"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      :placeholder="placeholder"
    >
      <slot></slot>
    </el-input>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        default: ''
      },
      prefixIcon: {
        default: ''
      },
      suffixIcon: {
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
      return {
        val: ''
      }
    },
    mounted() {
      this.val = this.$props.value
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