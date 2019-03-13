<template>
  <div class="wrapper">
    <h1>Boss Said</h1>

    <text-area/>
    <router-link class="button" to="/colla">
      <el-button type="primary">Next</el-button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import TextArea from "@/components/TextArea";

export default {
  name: "home",
  components: { TextArea }
};
</script>

<style scoped>
.wrapper {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  margin-top: 40px;
}
</style>

