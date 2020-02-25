<template>
  <div class="form-item-wrap">
    <div class="form-label" :style="{ width: labelWidth }" v-if="label">
      {{ label }}
    </div>
    <div class="form-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "myFormItem",
  props: {
    labelWidth: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.form-item-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  .form-label {
    color: #323233;
    width: 50px;
  }
  .form-content {
    overflow: hidden;
  }
}
</style>
