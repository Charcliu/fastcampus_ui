import TimeSelect from "./src/TimeSelect.vue";

/* istanbul ignore next */
TimeSelect.install = function(Vue) {
  console.log("Install TimeSelect");
  Vue.component(TimeSelect.name, TimeSelect);
};

export default TimeSelect;
