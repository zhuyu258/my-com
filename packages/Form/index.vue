<template>
  <div class="form-wrap">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "myForm",
  props: {
    dataModel: {
      type: Object,
      require: true
    },
    submit: {
      type: Function,
      default: null
    }
  },
  provide() {
    return {
      Form: this
    };
  }
};
</script>
<style lang="scss" scoped>
.form-wrap {
}
</style>
