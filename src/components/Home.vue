<!-- eslint-disable vue/multi-word-component-names -->
<template>
<Header/>

<Recentes/>
<Equipe />
<Footer/>
</template>


<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
import Equipe from './Equipe.vue';

import Recentes from './Recentes.vue';

export default {
    components: { Header, Recentes, Footer, Equipe }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{font-family: 'Inter', sans-serif;}
</style>