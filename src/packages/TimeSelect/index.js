import TimeSelect from "./src/TimeSelect.vue";

/* istanbul ignore next */
TimeSelect.install = function(Vue) {
  console.log("单独安装TimeSelect组件");
  Vue.component(TimeSelect.name, TimeSelect);
};

export default TimeSelect;
