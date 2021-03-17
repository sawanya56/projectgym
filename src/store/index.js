import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../plugins/firebase'

Vue.use(Vuex)

const db = firebase.firestore()

export default new Vuex.Store({
  state: {
    haveUser: false,
    user : '',
    cart: [],
    price: 0
  },
  mutations: {
    login(state, playload) {
      console.log(playload)
      state.haveUser = true
      state.user = playload
    },
    addCart(state, playload) {
      state.cart.push(playload)
      state.price += playload.price
    },
    clearSale(state) {
      state.cart = []
    }
  },
  actions: {
    addUser( _ , playload) {
      db.collection('users').add({playload})
    },
    async login({commit}, playload) {
      const usres = await db.collection('users').get()
      usres.forEach((user) => {
        const usernow = user.data().playload
        if (usernow.name == playload.name && usernow.password == playload.password) {
          commit('login', usernow)
        }
        else {
          console.log('err')
        }
      })
    },
    submitSale( {commit} , playload) {
      db.collection('sale').add({playload})
      commit('clearSale')
    }
  }
})
