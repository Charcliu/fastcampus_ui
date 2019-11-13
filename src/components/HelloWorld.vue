<template>
  <div class="hello">
    <Banner></Banner>
    <el-form>
      <TimeSelect label="消费时间" :startTime.sync="showStartTime" :endTime.sync="showEndTime"></TimeSelect>
    </el-form>
  </div>
</template>

<script>
import Banner from "@/packages/Banner/src/Banner";
import TimeSelect from "@/packages/TimeSelect/src/TimeSelect";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      showStartTime: "",
      showEndTime: ""
    };
  },
  computed: {
    readlyStartTime() {
      return new Date(this.showStartTime).toLocaleString();
    },
    readlyEndTime() {
      return new Date(this.showEndTime).toLocaleString();
    }
  },
  components: {
    Banner,
    TimeSelect
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
