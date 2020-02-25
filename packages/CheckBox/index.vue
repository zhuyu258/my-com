<template>
  <div class="checkBox-wrap" @click="handleChange" :style="styleCheckBox">
    <span :class="['checkBox-box', { 'checkBox-box-active': activeStyle }]">
      <i class="checkBox-inner iconfont icon-duigou"></i>
      <input :name="name" :value="newVal" />
    </span>
    <span class="checkBox-label">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "CheckBox",
  inject: {
    checkBoxGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    styleCheckBox: {
      type: Object,
      default: null
    }
  },
  computed: {
    isGroup() {
      return !!this.checkBoxGroup;
    },
    newVal: {
      get() {
        return this.isGroup ? this.checkBoxGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.checkBoxGroup.$emit("input", val);
        } else {
          this.$emit("input", val);
        }
      }
    },
    activeStyle() {
      // 复选组 查看数组中是否包含此项的name
      return this.isGroup
        ? this.checkBoxGroup.value.includes(this.name)
        : this.value;
    }
  },
  methods: {
    handleChange() {
      if (this.isGroup) {
        if (this.checkBoxGroup.value.includes(this.name)) {
          const newArr = this.checkBoxGroup.value.filter(item => {
            return item !== this.name;
          });
          this.checkBoxGroup.$emit("input", newArr);
        } else {
          this.checkBoxGroup.$emit("input", [
            ...this.checkBoxGroup.value,
            this.name
          ]);
        }
      } else {
        this.$emit("input", !this.value);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.checkBox-wrap {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  .checkBox-box {
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    text-align: center;
    line-height: 1.25em;
    border: 1px solid #c8c9cc;
    position: relative;
    .checkBox-inner {
      color: #fff;
      font-size: 18px;
    }
    input {
      display: none;
    }
  }
  .checkBox-box-active {
    background: #1989fa;
    border-color: transparent;
  }
  .checkBox-label {
    margin-left: 6px;
    font-size: 16px;
    height: 1.25em;
    display: inline-block;
    line-height: 1.25em;
  }
}
</style>
