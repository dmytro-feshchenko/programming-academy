<template>
  <div class="header-bar__menu">
    <router-link to="/">HOME</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script>
  import { cartCount } from '../vuex/cart/getters';
  export default {
    vuex: {
      getters: {
        count: cartCount,
      }
    }
  }
</script>
