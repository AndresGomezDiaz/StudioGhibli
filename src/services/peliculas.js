import http from './http-common';

class Peliculas {
    getAll(){
        return http.get('/films');
    }
    getId(id){
        return http.get(`/films/${id}`);
    }
}

export default new Peliculas();