<script>
import Peliculas from '../services/peliculas.js';
  export default{
    name: "detail-film",
    props: {
      id: String
    },
    data() {
      return {
        pelicula:{},
        searchValue: '',
      };
    },
    methods: {
      getFilm(id) {
        Peliculas.getId(id)
          .then(response => {
              this.pelicula = response.data;
          })
          .catch(e => {
            console.log('Error: ', e)
          })
      },
     
    },
    mounted() {
      this.getFilm(this.$route.params.id);
    }
  };
</script>

<template>
    <header>
      <img src="@/assets/logo.svg">
    </header>
    <div class="container-detalle">
      <div class="detalle-img" :style="{ backgroundImage: 'url(' + pelicula.image + ')' }" >
      </div>
      <div class="detalle-texto">
        <p><b>Título: </b>{{pelicula.title}}</p>
        <p><b>Título Original: </b>{{pelicula.original_title}}</p>
        <p><b>Director: </b>{{pelicula.director}}</p>
        <p><b>Productor: </b>{{pelicula.producer}}</p>
        <p><b>Año: </b>{{pelicula.release_date}}</p>
        <p><b>Duración: </b>{{pelicula.running_time}}</p>
        <p><b>Descripción: </b>{{pelicula.description}}</p>
        <p>
          <router-link :to="{ name: 'allfilms' }">
            <img src="@/assets/return.png">
          </router-link>
        </p>
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
  .container-form h2 {
    font-size: 25px;
  }
  .container-detalle{
    width: 100%;
    min-height: 600px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
  }

    .detalle-img {
        height: 450px;
        width: 300px;
        background: grey;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        margin: 10px;
        background-size: 300px;
    }
    .detalle-texto {
        width: 50%;
        overflow: hidden;
        display: flex;
        justify-content:flex-start;
        flex-direction: column;
        align-items: baseline;
        position: relative;
        margin: 10px;
    }
    .detalle-texto p {
        font-size: 15px;
        text-align: left;
        margin: 10px;
    }
    .detalle-texto img{
      width: 100%;
      max-width: 40px;
    }
    @media screen and (max-width: 745px) {
        .container-detalle{
            flex-direction: column-reverse;
        }
    }
</style>
  