<template>
  <div class="dialog-wrap" @click.self="closeBtn">
    <transition name="dialog-fade">
      <div class="dialog-box" v-if="visiableInner">
        <div class="dialog-head" v-if="$slots.title">
          <slot name="title">
            <span>{{ title }}</span>
          </slot>
          <i
            class="iconfont icon-shachu-xue"
            @click.self="closeBtn"
            v-if="isClose"
          ></i>
        </div>
        <div class="dialog-content">
          <slot>{{ content }}</slot>
        </div>
        <div class="dialog-foot" v-if="isFooter">
          <slot name="footer">
            <myButton type="primary" @click="submit">确认</myButton>
            <myButton type="danger" @click="cancel">删除</myButton>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import myButton from "../Button";
/*
  一. 组件插槽
    
    1. 组件中定义插槽
        <slot></slot>
    2. 组件中定义具名插槽
        <slot name="名字"></slot>
    3. 组件中获取当前组件中所有被使用的插槽
        this.$slots
    4. 使用组件中的具名插槽
        <template v-slot:名字>内容</template>

  二. .sync 修饰符
    子组件想要通过$emit直接修改父组件传递来的数据，并且不需要父组件
    通过$on进行监听处理，就的使用sync,子组件中$emit使用的方法：
     this.$emit('随便名称:属性',值)

  三. .self 修饰符
       只有点击它自身的时候才出发事件

  四。 动画
     vue 提供了 transition组件，包裹要动画的元素
     transition有个name属性，用来定义动画
     动画有六个阶段：
       1. name-enter 进入前
       2. name-enter-to 进入阶段
       3. name-enter-active 进入之后
       4. name-leave 离开前
       5. name-leave-to 离开阶段
       6. name-leave-active 离开之后
*/
export default {
  name: "myDialog",
  props: {
    title: {
      type: String,
      default: ""
    },
    isClose: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ""
    },
    isFooter: {
      type: Boolean,
      default: true
    },
    clickOverlay: {
      type: Boolean,
      default: true
    },
    visiable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visiableInner: false
    };
  },
  watch: {},
  components: {
    myButton: myButton
  },
  mounted() {
    this.visiableInner = this.visiable;
  },
  methods: {
    closeBtn() {
      this.visiableInner = false;
      setTimeout(() => {
        this.$emit("update:visiable", false);
      }, 300);
    },
    // 点击确认
    submit(e) {
      this.$emit("confirm", e);
    },
    // 点击删除
    cancel(e) {
      this.visiableInner = false;
      setTimeout(() => {
        this.$emit("update:visiable", false);
      }, 300);
      this.$emit("cancel", e);
    }
  }
};
</script>
<style lang="scss" scoped>
/*
    scoped 会给当前组件模板中的所有的元素添加一个随机属性
    当前scoped中的样式无法修改它之外的其他元素的样式
    如果想要改变可以使用深度选择器
    scss: ::v-deep
    less: /deep/
    css: >>> 
 */
.dialog-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 100;
  .dialog-box {
    position: fixed;
    width: 40%;
    max-width: 400px;
    padding: 20px 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 4px;
    z-index: 101;
    .dialog-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        cursor: pointer;
      }
    }
    .dialog-content {
      margin: 10px 0;
    }
    .dialog-foot {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      button {
        margin-left: 8px;
      }
    }
  }
  // 动画 vue的transition 结合css animation实现动画
  .dialog-fade-enter-active {
    animation: fade 0.3s;
  }
  .dialog-fade-leave-active {
    animation: fade 0.3s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
      margin-top: -50px;
    }
    100% {
      opacity: 1;
      margin-top: 0;
    }
  }
}
</style>
