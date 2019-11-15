import Exception from "./src/Exception.vue";

/* istanbul ignore next */
Exception.install = function(Vue) {
  console.log("单独安装Exception组件");
  Vue.component(Exception.name, Exception);
};

export default Exception;
