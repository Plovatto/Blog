<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div id="Inicio" ></div>
  <v-app-bar class="custom-app-bar " flat >
    <v-container>
      <v-row align="center" class="mt-15" justify="space-between">
        <v-col cols="auto">
          <v-toolbar-title class="custom-title">
            <v-img src="../assets/Logo.svg" ></v-img>
          </v-toolbar-title>
        </v-col>
        <v-col cols="auto" class="nav-items">
          <v-btn  href="#Inicio">Início</v-btn>
          <v-btn  href="#Recentes">Recentes</v-btn>
          <v-btn  href="#Equipe">Equipe</v-btn>
          <v-btn  href="#Contato">Contato</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer class="custom-drawer" app>
    <v-container>
      <v-row>
        
          <v-img src="../assets/Logo.svg"></v-img>
       
        <v-col >
          <v-btn href="#Inicio">Início</v-btn>
          <v-btn href="#Recentes">Recentes</v-btn>
          <v-btn href="#Equipe">Equipe</v-btn>
          <v-btn href="#Contato">Contato</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>

    <v-img src="../assets/ImageHome.svg" width="100%" height="auto" class="mt-11"></v-img>

</template>

<style scoped>
.custom-app-bar {
  max-width: auto; 
  height: 110px;
  background-color: #EAEAE2;
}

.custom-title {
  width: 15vw;
}

.custom-app-bar v-btn {
  color: #000;
}

.custom-app-bar v-btn:hover {
  color: #999;
}

.custom-drawer {
  max-width: auto;
  background-color: #EAEAE2;
  display: none;
}



@media (max-width: 959.99px) {
  .custom-app-bar .nav-items {
    display: none;
  }
  .custom-drawer {
    display: block;
  }
  .custom-title {
  width: 40vw;
} #Inicio{
  margin-top: 10vh;
}
}
</style>

