import Banner from "./packages/Banner/index";
import TimeSelect from "./packages/TimeSelect/index";

const components = [Banner, TimeSelect];
const version = "0.1.18";

const install = function(Vue) {
  console.log("全局安装fastcampus_ui组件");
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version,
  install
};

export { Banner, TimeSelect };
