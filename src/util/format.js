Date.prototype.Format = function(fmt) {
  //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

export default {
  getDateHasCurrent(time) {
    let current = Format.getDate(new Date().getTime(), ".");
    let next = Format.getDate(time, ".");

    let currentArray = current.split(".");
    let nextArray = next.split(".");

    //今天
    if (current == next) {
      let o = Format.getDateTime(time);
      return `${o.h}:${o.m}`;
    }
    //去年
    else if (nextArray[0] < currentArray[0]) {
      return next;
    } else {
      return `${nextArray[1]}.${nextArray[2]}`;
    }
  },

  getDate(time, splitStr) {
    if (!time) return "";

    var date = new Date(time);
    var M = date.getMonth() + 1;
    var y = date.getFullYear();
    var d = date.getDate();

    if (M < 10) M = "0" + M;
    if (d < 10) d = "0" + d;

    if (splitStr) return `${y}${splitStr}${M}${splitStr}${d}`;
    else
      return {
        y: y,
        M: M,
        d: d
      };
  },

  getDateTime(time) {
    var date = new Date(time);
    var M = date.getMonth() + 1;
    var y = date.getFullYear();
    var d = date.getDate();
    var h = date.getHours() < 10 ? 0 + "" + date.getHours() : date.getHours();
    var m =
      date.getMinutes() < 10 ? 0 + "" + date.getMinutes() : date.getMinutes();
    var s = date.getSeconds();

    return {
      y: y,
      M: M,
      d: d,
      h: h,
      m: m,
      s: s
    };
  },

  getFullDate(time, split) {
    let date = Format.getDate(time, split);
    let tm = Format.getDateTime(time);
    return date + " " + `${tm.h}:${tm.m}`;
  },

  toFixed(val) {
    return (val / 100).toFixed(2);
  },

  /**
   * 获取从今天开始上几天的时间
   * 例如：需要获取从今天开始上一个周的时间
   * 输入：getDateRange(7)
   * 输出: { startTime: 1524844800000,  endTime:1524844800000}
   * { startTime: 2018-04-28 00:00:00,  endTime:2018-05-05 23:59:59}
   * @param days
   * @returns {{startTime: number, endTime: number}}
   */
  getDateRange(days) {
    let now = new Date().Format("yyyy/MM/dd") + " 00:00:00";
    let milliseconds = +new Date(now);
    let rangeMill = milliseconds - 24 * 60 * 60 * 1000 * days;
    if (days == 1) {
      return {
        startTime: milliseconds,
        endTime: Date.now()
      };
    } else {
      return {
        startTime: rangeMill,
        endTime: milliseconds + (24 * 60 * 60 * 1000 - 1000)
      };
    }
  }
};
