export default {
  receivehome(state, {home}){
    state.home = home
  },
  receivesurprise(state, {surprise}){
    state.surprise = surprise
  },
  receivesort(state, {sort}){
    state.sort = sort
  },
  receiveall(state, {all}){
    state.all = all
  }
}
