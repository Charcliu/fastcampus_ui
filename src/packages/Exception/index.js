import Exception from "./src/Exception.vue";

/* istanbul ignore next */
Exception.install = function(Vue) {
  console.log("Install Exception");
  Vue.component(Exception.name, Exception);
};

export default Exception;
