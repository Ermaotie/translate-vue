<template>
<div>
  <var-app-bar title="在线翻译" style="position:sticky;top:0;z-index:100"/>
  <var-input 
  :class="{'narrow':judgeWidth(),'wide':!judgeWidth()}" placeholder="请输入原文,自动识别原语种" 
  textarea 
  v-model="origin" />
  <var-tabs v-model:active="active" style="width:300px;margin:auto">
  <var-tab>中文</var-tab>
  <var-tab>英文</var-tab>
  <var-tab>法文</var-tab>
</var-tabs>
<var-button text outline type="primary" style="margin-top:20px;" @click="translate()">翻译</var-button>
<var-input 
  :class="{'narrow':judgeWidth(),'wide':!judgeWidth()}"
  textarea 
  readonly 
  v-model="result" />
</div>
</template>

<script>
import { ref } from 'vue'
const qs = require('qs');

export default {
  name: 'App',
  components: {
  },
  setup() {
    const active = ref(0)
    const origin = ref('hello,world')
    const result = ref('')
    const default_screen_width = ref(500)
    const source_lauguage = ref([
      "ZH","EN","FR"
    ])
    return { 
      active,
      origin,
      result,
      default_screen_width,
      source_lauguage,
      }
  },
  methods:{
    judgeWidth(){
            if(this.default_screen_width>=document.body.clientWidth){
                return true;
            }else{
                return false;
            }
        },
    translate(){
      var data = qs.stringify({
            'text': this.origin,
           'target_lang': this.source_lauguage[this.active],
           });
      var config = {
            method: 'post',
            url: '/demo',
            data : data
          };
      if(this.origin){
        this.$axios(config).then(function(response){
          this.result = response.translations[1].text
        }).catch(function (error){
          console.log(error)
        })
        
        // this.result = this.origin
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.narrow{
    margin:auto;
    width: 85%;
}
.wide{
    margin:auto;
    width: 600px;
}
</style>
