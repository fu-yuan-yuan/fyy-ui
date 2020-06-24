<!--
*@描述:
*@版本:V1.0
*@作者:沸羊羊
*@Date:2020年6月23日09:32:34
*@最后修改人:沸羊羊
*@LastEditTime:2020年6月24日09:32:43
*@说明：-->
<template>
  <button
    class="fyy-button"
    :class="[`fyy-button--${type}`,{'is-plain':plain,'is-round':round,'is-circle':circle}]"
    @click="handleClick()"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 当父组件没有传入插槽的时候,span标签就不显示；$slots.default可以获取所有插槽，用于判断父组件是否传递 slot -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "FyyButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.fyy-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-apperance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 500;
  font-weight: 500;
  /* 禁止元素的文字被选中； */
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: blue;
    background-color: #ecf5ff;
  }
}
// 按钮类型
.fyy-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}

.fyy-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.fyy-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.fyy-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.fyy-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮
.fyy-button--.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    background-color: #409eff;
    color: #409eff;
  }
}
.fyy-button--primary.is-plain {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    background-color: #409eff;
    color: #fff;
  }
}
.fyy-button--success.is-plain {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    background-color: #67c23a;
    color: #fff;
  }
}
.fyy-button--info.is-plain {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    background-color: #909399;
    color: #fff;
  }
}
.fyy-button--warning.is-plain {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    background-color: #e6a23c;
    color: #fff;
  }
}
.fyy-button--danger.is-plain {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    background-color: #f56c6c;
    color: #fff;
  }
}
// 圆角
.fyy-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 圆形
.fyy-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// button中icon和文字同时存在，设置margin值
.fyy-button [class*="fyy-icon-"] + span {
  margin-left: 5px;
}
</style>
