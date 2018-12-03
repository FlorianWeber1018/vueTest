<template>
   <v-stage  :config="configKonva">
    <v-layer > 
      <v-rect v-bind:config="configRect"></v-rect>
      <v-text :config="configTextHeader"></v-text>
      <SoftModuleSlot v-for="(slot, objKey, index) in slots" 
        v-bind:key="moduleID.toString() + '_slot_' + slot.keyName" 
        v-bind:posY="40 + index * pinHeight"
        v-bind:slotName="slot.keyName"
        v-bind:value="parseInt(slot.value)"
        v-bind:connection="slot.connection">
      </SoftModuleSlot>
      <SoftModuleSignal v-for="(signal, objKey, index) in signals" 
        v-bind:key="moduleID.toString() + '_signal_' + signal.keyName" 
        v-bind:posY="40 + index * pinHeight"
        v-bind:signalName="signal.keyName"
        v-bind:value="parseInt(signal.value)"
        v-bind:connections="signal.connections">
      </SoftModuleSignal>
    </v-layer>
  </v-stage>
</template>

<script>

import SoftModuleSlot from './SoftModuleSlot.vue'
import SoftModuleSignal from './SoftModuleSignal.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SoftModule' ,
  components:{
    SoftModuleSlot,
    SoftModuleSignal
  },
  props: {
    moduleID: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      pinHeight: 40,
      configKonva: {
        width: 1000,
        height: 40//,
        //draggable: true
      },
      configRect: {
        x: 150,
        y: 20,
        width: 200,
        height: 100,
        fill: "#D0D0D0",
        stroke: "black",
        strokeWidth: 2
      },
      configTextHeader: {
        x:155,
        y:0,
        fontSize: 20,
        fill: 'black',
        text: "not Set"
      } 
    }
  },
  computed: {
    ...mapState({Modules: state => state.ModuleManager.modules}),
    Module: function() {
      return this.Modules[this.moduleID.toString()];
    },
    signals: function() {
      return this.Module.signals;
    },
    slots: function() {
      return this.Module.slots;
    },
    signalCnt: function () {
      return Object.keys(this.signals).length
    },
    slotCnt: function () {
      return Object.keys(this.slots).length
    },
    pinCntMax: function () {
      if(this.signalCnt >= this.slotCnt){
        return this.signalCnt;
      }else{
        return this.slotCnt;
      }
    },
    configRectHeight: function () {
      if(this.pinCntMax > 0){
        return this.pinCntMax * this.pinHeight;
      }else{
        return 40;
      }
    },
    configKonvaHeight: function () {
      return this.configRectHeight + this.configTextHeader.fontSize + 2;
    },
    configTextHeaderText : function (){
      return this.moduleID.toString() + ' - ' + this.Module.moduleType;
    }
  },
  created: function() {
    this.configTextHeader.text = this.configTextHeaderText; 
    this.configRect.height = this.configRectHeight;
    this.configKonva.height = this.configKonvaHeight;
  }
}
</script>