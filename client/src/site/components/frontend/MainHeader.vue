<template>
  <div class="main-header">
    <div class="app-logo app-logo_big">
      <a class="app-logo__element" href="/">
        {{ $t('app.info.name')}} | {{ $t('app.info.shortDesc')}}
      </a>
    </div>
    <courses-search></courses-search>
    <div class="app-description">
      <div class="app-description__header">
        {{ $t('app.info.fullName') }}
      </div>
      <div class="app-description__text">
        {{ $t('app.info.desc') }}
      </div>
    </div>
    <div class="center-content">
      <router-link class="button button_default" :to="{ name: 'catalog' }">Browse Courses</router-link>
    </div>
  </div>
</template>

<script>
  import store from '../../vuex/store'
  import CoursesSearch from './CoursesSearch.vue'

  export default {
    store,
    components: {
      CoursesSearch
    }
  }
</script>

<style lang="css" scoped>
  .main-header {

  }

  .app-description {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    color: white;
  }
  .app-description .app-description__header {
    font-size: 1.8em;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .app-description .app-description__text {
    font-size: 1.1em;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .center-content {
    text-align: center;
  }

  .button {
    display: inline-block;
    border: 0;
    text-decoration: none;
    padding: 10px 25px;
  }

  .button.button_default {
    background: #343a41;
    color: white;
  }
</style>
