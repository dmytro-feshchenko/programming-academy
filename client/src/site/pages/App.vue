<template>
  <div class="app">
    <div class="app__header">
      <header-bar></header-bar>
    </div>
    <div class="app__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store';
  import HeaderBar from '../components/HeaderBar.vue';

  export default {
    store,
    components: { HeaderBar }
  }
</script>
