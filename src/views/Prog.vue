<template>
  <div class="prog">
      <SoftModule v-for="module in Modules" v-bind:moduleID = parseInt(module.ID) v-bind:key= module.ID></softModule>
  </div>
</template>

<script>
import SoftModule from '../components/SoftModule.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components:{
    SoftModule
  },
  data() {
    return {
      
    }
  },
  created: function(){
    this.getModuleManager();
  },computed: mapState({
    Modules: state => state.ModuleManager.modules
  }),
  methods: {
    ...mapActions([
      "getModuleManager"
    ])
  }
}
</script>