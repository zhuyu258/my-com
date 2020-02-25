<template>
  <div class="radio-group-wrap">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "myRadioGroup",
  provide() {
    return {
      radioGroup: this
    };
  },
  props: {
    value: {
      props: [String, Number],
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.radio-group-wrap {
  display: inline-block;
}
</style>
