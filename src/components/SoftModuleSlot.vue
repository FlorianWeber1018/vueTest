<template>
  <div>
      <v-line v-bind:config="configInputLine" v-bind:key="this.$vnode.key + '_line'"></v-line>
      <v-text v-bind:config="configTextIOPort" v-bind:key="this.$vnode.key + '_textName'"></v-text>
      <v-text v-bind:config="configTextValue" v-bind:key="this.$vnode.key + '_textValue'"></v-text>
      <v-text v-bind:config="configTextConnection" v-bind:key="this.$vnode.key + '_textConnection'"></v-text>
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
        },
        connection: {
            
            required: true
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
            }
        }
    },
    created: function(){ 
        this.configInputLine.points[1] = this.posY;
        this.configInputLine.points[3] = this.posY;
        this.configTextIOPort.y = this.posY-this.configTextIOPort.fontSize/2;
        this.configTextIOPort.text = this.slotName;
    },
    computed:{
        configTextValue: function() {
            var configObject = {
                x:95, 
                fontSize: 10,
                align: 'right',
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
                x:0,
                y:0,
                text: "", 
                fontSize: 14,
                width: 130,
                align: 'right',
                fill: 'grey'
            };
            configObject.y = this.posY-configObject.fontSize/2;
            if(this.connection != ""){
                configObject.text += this.connection.moduleID.toString() + "__" + this.connection.keyName;
            }
            return configObject;
        }
    }
}
</script>