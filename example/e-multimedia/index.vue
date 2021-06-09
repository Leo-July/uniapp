<!--
 * @Author: Leo July
 * @Description: 
-->
<template>
  <div>
    <u-read-more show-height="300">
      <rich-text :nodes="desc" class="desc"></rich-text>
    </u-read-more>
    <c-multimedia v-for="(item,index) of list" :key="index" :src="item.src" mode="widthFix"></c-multimedia>
  </div>
</template>

<script>
export default {
  name: "e-multimedia",
  computed: {
    list() {
      return [
        {
          src: "https://apd-44c7c78bb497e0ab648f403f53bea273.v.smtcdns.com/mv.music.tc.qq.com/Az-DK13IkfJmZvlNLg9_E37Rb5zvKrJnMSMSfPzpkWGI/84E05C309DC447A9A60A88A1719F4A8B04FEB5BCFCDB86EBD1470E940537D9ED8FBD057AA42D632F03820FFE97288802ZZqqmusic_default/1049_M0110300000fa4WV3Z9haI1001840657.f9834.mp4?fname=1049_M0110300000fa4WV3Z9haI1001840657.f9834.mp4",
          desc: "大风吹 (天赐的声音第二季 第12期)-刘惜君 /王赫野",
          // poster: "http://120.78.65.43/chunhewenhua/guanggao/lee/lee10.png",
        },
        {
          src: "https://apd-605acbc7f5a50362ef5d397ff20fd077.v.smtcdns.com/mv.music.tc.qq.com/A-vMlBVTQXnzv6UJBJlWU_TnYrzI_ecS0p2r8SbOAP04/12C174918C6FDD52330C3BA069FFDABB37C67D8F18612866139F4BB4F8BBC720B97E53854FF2FCFF14CD34C21D8AE711ZZqqmusic_default/1049_M01100000000m5wT2bFNub1001857031.f9844.mp4?fname=1049_M01100000000m5wT2bFNub1001857031.f9844.mp4",
          desc: "这世界那么多人 (电影《我要我们在一起》主题曲)",
          // poster: "http://120.78.65.43/chunhewenhua/guanggao/lee/lee10.png",
        },
        {
          src: "https://cdn.uviewui.com/uview/swiper/1.jpg",
          desc: "昨夜星辰昨夜风，画楼西畔桂堂东",
        },
        {
          src: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          desc: "身无彩凤双飞翼，心有灵犀一点通",
        },
        {
          src: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          desc: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
        },
      ];
    },
    desc() {
      return `多媒体，目前仅支持微信小程序支持的 图片和视频，视频播放实现了自动暂停上一个视频`;
    },
  },
};
</script>

<style>
</style>