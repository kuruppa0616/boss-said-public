<template>
  <el-input clearable type="textarea" :rows="3" v-model="text"></el-input>
</template>
<script>
export default {
  computed: {
    text: {
      get() {
        return this.$store.state.text;
      },
      set(newText) {
        this.$store.commit("setText", newText);
      }
    }
  }
};
</script>
