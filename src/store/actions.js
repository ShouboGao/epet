import axios from 'axios'
export default {
  reqhome ({commit}){
    axios.get('/home').then(response => {
      let home = response.data.data;
      commit('receivehome', {home})
    })
  },
  reqsurprise ({commit}){
    axios.get('/surprise').then(response => {
      let surprise = response.data.data;
      commit('receivesurprise', {surprise})
    })
  },
  reqsort ({commit}){
    axios.get('/sort').then(response => {
      let sort = response.data.data;
      commit('receivesort', {sort})
    })
  },
  reqall ({commit}){
    axios.get('/all').then(response => {
      let all = response.data.data;
      commit('receivall', {all})
    })
  }


}
