<!--
 * @Author: Leo July
 * @Description: 
-->
<template>
  <e-multimedia />
</template>

<script>
import eMultimedia from "../../example/e-multimedia/index.vue";
export default {
  components: { eMultimedia },
  data() {
    return {
      componentName: "",
    };
  },
  onLoad(options) {
    const { name } = options;
    this.componentName = name;
  },
};
</script>

<style>
</style>