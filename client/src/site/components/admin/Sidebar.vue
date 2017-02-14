<template lang="html">
  <div class="sidebar">
    <div class="sidebar__header">

    </div>
    <div class="sidebar__menu">
      <router-link class="sidebar__link" :to="{ name: 'admin-dashboard' }">
        <i class="fa fa-line-chart"></i><span class="sidebar__href">{{ $t('backend.sidebar.dashboard') }}</span>
      </router-link>
      <router-link class="sidebar__link" :to="{ name: 'admin-users' }">
        <i class="fa fa-user-circle-o"></i><span class="sidebar__href">{{ $t('backend.sidebar.users') }}</span>
      </router-link>
      <router-link class="sidebar__link" :to="{ name: 'admin-courses' }">
        <i class="fa fa-graduation-cap"></i><span class="sidebar__href">{{ $t('backend.sidebar.courses') }}</span>
      </router-link>
      <router-link class="sidebar__link sidebar__link_last" :to="{ name: 'admin-messages' }">
        <i class="fa fa-envelope-o"></i><span class="sidebar__href">{{ $t('backend.sidebar.messages') }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .sidebar {
    padding: 1em;
    border-radius: 3px;
  }
  .sidebar .sidebar__header {

  }
  .sidebar .sidebar__menu {
    display: flex;
    flex-direction: column;
  }
  .sidebar .sidebar__link {
    padding: 1em;
    text-align: center;
    background: #404040;
    color: white;
    border-radius: 6px;
    margin-bottom: 20px;
  }
  .sidebar .sidebar__link_last {
    margin-bottom: 0;
  }
  .sidebar .sidebar__href {
    display: none;
  }
</style>
