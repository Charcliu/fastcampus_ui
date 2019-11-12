import Banner from "./src/Banner.vue";

/* istanbul ignore next */
Banner.install = function(Vue) {
  console.log("单独安装Banner组件");
  Vue.component(Banner.name, Banner);
};

export default Banner;
