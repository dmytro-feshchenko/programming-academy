<template>
  <div class="app">
    <div class="app__main">
      <div class="app__header">
        <main-header></main-header>
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
  import store from '../../../vuex/store'
  import MainHeader from '../MainHeader.vue'
  import Toolbar from '../../Toolbar.vue'
  import FooterBar from '../../FooterBar.vue'

  export default {
    store,
    components: {
      MainHeader,
      Toolbar,
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
    background: #fdfdfd;
  }

  .app .app__header {
    padding: 1em;
    background: #55606e;
  }

  .app .app__toolbar {
    /* 12em is the width of the columns */
    flex: 0 0 1em;
    /* put the nav on the left */
    /*order: -1;*/
    background: rgba(147, 128, 108, 0.1);
  }

  .app .app__content {
    flex: 1;
    padding: 0 1em;
  }

  .app .app__footer {
    background: #404040;
  }

  @media (max-width: 768px) {
    .app .app__main {
      /*flex-direction: column;*/
      flex: 1;
    }
    .app .app__content {
      flex: 1;
    }
    .app .app__toolbar {
      /* 12em is the width of the columns */
      flex: 0 0 1em;
    }
  }
</style>
