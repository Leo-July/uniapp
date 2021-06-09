<template>
  <div :style="[styleWrap]">
    <video
      v-if="isVideo"
      :src="src"
      :id="id"
      :poster="poster"
      :style="{height: localHeight,width: '100%',borderRadius: localBorderRadius}"
      @play="play"
    ></video>

    <u-image
      v-else
      width="100%"
      :border-radius="localBorderRadius"
      :height="localHeight"
      :src="src"
      :mode="mode"
    ></u-image>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "CMultimedia",
  props: {
    src: {
      type: String,
      default: "",
    },
    poster: {
      type: String,
      default: "",
    },
    mode: {
      type: String,
      default: "aspectFill",
    },
    height: {
      type: [String, Number],
      default: 300,
    },
    borderRadius: {
      type: [String, Number],
      default: 0,
    },
    styleWrap: {
      type: [Object],
      default: () => {},
    },
  },
  data() {
    return {
      id: uuidv4(),
      videoContext: {},
    };
  },
  computed: {
    ...mapState({
      videoObj: (state) => state.videoObj,
    }),
    localHeight() {
      return this.toString(this.height);
    },
    localBorderRadius() {
      return this.toString(this.borderRadius);
    },
    isVideo() {
      return !!this.src.match(/^https?.+\.(mp4|mov|m4v|3gp|avi|m3u8|webm)$/i);
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations(["SET_VIDEO_OBJ"]),
    toString(val) {
      if (String(val).match(/rpx/)) return val;
      return `${val}rpx`;
    },
    init() {
      if (this.isVideo) {
        this.initVideo();
      }
    },
    initVideo() {
      this.videoContext = wx.createVideoContext(this.id, this);
    },
    play() {
      const { id = null, video = null } = this.videoObj;
      if (video && id !== this.id) {
        video.pause();
      }
      this.SET_VIDEO_OBJ({ id: this.id, video: this.videoContext });
    },
  },
};
</script>

<style>
</style>