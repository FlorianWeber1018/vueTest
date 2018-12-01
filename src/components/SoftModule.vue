<template>
   <v-stage  :config="configKonva">
    <v-layer > 
      <v-rect v-bind:config="configRect"></v-rect>
      <v-text :config="configTextHeader"></v-text>
      <SoftModuleSlot v-for="(slot, index) in slots" 
        v-bind:key="moduleID.toString() + '_slot_' + slot.name" 
        v-bind:posY="40 + index * pinHeight"
        v-bind:slotName="slot.name"
        v-bind:value="slot.value">
      </SoftModuleSlot>
      <SoftModuleSignal v-for="(signal, index) in signals" 
        v-bind:key="moduleID.toString() + '_signal_' + signal.name" 
        v-bind:posY="40 + index * pinHeight"
        v-bind:signalName="signal.name"
        v-bind:value="signal.value">
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
    },
    moduleType: {
      type: String,
      default: "TYPE"
    },
    slots: {
      type: Array,
      default: function () { return [
        {name: "S1",value: 85},
        {name: "S2",value: 85},
        {name: "S3",value: 85}
       
        ] }
    },
    signals: {
      type: Array,
      default: function () { return [
        {name: "S11",value: 87},
        {name: "S12",value: 87},
        {name: "S13",value: 87},
        {name: "S14",value: 87}
      ] }
    }
  },
  data() {
    return {
      slotCnt: 0,
      signalCnt: 0,
      pinCntMax: 0,
      pinHeight: 40,
      configKonva: {
        width: 1000,
        height: 40
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
        text: "HEADER",
        fill: 'black'
      }
    }
  },
  computed: mapState({
    Module: state => state.ModuleManager.modules[this.moduleID.toString()]
  }),
  methods: {
    ...mapActions([
      "getModuleManager"
    ])
  },
  created: function() {
    this.signalCnt = this.signals.length;
    this.slotCnt = this.slots.length;
    if(this.signalCnt >= this.slotCnt){
      this.pinCntMax = this.signalCnt;
    }else{
      this.pinCntMax = this.slotCnt;
    }
    if(this.pinCntMax > 0){
      this.configRect.height = this.pinCntMax * this.pinHeight;
    }else{
      this.configRect.height = 40;
    }
    this.configKonva.height = this.configRect.height + this.configTextHeader.fontSize + 2;
    this.configTextHeader.text = this.moduleID.toString() + ' - ' + this.moduleType;
  }
}
</script>