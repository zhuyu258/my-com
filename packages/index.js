import myButton from "./Button";
import myDialog from "./Dialog";
import myInput from "./Input";
import mySwitch from "./Switch";
import myRadio from "./Radio";
import myRadioGroup from "./Radio-Group";
import myCheckBox from "./CheckBox";
import myCheckBoxGroup from "./CheckBoxGroup";
import myForm from "./Form";
import myFormItem from "./FormItem";
import "./fonts/iconfont.css";

const components = [
  myButton,
  myDialog,
  myInput,
  mySwitch,
  myRadio,
  myRadioGroup,
  myCheckBox,
  myCheckBoxGroup,
  myForm,
  myFormItem
];

const install = function(Vue) {
  // 全局注册组件
  components.forEach(item => {
    console.log(item.name);
    Vue.component(item.name, item);
  });
};
// 如果直接引入文件，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
