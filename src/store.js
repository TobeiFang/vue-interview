import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [],
    average: 0
  },
  mutations: {
    assignDataList (state, list) {
      state.dataList = list
    }
  },
  getters: {
    getAverage: (state) => {
      let sumNub = null
      for (let i = 0; i < state.dataList.length; i++) {
        sumNub += state.dataList[i].data
      }
      const nub = sumNub / state.dataList.length
      state.average = nub.toFixed(2)
    },
    getData: state => state.dataList
  },
  actions: {
    getDataCall (context) {
      // TODO
      mockGenerator()
    }
  }
})
