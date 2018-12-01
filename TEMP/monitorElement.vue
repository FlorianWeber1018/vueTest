<template>
  <div>
    <v-list-tile>
      <v-list-tile-content>{{identifier}}</v-list-tile-content>
      <v-list-tile-content class="align-end">{{value}} {{unit}}</v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  name: 'monitorElement',
  props: {
    type : {
      type: String,
      required: false
    },
    value : {
      type: [String, Number],
      required: true
    },
    unit : {
      type: String,
      default: ""
    },
    identifier : {
      type: String,
      required: true
    }
  }
}
</script>