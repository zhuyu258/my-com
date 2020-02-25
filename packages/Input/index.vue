<template>
  <div
    :class="['input-wrap', { 'input-no-border': noBorder }]"
    :style="InputStyle"
  >
    <input
      :type="[isPasswd && !eyeflag ? 'password' : type]"
      :placeholder="placeHoder"
      @input="handleInput"
      :value="value"
    />
    <span class="icon" v-if="isIcon">
      <i
        class="iconfont icon-shanchu1"
        v-if="!isPasswd"
        @click="handleClose"
      ></i>
      <i
        class="iconfont icon-ai-eye"
        v-if="isPasswd && !eyeflag"
        @click="handleEye"
      ></i>
      <i
        class="iconfont icon-icon-eye-close"
        v-if="isPasswd && eyeflag"
        @click="handleEye"
      ></i>
    </span>
  </div>
</template>
<script>
/*
    1. 实现v-model
       1. 子组件默认会接收到props中的value
       2. 子组件在input上绑定value并赋值为value
       3. 绑定input事件，通过$emit向父组件派发input事件并且值为e.target.value
*/
export default {
  name: "myInput",
  data() {
    return {
      eyeflag: false
    };
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeHoder: {
      type: String,
      default: ""
    },
    InputStyle: {
      type: Object,
      default: null
    },
    value: null,
    isPasswd: {
      type: Boolean,
      default: false
    },
    isIcon: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handleEye() {
      this.eyeflag = !this.eyeflag;
    },
    handleClose() {
      // 清空
      this.$emit("input", "");
    }
  }
};
</script>
<style lang="scss" scoped>
.input-wrap {
  padding: 4px 0;
  border: 1px solid #ccc;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  input {
    border-radius: 4px;
    box-shadow: none;
    display: block;
    border: none;
    box-sizing: border-box;
    outline: none;
    width: 97%;
  }
  .icon {
    display: inline-block;
    padding-left: 8px;
    cursor: pointer;
  }
}
.input-no-border {
  border: none;
  outline: none;
}
</style>
