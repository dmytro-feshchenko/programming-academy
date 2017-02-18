<template>
  <div class="app">
    <div class="app__sidebar">
      <sidebar></sidebar>
    </div>
    <div class="app__main">
      <div class="app__header">
        <header-bar></header-bar>
      </div>
      <div class="app__content">
        <router-view></router-view>
      </div>
      <div class="app__footer">
        <footer-bar></footer-bar>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../../vuex/store'
  import HeaderBar from './HeaderBar.vue'
  import Sidebar from './Sidebar.vue'
  import FooterBar from './FooterBar.vue'

  export default {
    store,
    components: {
      HeaderBar,
      Sidebar,
      FooterBar
    }
  }
</script>

<style lang="css" scoped>
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: row;
  }

  .app .app__header,
  .app .app__footer {
    flex: none;
  }

  .app .app__main {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0;
    background: #f5f5f5;
  }

  .app .app__header {
    padding: 1em;
    background: white;
    border-bottom: 1px solid rgba(230,230,230,0.7);
  }

  .app .app__sidebar {
    /* 12em is the width of the columns */
    flex: 0 0 1em;
    /* put the nav on the left */
    /*order: -1;*/
    background: #233445;
  }

  .app .app__content {
    flex: 1;
    padding: 0 1.5em;
    margin: 1.5em 0;
  }

  .app .app__footer {
    background: white;
    border-top: 1px solid rgba(230,230,230,0.7);
  }

  @media (max-width: 768px) {
    .app .app__main {
      /*flex-direction: column;*/
      flex: 1;
    }
    .app .app__content {
      flex: 1;
    }
    .app .app__sidebar {
      /* 12em is the width of the columns */
      flex: 0 0 1em;
    }
  }
</style>
