<template>
  <div id="mynovelreader-app">
    <speech class="speech" v-if="speechDialogVisible" v-on:closeSpeech="hideSpeech" />
  </div>
</template>

<script>
import bus, { SHOW_SPEECH } from './bus'
import Speech from './components/Speech.vue'

export default {
  data() {
    return {
      speechDialogVisible: false,
    }
  },
  components: {
    Speech,
  },
  created() {
    bus.$on(SHOW_SPEECH, this.showSpeech)
  },
  beforeDestory() {
    bus.$off(SHOW_SPEECH, this.hideSpeech)
  },
  methods: {
    showSpeech() {
      this.speechDialogVisible = true
    },
    hideSpeech() {
      this.speechDialogVisible = false
    }
  }
}
</script>

<style lang="less">
.speech {
  position: fixed;
  z-index: 100;
  background-color: white;
  top: 10px;
  right: 35px;
}
</style>
