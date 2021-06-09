<template>
  <view class="content">
    <u-grid :col="3">
      <u-grid-item v-for="(item,index) of components" :key="index" @click="onClick(item)">
        <u-icon :name="item.icon" :size="46"></u-icon>
        <view class="grid-text">{{item.name}}</view>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script>
import components from "../../components/index";

export default {
  components: {},
  data() {
    return {
      components: components,
    };
  },
  onLoad() {},
  methods: {
    onClick(item) {
      uni.navigateTo({
        url: `/pages/demo/index?name=${item.component}`,
      });
    },
  },
};
</script>

<style lang="scss">
.swiper {
  width: 100%;
}
</style>
