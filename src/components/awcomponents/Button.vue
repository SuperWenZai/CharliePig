<template>
      <button class="button primary"
        :disabled="disabled"
        :class="[{'large' : islarge},{'is-disabled': disabled}]">
        <a :href="href" v-if="href"></a>
        <slot name="icon">
          <i v-if="icon" class="icon" :class="'icon-' + icon"></i>
        </slot>
        <label><slot>按钮</slot></label>
      </button>
</template>

<script>
  /**
   * @desc 按钮
   * @param {boolean} [disabled=false] - 禁用
   * @param {string} [icon] - 图标 自定义的图标
   * @param {slot} - 显示文本
   * @param {slot} [icon] 显示图标
   */
    export default {
      name: 'button',
      props: {
        disabled: Boolean,
        href:String,
        icon:String,
        islarge : {
          type : Boolean,
          default : false
        },
      },
      methods: {
      }
    }
</script>
<style lang="less" type="text/less" scoped>
  @import "../../assets/css/awui";
  .button {
    .rel;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .5rem;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    display: inline-block;
    font-size: 1.5rem;
    height: 3rem;
    outline: 0;
    padding: 0 12px;
    overflow: hidden;
    position: relative;
    text-align: center;
    a {
      width: 100%;
      height: 100%;
      .abs;
      left: 0;
      top: 0;
    }
    .icon {
      vertical-align: middle;
      margin-top: -0.2rem;
    }
    &.is-disabled { opacity: 0.5;}
    &.primary {
      color:#fff;
      border:1px solid @primary;
      background: @primary;
      &.is-plain { background:transparent; color:@primary; }
    }
    &.large{
      width: 100%;
      display: block;
    }
  }
</style>
