<template>
  <div>
      <v-line v-bind:config="configOutputLine" v-bind:key="this.$vnode.key + '_line'"></v-line>
      <v-text v-bind:config="configTextIOPort" v-bind:key="this.$vnode.key + '_t1'"></v-text>
      <v-text v-bind:config="configTextValue" v-bind:key="this.$vnode.key + '_t2'"></v-text>
  </div>
</template>

<script>
export default {
    name: 'SoftModuleSignal' ,
 
    props: {
        posY: {
            type: Number,
            required: true
        },
        signalName: {
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
            configOutputLine: {
                points: [350,30,360,30],
                stroke: 'black',
                strokeWidth: 2,
                lineCap: 'round',
                lineJoin: 'round',
                fill: 'black'
            },
            configTextIOPort: {
                x:255,
                y:0,
                text: "-", 
                fontSize: 14,
                width: 90,
                align: 'right',
                fill: 'black'
            },
            configTextValue: {
                x:355,
                y:0,
                text: "-", 
                fontSize: 10,
                align: 'left',
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
            this.configOutputLine.points[1] = this.posY;
            this.configOutputLine.points[3] = this.posY;
            this.configTextIOPort.y = this.posY-this.configTextIOPort.fontSize/2;
            this.configTextIOPort.text = this.signalName;
            this.configTextValue.y = this.posY-this.configTextValue.fontSize;
            this.configTextValue.text = this.value;
        }
    }
}
</script>