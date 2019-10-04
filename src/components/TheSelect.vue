<template>
  <div class="select-wrapper">
    <el-select v-model="val" :name="name" :placeholder="placeholder">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        default: ''
      },
      options: {
        default: () => {
          return [
            { value: 1, label: 1  },
            { value: 2, label: 2  },
            { value: 3, label: 3  },
            { value: 4, label: 4  },
          ]
        }
      },
      placeholder: {
        default: 'Custom select'
      },
      name: {
        default: 'select-name'
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
  .el-select .el-input.is-focus .el-input__inner {
    border-color: $primary-color;
  }
  .el-select .el-input__inner:focus {
    border-color: $primary-color;
  }
  .el-select-dropdown__item.selected {
    color: $primary-color;
  }
  .select-wrapper {}
</style>