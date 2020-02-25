<template>
  <label class="radio-wrap" @click="handleChange">
    <span
      :class="[
        'radio-box',
        {
          'radio-box-active': this.isGroup
            ? this.radioGroup.value === label
            : value === label
        }
      ]"
    >
      <span class="radio-inner"></span>
      <input
        type="radio"
        :name="name"
        :value="this.isGroup ? this.radioGroup.value : value"
      />
    </span>
    <span class="radio-label">
      <slot></slot>
    </span>
  </label>
</template>
<script>
/*
  provide / inject 注入和依赖
  适用于高阶组件和组件库， 不适用普通程序中
  不是相应的
  祖先级通过provide注入数据，
  子孙级通过inject获取到数据
*/
export default {
  name: "myRadio",
  inject: {
    radioGroup: {
      default: ""
    }
  },
  props: {
    label: {
      type: [String, Number],
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    isGroup() {
      return !!this.radioGroup;
    }
  },
  created() {},
  methods: {
    handleChange() {
      if (this.isGroup) {
        // 是组单选
        this.radioGroup.$emit("input", this.label);
      } else {
        this.$emit("input", this.label);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.radio-wrap {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  .radio-box {
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    text-align: center;
    border: 1px solid #c8c9cc;
    border-radius: 50%;
    position: relative;
    .radio-inner {
      display: inline-block;
      width: 0.5em;
      height: 0.5em;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      margin-top: -0.25em;
      margin-left: -0.25em;
    }
    input {
      display: none;
    }
  }
  .radio-box-active {
    background: #1989fa;
    border-color: transparent;
  }
  .radio-label {
    margin-left: 6px;
    font-size: 16px;
    height: 1.25em;
    display: inline-block;
    line-height: 1.25em;
  }
}
</style>
