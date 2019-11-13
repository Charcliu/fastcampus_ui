<template>
  <el-form>
    <el-col :xs="24" :sm="12" :md="8" :lg="6">
      <el-form-item :label="label">
        <el-select v-model="timeRange" @change="handlerChange" placeholder="请选择消费时间">
          <el-option label="今天" value="1"></el-option>
          <el-option label="最近一个周" value="2"></el-option>
          <el-option label="最近一个月" value="3"></el-option>
          <el-option label="最近三个月" value="4"></el-option>
          <el-option label="自定义时间" value="5"></el-option>
        </el-select>
      </el-form-item>
    </el-col>

    <el-col v-if="'5' == timeRange" :xs="24" :sm="12" :md="8" :lg="6">
      <el-form-item label="开始时间">
        <el-date-picker v-model="timePickStart" type="datetime" placeholder="请选择开始时间"></el-date-picker>
      </el-form-item>
    </el-col>

    <el-col v-if="'5' == timeRange" :xs="24" :sm="12" :md="8" :lg="6">
      <el-form-item label="结束时间">
        <el-date-picker
          v-model="timePickEnd"
          type="datetime"
          :picker-options="{ disabledDate: (value) => timePickStart > value }"
          placeholder="请选择结束时间"
        ></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form>
</template>

<script>
import format from "@/util/format";

export default {
  name: "TimeSelect",
  props: ["label", "startTime", "endTime"],
  data() {
    return {
      timeRange: "1",
      timePickStart: this.startTime,
      timePickEnd: this.endTime
    };
  },
  created() {
    if (!this.timePickStart && !this.timePickEnd) {
      let now = new Date().Format("yyyy/MM/dd") + " 00:00:00";
      let milliseconds = +new Date(now);
      this.timePickStart = milliseconds;
      this.timePickEnd = Date.now();
    } else {
      this.timeRange = "5";
    }
  },
  methods: {
    handlerChange(value) {
      if (value != 5) {
        const time = this.handleChangeTime(value);
        if (time) {
          this.timePickStart = time.startTime;
          this.timePickEnd = time.endTime;
        }
      } else {
        this.timePickStart = "";
        this.timePickEnd = "";
      }
    },
    handleChangeTime(value) {
      let day = 0;
      switch (value) {
        case "1":
          day = 1;
          break;
        case "2":
          day = 7;
          break;
        case "3":
          day = 30;
          break;
        case "4":
          day = 90;
          break;
        default:
          break;
      }

      if (day > 0) {
        return format.getDateRange(day);
      }
    },
    reset() {
      let now = new Date().Format("yyyy/MM/dd") + " 00:00:00";
      let milliseconds = +new Date(now);
      this.$emit("update:startTime", milliseconds);
      this.timePickStart = milliseconds;
      this.timePickEnd = Date.now();
      this.timeRange = "1";
    }
  },
  watch: {
    timePickStart(val, oldVal) {
      typeof val === "object"
        ? this.$emit("update:startTime", +new Date(val))
        : this.$emit("update:startTime", val);
    },
    timePickEnd(val, oldVal) {
      typeof val === "object"
        ? this.$emit("update:endTime", +new Date(val))
        : this.$emit("update:endTime", val);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>