export const state = () => ({
  sets: []

})
export const getters = {
  getAllSets: state => (filter) => {
    if (filter === 'No Status') {
      return state.sets.filter(set => set.status === '' || set.status === undefined)
    } else if (filter) {
      return state.sets.filter(set => set.status === filter)
    } else {
      return state.sets
    }
  },
  isSetInCollection: state => (set) => {
    return state.sets.filter(x => x.set_num === set.set_num).length > 0
  }
}
export const mutations = {
  addSet: (state, set) => {
    if (!state.sets.find(x => x.set_num === set.set_num)) {
      state.sets.push(set)
    }
  },
  changeStatus: (state, { set, newStatus }) => {
    state.sets.find(x => x.set_num === set.set_num).status = newStatus
  },
  removeSet: (state, set) => {
    state.sets = state.sets.filter(x => x.set_num !== set.set_num)
  }
}

// export const plugins = [new VuexPersistence().plugin]
