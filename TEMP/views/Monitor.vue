<template>
  <div>
    <monitor v-bind:header = header> </monitor>
  </div>
</template>

<script>
import axios from "axios";

import monitor from '@/components/monitor.vue'

import Vue from 'vue';
import VueKonva from 'vue-konva'
 
Vue.use(VueKonva)
export default {
  components:{
    monitor
  },
  data: function() {
    return {
    header : "bt"
    }
  },
  methods: {
   
  },
  created: function() {
    
  }
};
</script>
