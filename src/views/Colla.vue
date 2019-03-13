<template>
  <div>
    <h1>Boss Said</h1>

    <div ref="printMe" class="canvas">
      <div class="left">
        <div class="text-box">
          <p v-for="(text, key) in splitedTexts" :key="key" class="text">{{ text }}</p>
        </div>
      </div>
      <div class="right">
        <img src="../assets/boss-half.png">
      </div>
    </div>
    <div class="inputfield">
      <text-area/>
      <div class="button">
        <el-button v-on:click="print()" type="primary">Next</el-button>
        <div class="back-button">
          <router-link to="/">
            <el-button size="mini" type="info">Back</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from "@/components/TextArea";

export default {
  data() {
    return {
      output: null
    };
  },
  components: { TextArea },
  computed: {
    splitedTexts: function() {
      const splitedTexts = this.$store.state.text.split("\n");
      const filteredTexts = splitedTexts.filter(el => {
        return el.length > 0;
      });
      return filteredTexts;
    }
  },
  methods: {
    async print() {
      const el = this.$refs.printMe;
      const options = {
        type: "dataURL"
      };
      const image = await this.$html2canvas(el, options);
      this.$store.commit("setImage", image);
      this.$router.push("editor");
    }
  }
};
</script>

<style scoped>
.canvas {
  width: 780px;
  height: 410px;
  display: flex;
}
.left {
  width: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.right {
  width: 50%;
}
.text-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  line-height: 0.1;
  letter-spacing: 0.03em;
}
.text {
  color: white;
  font-size: 40px;
}
.inputfield {
  width: 50%;
  padding-top: 30px;
  margin: 0 auto;
  text-align: center;
}
.button {
  padding-top: 20px;
}
.back-button {
  padding-top: 10px;
  font-size: 0.857em;
}
</style>
