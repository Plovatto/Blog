<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <Header />
      <Recentes/>
      <Equipe />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Equipe from '@/components/Equipe.vue';
  import Footer from '@/components/Footer.vue';
  import Recentes from '@/components/Recentes.vue';
  
  export default {
    components: { Header, Recentes, Footer, Equipe },
  };
  </script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{font-family: 'Inter', sans-serif;}
</style>