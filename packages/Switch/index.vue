<template>
  <div class="switch-wrap" @click="handleChange">
    <span
      :class="['switch-box', { 'switch-box-active': value }]"
      ref="switchBox"
    >
      <span :class="['switch-btn', { active: value }]">{{
        value ? openText : closeText
      }}</span>
    </span>
    <input type="checkBox" ref="input" :value="value" :name="name" />
  </div>
</template>
<script>
export default {
  name: "mySwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    unActivBg: {
      type: String,
      default: ""
    },
    activeBg: {
      type: String,
      default: ""
    },
    closeText: {
      type: String,
      default: ""
    },
    openText: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$refs.input.checked = this.value;
    this.changeStyle();
  },
  watch: {
    // 1. 监听父级传递的value属性的改变
    value() {
      // console.log(newVal)
      // this.changeStyle()
    }
  },
  methods: {
    // 3. 通过async await等待$emit执行完毕之后再继续往下执行
    async handleChange() {
      // 改变了父级的v-model的属性，但是后面和这个属性有关的操作，需要这个
      // 属性改变了并且传递到了子级后面的操作才能使用改变之后的值， 这里可以使用$nextTick
      // 或者ansyc await函数 或者通过监听Value
      await this.$emit("input", !this.value);
      this.$refs.input.checked = this.value;
      this.changeStyle();

      // 2. 通过$nextTick当子级dom更新完毕之后 获取父级传递过来改变之后的value
      // this.$nextTick().then(()=>{
      //     console.log(this.value)
      //     this.changeStyle()
      // })
    },
    changeStyle() {
      if (this.unActivBg || this.activeBg) {
        !this.value
          ? (this.$refs.switchBox.style.backgroundColor = this.unActivBg)
          : (this.$refs.switchBox.style.backgroundColor = this.activeBg);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.switch-wrap {
  display: inline-flex;
  height: 32px;
  align-items: center;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  input {
    display: none;
  }
  .switch-box {
    width: 62px;
    display: inline-block;
    height: 32px;
    box-sizing: border-box;
    background-color: #fff;
    transition: 0.3s;
    padding: 1px;
    .switch-btn {
      width: 30px;
      height: 30px;
      background-color: #fff;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      transition: 0.3s;
      text-align: center;
      line-height: 30px;
      font-size: 16px;
      box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05),
        0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
    }
    .active {
      transform: translateX(30px);
    }
  }
  .switch-box-active {
    background-color: #1989fa;
  }
}
</style>
