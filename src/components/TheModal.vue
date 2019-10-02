<template>
  <div class="modal_table">
    <button type="button" class="btn btn-primary" @click="$refs.modal.open()">{{ btnName }}</button>
    <SweetModal ref="modal">
      <slot></slot>
    </SweetModal>
  </div>
</template>

<script>
  import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
  export default {
    name: "TheModal",
    components: {
      SweetModal,
      SweetModalTab
    },
    props:{
      btnName: {
        type: String,
        default: 'Открыть модалку'
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  @import "../scss/utils/vars";
  .modal_table {
    display: inline-block;
    margin-bottom: 20px;
  }
  .sweet-modal .sweet-box-actions .sweet-action-close:hover {
    background-color: $primary-color;
  }
</style>
