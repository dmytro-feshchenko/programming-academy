<template lang="html">
  <div class="">
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div v-if="content">
      <div class="panel">
        <div class="panel__header">
          Profile Information
        </div>
        <div class="panel__body">
          <div class="user-profile">
            <div class="user-profile__info">
              <table class="user-profile__table">
                <thead>

                </thead>
                <tbody>
                  <tr>
                    <td>Username:</td>
                    <td>{{ userProfile.username }}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{{ userProfile.email }}</td>
                  </tr>
                  <tr>
                    <td>First Name:</td>
                    <td>{{ userProfile.first_name }}</td>
                  </tr>
                  <tr>
                    <td>Last Name:</td>
                    <td>{{ userProfile.last_name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="user-profile__avatar">
              <span>Avatar:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      error: false,
      content: false,
      userProfile: false
    }
  },
  created () {
    this.fetchUserDetails()
  },
  methods: {
    fetchUserDetails () {
      this.$store.dispatch('fetchUserDetails', this.$route.params.id).then((response) => {
        this.loading = false
        this.error = null
        this.userProfile = this.$store.state.usersModule.user.profile
        this.content = true
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .panel {
    padding: 1em;
    background: white;
    border: 1px solid hsla(0,0%,90%,.7);
  }
  .panel .panel__header {
    border-bottom: 1px solid hsla(0,0%,90%,.7);
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 16px;
    font-weight: bold;
    color: #233445;
  }
  .panel .panel__body {
  }

  .user-profile {
    display: flex;
    flex-direction: row;
  }
  .user-profile .user-profile__info,
  .user-profile .user-profile__avatar {

  }
  .user-profile .user-profile__info {
    flex-grow: 3;
  }
  .user-profile .user-profile__table {
    width: 100%;

  }
</style>
