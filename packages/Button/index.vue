<template>
  <button
    :disabled="disabled"
    @click="handleBtn"
    class="btn"
    :class="[
      `btn-${type}`,
      { 'btn-disabled': disabled, 'btn-round': round, 'btn-circle': circle }
    ]"
    :style="{
      display: block ? 'block' : 'inline-block',
      width: block ? '100%' : ''
    }"
  >
    <i v-if="icon" :class="['iconfont', icon]"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "myButton",
  props: {
    type: {
      // 按钮类型
      default: "default",
      type: String
    },
    round: {
      default: false,
      type: Boolean
    },
    circle: {
      default: false,
      type: Boolean
    },
    icon: {
      default: "",
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    for: {
      default: "",
      type: String
    },
    block: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    handleBtn(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style scoped lang="scss">
.btn {
  cursor: pointer;
  display: inline-block;
  background: none;
  line-height: 1;
  border: 1px solid rgb(194, 194, 194);
  padding: 6px 10px;
  color: rgb(146, 145, 145);
  white-space: nowrap;
  -moz-user-select: -moz-none;
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  border-radius: 4px;
  outline: none;
  &:active {
    background: #ccc;
    border-color: #ccc;
  }
}
.btn-disabled {
  cursor: not-allowed;
  opacity: 0.8;
}
.btn-round {
  border-radius: 15px;
  padding: 8px 10px;
}
.btn-circle {
  border-radius: 50%;
  padding: 8px;
}
.btn-primary {
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #1989fa;
}
.btn-info {
  color: #fff;
  background-color: #07c160;
  border: 1px solid #07c160;
}
.btn-warning {
  color: #fff;
  background-color: #ff976a;
  border: 1px solid #ff976a;
}
.btn-danger {
  color: #fff;
  background-color: #ee0a24;
  border: 1px solid #ee0a24;
}
.iconfont + span {
  margin-left: 4px;
}
</style>
