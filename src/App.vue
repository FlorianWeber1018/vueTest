<template>
  <div id="app">
    <v-toolbar>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-btn 
            v-for = "item in menu"
            :key = "item.label + 'mobileLink'"
            :to = "item.path"
            flat>{{item.label}}
          </v-btn> 
        </v-list>
      </v-menu>  
      <v-toolbar-title>Heizungssteuerung</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
        v-for = "item in menu"
        :key = "item.label + 'desktopLink'"
        :to = "item.path"
        flat>{{item.label}}</v-btn> 
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
    <router-view/>
    </v-container>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  
  data() {
    return {
       menu:[
        {label:'home', path:'/'},
        {label:'programming', path:'/prog'}
      ]
    }
  }
}
</script>
</script>