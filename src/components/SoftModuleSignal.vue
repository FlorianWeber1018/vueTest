<template>
  <div>
      <v-line v-bind:config="configOutputLine" v-bind:key="this.$vnode.key + '_line'"></v-line>
      <v-text v-bind:config="configTextIOPort" v-bind:key="this.$vnode.key + '_textName'"></v-text>
      <v-text v-bind:config="configTextValue" v-bind:key="this.$vnode.key + '_textValue'"></v-text>
      <v-text v-bind:config="configTextConnection" v-bind:key="this.$vnode.key + '_textConnection'"></v-text>
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
        },
        connections: {
            required: true
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
            }
        }
    },
    created: function(){
        this.configOutputLine.points[1] = this.posY;
        this.configOutputLine.points[3] = this.posY;
        this.configTextIOPort.y = this.posY-this.configTextIOPort.fontSize/2;
        this.configTextIOPort.text = this.signalName;
    },
    computed:{
        configTextValue: function() {
            var configObject = {
                x:355, 
                fontSize: 10,
                align: 'left',
                width: 50
            };
            configObject.y = this.posY-configObject.fontSize;
            configObject.text = this.value.toString();
            if(this.value === 0){
                configObject.fill = 'red';
            }else{
                configObject.fill = 'green';
            }
            return configObject;     
        },
        configTextConnection: function() {
             var configObject = {
                x:370,
                y:0,
                text: "", 
                fontSize: 14,
                width: 150,
                align: 'left',
                fill: 'grey'
            };
            configObject.y = this.posY-configObject.fontSize/2;
            for (var key in this.connections) {
                configObject.text += key + '\n' ;
            }
            return configObject;
        }
    }
}
</script>