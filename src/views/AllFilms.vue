<script>
import Peliculas from '../services/peliculas.js';
  export default{
    name: "all-films",
    props: {
      id: String
    },
    data() {
      return {
        peliculas:[],
        searchValue: '',
      };
    },
    methods: {
      listFilms() {
        Peliculas.getAll()
          .then(response => {
              this.peliculas = response.data;
          })
          .catch(e => {
            console.log('Error: ', e)
          })
      },
     
    },
    computed:{
      searchFilm(){
        let filmsFilter = this.peliculas;
        if(this.searchValue){
            filmsFilter = filmsFilter.filter((film)=> {
              return film.title
                  .toUpperCase()
                  .includes(this.searchValue.toUpperCase());
            });
        } 
        console.log(filmsFilter)
        return filmsFilter;
      }
    },
    mounted() {
      this.listFilms();
    }
  };
</script>

<template>
    <header>
      <img src="@/assets/logo.svg">
    </header>
    <div class="container-form">
      <label>Buscar Película:</label> 
      <input class="buscar" v-model="searchValue" type="text">

    </div>
    <div class="container">
      <div v-for="film in searchFilm" 
          :key="film.id" 
          class="card card-info"
          :style="{ backgroundImage: 'url(' + film.image + ')' }"
          >
        <router-link :to="{ name: 'detailfilm', params: { id: film.id }}">
        <div class="border">
          <h2>
            {{ film.title }}<br /><br />
            {{ film.original_title }} - {{ film.release_date }}
          </h2>
        </div>
        </router-link>
      </div>
    </div>
</template>
  
<style scoped>
  header img{
    margin-top: 1%;
  }
  .header--title-container {
    display: none;
  }
  .header--button {
    display: none;
  }
  .container-form {
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  label{
    font-size: 20px;
  }
  input {
    margin-left: 20px;
    height: 30px;
    font-size: 20px;
    width: 300px;
  }
</style>
  