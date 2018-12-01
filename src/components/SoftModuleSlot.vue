<template>
  <div>
      <v-line v-bind:config="configInputLine" v-bind:key="this.$vnode.key + '_line'"></v-line>
      <v-text v-bind:config="configTextIOPort" v-bind:key="this.$vnode.key + '_t1'"></v-text>
      <v-text v-bind:config="configTextValue" v-bind:key="this.$vnode.key + '_t2'"></v-text>
  </div>
</template>

<script>
export default {
    name: 'SoftModuleSlot' ,
 
    props: {
        posY: {
            type: Number,
            required: true
        },
        slotName: {
            type: String,
            default: "notSet"
        },
        value: {
            type: Number,
            default: 99999
        }
    },
    data() {
        return {
            configInputLine: {
                points: [140,30,150,30],
                stroke: 'black',
                strokeWidth: 2,
                lineCap: 'round',
                lineJoin: 'round',
                fill: 'black'
            },
            configTextIOPort: {
                x:155,
                y:0,
                text: "-", 
                fontSize: 14,
                width: 90,
                align: 'left',
                fill: 'black'
            },
            configTextValue: {
                x:95,
                y:0,
                text: "jkl", 
                fontSize: 10,
                align: 'right',
                width: 50,
                fill: 'green'
            }
        }
    },
    created: function(){
        this.sync();
    },
    mounted: function(){
        this.sync();
    },
    beforeUpdate: function(){
        this.sync();
    },
    methods:{
        sync: function(){
            this.configInputLine.points[1] = this.posY;
            this.configInputLine.points[3] = this.posY;
            this.configTextIOPort.y = this.posY-this.configTextIOPort.fontSize/2;
            this.configTextIOPort.text = this.slotName;
            this.configTextValue.y = this.posY-this.configTextValue.fontSize;
            this.configTextValue.text = this.value;
        }
    }
}
</script>