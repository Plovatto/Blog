<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <v-container id="Recentes" class="w-auto mt-15 mb-15">
 <h3>Recentes</h3>
 <hr class="w-25 mt-2 mb-8">
 <div class="d-flex justify-center align-center vh-100">
   <v-carousel :autoplay="false"  :no-swipe="true"  :interval="8000" hide-delimiters cycle no-controls height="auto" show-arrows="hover" :hide-delimiter-background="true" :cols="carouselCols" class="carousel-container custom-dot" dot-color="#FFFFFF">
     <template v-for="(group, index) in slideGroups" :key="index">
       <v-carousel-item>
         <v-row justify="center">
           <v-col v-for="(slide, i) in group" :key="i" cols="12" :md="carouselCols"  xs="2">
             <div class="card h-100 w-auto">
                <div class="card-image" :style="`background-image: url(${images[index * 3 + i]})`"></div>
                <p class="card-title">{{ slide }} Slide</p>
                <p class="card-body">
                  {{ text[index * 3 + i] }}
                </p>
                <p class="footer">Escrito por <span class="by-name">{{ name[index * 3 + i] }}</span> em  <span class="date">{{ date[index * 3 + i] }}</span></p>
              </div>
              
            </v-col>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel></div>
  </v-container>
</template>



  <script>
  export default {
    data() {
      return {carouselCols: 1,
        slides: [
          'Google Notícias completa 20 anos com redesign e fundo de apoio ao jornalismo independente',
          'Vendas do Macbook Pro com chip M2 começam nesta sexta-feira (24)',
          'Citroen Ami Buggy: O carro mais simpático que você já viu até hoje',
          'SEGA anuncia Hyenas, novo FPS no espaço pós-apocalíptico',
          'Metaverso explode em discussões na internet, mas público ainda tem receios',
          'Como o metaverso e a web3 revolucionarão a vida e os negócios?',
        ],
        text: [
          'Na última semana, o Google apresentou uma nova versão para desktop do seu serviço de notícias. Após um redesign profundo, o Google Notícias promete informar mais sobre os temas que os usuários acompanham, com mais profundidade e facilidade de acesso – seja lendo no smartphone ou, agora, no computador.',
          'Durante a WWDC deste ano, a Apple anunciou diversas novidades em seus sistemas e produtos, incluindo um Macbook Air redesenhado e com a segunda geração de chips da empresa, o M2.',
          '17 minutos para esgotar e apenas 2 minutos e 53 segundos para vender a primeira unidade. Estes são os números (incríveis) das vendas das 50 unidades especiais e ultra limitadas do My Ami Buggy, da Citroen.',
          'O mundo dos jogos competitivos nunca foi tão diverso, e o anúncio feito pela SEGA nesta quarta-feira (22) promete contribuir com outro título promissor.',
          'De acordo com números consolidados pela Comscore, apenas 24% dos comentários da internet sobre o metaverso são positivos. O motivo, por sua vez, seria o desconhecimento do público acerca do assunto, que ainda desperta dúvidas e receios em muita gente.',
          'A ideia de criar mundos inteiramente fictícios e com possibilidades infinitas sempre encantou o ser humano. Seja nas antigas tradições orais, na literatura, nas telas do cinema ou nos jogos, mais recentemente, o desejo pela materialização daquilo que somente a criatividade e a mente podem elaborar move montanhas, além de muito dinheiro.',
        ],
        name: [ 
          'Fernando Silva',
          'Paula Ramos',
          'Rodrigo Silveira',
          'Lucas Oliveira',
          'Maria Silva',
          'Debora Pacheco',
        ],
        date: [
          '1/03/2022',
          '1/03/2022',
          '1/03/2022',
          '10/06/2022',
          '10/06/2022',
          '10/06/2022',
         
        ],
        images: [
          'https://github.com/diegocandido/api-fake-blog/blob/master/public/images/post-1.jpg?raw=true',
          'https://github.com/diegocandido/api-fake-blog/blob/master/public/images/post-2.jpg?raw=true',
          'https://github.com/diegocandido/api-fake-blog/blob/master/public/images/post-3.jpg?raw=true',
          'https://github.com/diegocandido/api-fake-blog/blob/master/public/images/post-4.jpg?raw=true',
          'https://github.com/diegocandido/api-fake-blog/blob/master/public/images/post-5.jpg?raw=true',
          'https://github.com/diegocandido/api-fake-blog/blob/master/public/images/post-6.jpg?raw=true',
        ],
      };
    },
    computed: {
  slideGroups() {
    const groups = [];
    for (let i = 0; i < this.slides.length; i += 3) {
      groups.push(this.slides.slice(i, i + 3));
    }
    return groups;
  },
},
methods: {
  adjustCarouselCols() {
    if (window.innerWidth >= 960) {
      this.carouselCols = 4;
    } else if (window.innerWidth >= 600) {
      this.carouselCols = 2;
    } else {
      this.carouselCols = 1;
    }
  },
},
mounted() {
  this.adjustCarouselCols();
  window.addEventListener('resize', this.adjustCarouselCols);
},
beforeUnmount() { 
  window.removeEventListener('resize', this.adjustCarouselCols);
},
};
</script>


  <style scoped>


  .card {
    border-radius: 20px;
    border: 3px solid #E0AA8B;
    background: #FFF;
    
    padding: 20px;
    width: 310px;
    height: 380px;
    min-height: 380px;
    transition: 0.4s;

    
  }

  .card:hover {
    transform: translateY(-10px);
  }
h3{
  color: #B68887;
font-family: Inter;
font-style: normal;
font-weight: 500;
line-height: normal;
}
hr{
  border:0.3px solid #B68887;
}
  .card-title {
    font-size: 16px;
    margin: 15px 0 0 10px;
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
    margin: 13px 0 0 10px;
    font-size: 11px;
    color: #000;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .footer {
    float: right;
    margin: 28px 0 12px 18px;
    font-size: 9px;
    color: #000000;
  }

  .by-name {
    font-weight: 700;
  }
  </style>
