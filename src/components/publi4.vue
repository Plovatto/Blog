<!-- eslint-disable vue/multi-word-component-names -->
<template> <br><br>
  <v-container class="d-flex flex-column align-center mt-5">
    <div class="card">
      <div class="card-image" :style="`background-image: url(${imagePath})`"></div>
      <p class="card-title">{{ noticia.title }}</p>
      <p class="card-body">{{ noticia.description }}</p>
      <p class="footer">Escrito por <span class="by-name">{{ noticia.profileName }}</span> em <span class="by-name">{{ noticia.postDate }}</span></p>
    </div>
    <br><br>
    <a @click="voltar"><v-icon icon="mdi-home" color="blue-grey-darken-2"></v-icon></a>
  </v-container >
</template>
  
  <script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const voltar = () => {
      if (route.path !== '/Inicio') {
      router.push(`/Inicio`);
    }};

    return {
      voltar,
    };
  },
  data() {
    return {
      noticia: {},
      imagePath: 'https://api-rest-post-diegocandido.herokuapp.com/img/post-5.jpg',
    };
  },
  async created() {
    try {
      const response = await axios.get(
        'https://api-rest-post-diegocandido.herokuapp.com/postagem/4'
      );
      this.noticia = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
});
</script>
  
  <style scoped>
  /* Estilos CSS */
  </style>
  
<style scoped>


.card {
  border-radius: 20px;
  border: 3px solid #E0AA8B;
  background: #FFF;
  
  padding: 20px;
  width: 30rem;
  height: 70vh;
  min-height: 380px;
  transition: 0.4s;

  
}

.card:hover {
  transform: translateY(-10px);
}
a{
  cursor: pointer;
  transition: 0.5s;
}
a:hover{
  transform: scale(1.5);
}
hr{
border:0.3px solid #B68887;
}
.card-title {
  font-size: 20px;
  margin: 20px 0 0 10px;
  color: #000;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.card-image {
  min-height: 170px;
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.card-body {
  margin: 20px 0 0 10px;
  font-size: 15px;
  color: #000;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.footer {
  float: right;
  margin: 28px 0 12px 18px;
  font-size: 11px;
  color: #000000;
}

.by-name {
  font-weight: 700;
}

@media screen and (max-width: 600px) {
  .card {
    width: 20rem;
  }
}
</style>