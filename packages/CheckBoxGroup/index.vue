<template>
  <div class="checkBoxGroup">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "CheckBoxGroup",
  props: {
    value: {
      type: Array,
      default: null
    }
  },
  provide() {
    return {
      checkBoxGroup: this
    };
  }
};
</script>
<style lang="scss" scoped>
.checkBoxGroup {
  display: inline-block;
}
</style>
