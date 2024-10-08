import axios from 'axios';

export const getValorMercado = async (id) => {
    return new Promise(function (resolve, reject) {
      axios.get('https://api-fantasy.llt-services.com/api/v3/player/'+id+'/market-value?x-lang=es')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log('No se puede representar la grafica')
        })
    })
  }

  export const getStats = async (id) => {
    return new Promise(function (resolve, reject) {
      axios.get(`https://api-fantasy.llt-services.com/api/v3/player/`+id+'?x-lang=es')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log('No se puede representar la grafica')
        })
    })
  }

  export const getPlayers = async () => {
    return new Promise(function (resolve, reject) {
      axios.get(`https://api-fantasy.llt-services.com/api/v3/players`)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.log('No se puede representar la grafica')
        })
    })
  }
  export default {getValorMercado, getStats, getPlayers};

