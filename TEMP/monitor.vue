
<template>
  <div>
    <v-container fluid grid-list-md>
       <v-card>
        <v-card-title><h4>{{header}}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
             
              <monitor-element v-for="item in items" :key="item.key"
                v-bind:identifier="item.key"
                v-bind:value="item.value"
              ></monitor-element>
            </v-list>
          </v-card>
    </v-container>
  </div>
</template>

<script>
import monitorElement from '@/components/monitorElement.vue'
export default {
  name: 'monitor',
 
  props: {
    header : {
      type : String,
      default : "header not set"
    }
    ,items:{
      type: Object,
      default: [
        {key: "Dummy0", value: '42'},
        {key: "Dummy1", value: '12.5'}
      ]
    }
  },
  components:{
    monitorElement
  },
  data: function() {
    return {
      
    }
  }
}
</script>