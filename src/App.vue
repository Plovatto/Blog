<template>
  <v-app>
    <v-main class="pa-0 ma-0">
      <Home/>
 </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
}
</script>
