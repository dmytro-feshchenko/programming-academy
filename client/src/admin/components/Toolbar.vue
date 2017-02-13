<template lang="html">
  <div class="toolbar">
    <div class="toolbar__header">

    </div>
    <div class="toolbar__menu">
      <router-link class="toolbar__link" to="/">
        <i class="fa fa-home"></i><span class="toolbar__href">HOME</span>
      </router-link>
      <router-link class="toolbar__link toolbar__link_last" to="/browse">
        <i class="fa fa-graduation-cap"></i><span class="toolbar__href">Courses</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .toolbar {
    padding: 1em;
    border-radius: 3px;
  }
  .toolbar .toolbar__header {

  }
  .toolbar .toolbar__menu {
    display: flex;
    flex-direction: column;
  }
  .toolbar .toolbar__link {
    padding: 1em;
    text-align: center;
    background: #404040;
    color: white;
    border-radius: 6px;
    margin-bottom: 20px;
  }
  .toolbar .toolbar__link_last {
    margin-bottom: 0;
  }


  .toolbar .toolbar__href {
    display: none;
  }
</style>
