<template>
  <el-select v-model="exceptionValue" placeholder="请选择异常类型">
    <el-option label="全部" value=""> </el-option>
    <el-option label="挂失卡离线机器上刷卡" value="1"> </el-option>
    <el-option label="已退卡离线设备上消费" value="2"> </el-option>
  </el-select>
</template>

<script>
export default {
  name: "Exception",
  props: ["value"],
  data() {
    return {
      exceptionValue: this.value
    };
  },
  watch: {
    exceptionValue(val) {
      this.$emit("input", val);
    },
    value(val) {
      this.exceptionValue = this.value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
