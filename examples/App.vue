<template>
  <div id="app">
    <div class="row">
      <myButton>按钮</myButton>
      <myButton type="default" icon="icon-shoucang">按钮</myButton>
      <myButton type="primary" icon="icon-shoucang">按钮</myButton>
      <myButton type="info" icon="icon-shoucang">按钮</myButton>
      <myButton type="warning" icon="icon-shoucang">按钮</myButton>
      <myButton type="danger" icon="icon-shoucang">按钮</myButton>
    </div>
    <div class="row">
      <myButton round>按钮</myButton>
      <myButton type="default" round>按钮</myButton>
      <myButton type="primary" round>按钮</myButton>
      <myButton type="info" round>按钮</myButton>
      <myButton type="warning" round>按钮</myButton>
      <myButton type="danger" round>按钮</myButton>
    </div>
    <div class="row">
      <myButton round>按钮</myButton>
      <myButton type="default" round circle>钮</myButton>
      <myButton type="primary" round circle>钮</myButton>
      <myButton type="info" round circle>钮</myButton>
      <myButton type="warning" round circle>钮</myButton>
      <myButton type="danger" round circle>钮</myButton>
    </div>
    <div class="row">
      <myButton disabled round>按钮</myButton>
      <myButton
        disabled
        type="default"
        round
        circle
        icon="icon-shoucang"
      ></myButton>
      <myButton
        disabled
        type="primary"
        round
        circle
        icon="icon-shoucang"
      ></myButton>
      <myButton
        disabled
        type="info"
        round
        circle
        icon="icon-shoucang"
      ></myButton>
      <myButton
        disabled
        type="warning"
        round
        circle
        icon="icon-shoucang"
      ></myButton>
      <myButton
        disabled
        type="danger"
        @click="handleBtn"
        round
        circle
        icon="icon-shoucang"
      ></myButton>
    </div>
    <div class="row">
      <button
        @click="
          () => {
            this.visiable = true;
          }
        "
      >
        模态框
      </button>
      <myDialog
        clickOverlay
        v-if="visiable"
        @confirm="confirm"
        @cancel="cancel"
        :visiable.sync="visiable"
        title="标题"
        isClose
        content="确定要删除吗？请认真阅读"
      >
        <template v-slot:title>
          <span>请选择</span>
        </template>
        <template>
          <p>哈哈哈，请先确认？</p>
        </template>
        <!-- <template v-slot:footer>
          <myButton type='primary'>确认</myButton>
          <myButton type='danger'>取消</myButton>
        </template> -->
      </myDialog>
    </div>
    <div class="row">
      <myInput
        type="text"
        noBorder
        placeHoder="请输入"
        :InputStyle="InputStyle"
        v-model="num"
        isIcon
      />
      <p>{{ num }}</p>
    </div>
    <div class="row">
      <mySwitch
        name="switch"
        openText="关"
        closeText="开"
        v-model="flag"
        unActivBg="red"
        activeBg="blue"
      ></mySwitch>
    </div>
    <div class="row">
      <myRadio label="1" v-model="radioFlag" name="men">男</myRadio>
      <myRadio label="2" v-model="radioFlag">女</myRadio>
    </div>
    <div class="row">
      <myRadioGroup v-model="radioGroupFlag">
        <myRadio label="1" name="men">男</myRadio>
        <myRadio label="2">女</myRadio>
      </myRadioGroup>
    </div>
    <div class="row">
      <myCheckBox name="checkBox" v-model="checked">选择</myCheckBox>
    </div>
    <div class="row">
      <myCheckBoxGroup v-model="myCheckBoxGroupFlag">
        <myCheckBox name="checkBox1">选择1</myCheckBox>
        <myCheckBox name="checkBox2">选择2</myCheckBox>
      </myCheckBoxGroup>
    </div>
    <div class="row row-2">
      <myForm :dataModel="dataModel">
        <myFormItem label="姓名">
          <myCheckBoxGroup v-model="dataModel.userName">
            <myCheckBox name="checkBox1">选择1</myCheckBox>
            <myCheckBox name="checkBox2" :styleCheckBox="styleCheckBox"
              >选择2</myCheckBox
            >
          </myCheckBoxGroup>
        </myFormItem>
        <myFormItem label="年龄">
          <myInput
            type="text"
            noBorder
            placeHoder="请输入"
            :InputStyle="InputStyle"
            v-model="dataModel.age"
            isIcon
          />
        </myFormItem>
        <div class="row-btn">
          <myButton block type="primary" @click="submit">提交</myButton>
        </div>
      </myForm>
    </div>
  </div>
</template>

<script>
/*
  .sync 修饰符
    适用场景：
        当子组件想要单纯的改变父组件中的数据并且这个数据传递给了子组件，就可以通过.sync
        进行操作，不需要父组件再使用$on进行监听子组件的事件派发
*/
export default {
  data() {
    return {
      visiable: false,
      InputStyle: {
        "border-bottom": "none",
        "border-radius": "0"
      },
      num: 44,
      flag: false,
      radioFlag: "1",
      radioGroupFlag: "1",
      checked: false,
      myCheckBoxGroupFlag: ["checkBox1"],
      dataModel: {
        userName: [],
        age: ""
      },
      styleCheckBox: { marginLeft: "8px" }
    };
  },
  components: {},
  methods: {
    handleBtn() {
      console.log(333);
    },
    confirm() {
      console.log(88);
    },
    cancel() {},
    submit() {
      console.log(this.dataModel);
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 50px;
}
.row-2 {
  width: 260px;
}
.row-btn {
  margin-top: 10px;
  width: 100%;
}
</style>
