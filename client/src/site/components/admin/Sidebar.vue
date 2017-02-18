<template lang="html">
  <div class="sidebar">
    <div class="sidebar__header">
      <span class="sidebar__app-full-name">{{ $t('backend.app.name') }}</span>
      <span class="sidebar__app-short-name">{{ $t('backend.app.abbr') }}</span>
    </div>
    <div class="sidebar__menu">
      <router-link class="sidebar__link" v-for="link in links" :to="link.path">
        <i :class="link.icon"></i>
        <span class="sidebar__href">{{ link.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          label: this.$t('backend.sidebar.dashboard'),
          path: { name: 'admin-dashboard' },
          icon: 'fa fa-fw fa-dashboard'
        },
        {
          label: this.$t('backend.sidebar.users'),
          path: { name: 'admin-users' },
          icon: 'fa fa-fw fa-user-circle-o'
        },
        {
          label: this.$t('backend.sidebar.courses'),
          path: { name: 'admin-courses' },
          icon: 'fa fa-fw fa-graduation-cap'
        },
        {
          label: this.$t('backend.sidebar.messages'),
          path: { name: 'admin-messages' },
          icon: 'fa fa-fw fa-envelope-o'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  .sidebar {
    padding: 0.6em;
    border-radius: 0;
    padding-top: 0;
  }
  .sidebar .sidebar__header {
    color: white;
  }
  .sidebar .sidebar__menu {
    display: flex;
    flex-direction: column;
  }
  .sidebar .sidebar__link {
    padding: .4em .6em;
    text-align: center;
    background: transparent;
    color: white;
    border-radius: 2px;
    margin-bottom: 20px;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
  }
  .sidebar .sidebar__link:hover,
  .sidebar .sidebar__link:focus {
    text-decoration: none;
  }
  .sidebar .sidebar__link_last {
    margin-bottom: 0;
  }

  .sidebar .sidebar__href {
    font-size: 14px;
    display: inline-block;
    margin-left: 10px;
    line-height: 18px;
  }

  .sidebar__app-full-name,
  .sidebar__app-short-name {
    line-height: 50px;
    text-align: center;
  }

  .sidebar__app-full-name {
    display: block;
  }

  .sidebar__app-short-name {
    display: none;
  }

  @media (max-width: 768px) {
    .sidebar__app-full-name {
      display: none;
    }
    .sidebar__app-short-name {
      display: block;
    }
    .sidebar .sidebar__link {
      display: block;
    }
    .sidebar .sidebar__href {
      display: block;
      font-size: 14px;
      margin-left: 0;
      margin-top: 3px;
    }
  }

  @media (max-width: 480px) {
    .sidebar .sidebar__href {
      display: none;
    }
  }

  @media (max-width: 320px) {

  }
</style>
