<script>
  import Peliculas from '../services/peliculas.js';
  export default{
    name: "film-list",
    props: {
      id: String
    },
    data() {
      return {
        peliculas:[],
      };
    },
    methods: {
      listFilms() {
        Peliculas.getAll()
          .then(response => {
              this.peliculas = response.data;
              let totalPeliculas = this.peliculas.length;
              this.peliculas.sort((a,b) => b.release_date - a.release_date);
              this.peliculas.splice(3,totalPeliculas)
          })
          .catch(e => {
            console.log('Error: ', e)
          })
      },
    },
    mounted() {
      this.listFilms();
    }
  };
</script>

<template>
  <main>
    <header>
      <img src="@/assets/logo.svg">
      <div class="header--title-container">
        <a class="header--button">Ultimas películas del estudio<span></span></a>
      </div>
    </header>
    <div class="container">
      <div v-for="(film, index) in peliculas" 
          :key="index" 
          class="card card-info"
          :style="{ backgroundImage: 'url(' + film.image + ')' }"
          >
        <router-link :to="{ name: 'detailfilm', params: { id: film.id }}">
        <div class="border">
          <h2>
            {{ film.original_title_romanised }}<br /><br />
            {{ film.original_title }} - {{ film.release_date }}
          </h2>
        </div>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>