import Vue from 'vue'
import Vuex from 'vuex'
import cats from '@/data/cats'
import dogs from '@/data/dogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs]
  },
  mutations: {
    appendPet: (state, { pet, species }) => {
      state[species].push(pet)
    }
  },
  actions: {
    addPet: ({ commit }, payload) => {
      commit('appendPet', payload)
    }
  },
  getters: {
    animalsCount: (state) => state.cats.length + state.dogs.length,
    getAllCats: (state) => state.pets.filter(p => p.species === 'cat')
  },
  modules: {
  }
})
