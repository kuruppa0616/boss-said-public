<template>
  <div class="wrapper">
    <h1>Boss Said</h1>

    <tui-image-editor ref="editor" :include-ui="useDefaultUI" :options="options"></tui-image-editor>
    <div class="button">
      <router-link to="/colla">
        <el-button size="mini" type="info">Back</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
// To use the default UI, the svg files for the icons is required.
import "tui-image-editor/dist/svg/icon-a.svg";
import "tui-image-editor/dist/svg/icon-b.svg";
import "tui-image-editor/dist/svg/icon-c.svg";
import "tui-image-editor/dist/svg/icon-d.svg";
// Load Style Code
import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";

import { ImageEditor } from "@toast-ui/vue-image-editor";
export default {
  components: { "tui-image-editor": ImageEditor },
  data() {
    const image = this.$store.state.image;
    return {
      useDefaultUI: true,
      options: {
        includeUI: {
          loadImage: {
            path: image ? image : "",
            name: "SampleImage"
          },
          initMenu: "filter"
        }
      }
    };
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  padding-top: 20px;
}
</style>
