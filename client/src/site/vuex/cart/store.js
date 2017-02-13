import {
  ADD_TO_CART
  // CHECKOUT_SUCCESS,
  // CHECKOUT_REQUEST,
  // CHECKOUT_FAILURE
} from '../mutation-types'

// shape: [{ id, quantity }]
const state = {
  added: [],
  lastCheckout: null
}

// mutations
const mutations = {
  [ADD_TO_CART] (state, productId) {
    state.lastCheckout = null
    // find this product if it's in the backet already
    const record = state.added.find(p => p.id === productId)
    if (!record) {
      state.added.push({
        id: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  }
}

export default {
  state,
  mutations
}
