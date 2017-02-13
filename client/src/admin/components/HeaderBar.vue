<template>
  <div class="header-bar">
    <div class="header-bar__collapse-btn">

    </div>
    <div class="header-bar__menu">
      <router-link class="header-bar__link" to="/login">Login</router-link>
      &nbsp;/&nbsp;
      <router-link class="header-bar__link" to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css">
  .header-bar {

  }
  .header-bar .header-bar__collapse-btn {

  }
  .header-bar .header-bar__menu {
    color: white;
    display: flex;
    flex-flow: row wrap;
    /* This aligns items to the end line on main-axis */
    justify-content: flex-end;
  }
  .header-bar .header-bar__link {
    color: white;
  }
</style>
