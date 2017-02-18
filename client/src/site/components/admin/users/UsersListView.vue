<template lang="html">
  <div class="">
    <h1>{{ $t('backend.pages.users')}}</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <ajax-table :headers="headers" :data="users"></ajax-table>
  </div>
</template>

<script>
import AjaxTable from '../../common/tables/AjaxTable.vue'
export default {
  data () {
    return {
      headers: [
        {
          prop: 'first_name',
          name: 'First Name'
        },
        {
          prop: 'last_name',
          name: 'Last Name'
        },
        {
          prop: 'email',
          name: 'Email'
        },
        {
          prop: 'is_email_verified',
          name: 'Verified?'
        },
        {
          prop: 'is_subscribed',
          name: 'Subscribed?'
        }
      ],
      loading: true,
      error: false,
      content: false,
      users: []
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    AjaxTable
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchUsers').then(() => {
        this.loading = false
        this.error = null
        this.users = this.$store.state.usersModule.users
        this.content = true
      })
    }
  }
}
</script>

<style lang="css">
</style>
