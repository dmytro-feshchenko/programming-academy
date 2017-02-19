<template lang="html">
  <div class="">
    <h1>{{ $t('backend.pages.users')}}</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <ajax-table
      :headers="tableHeaders"
      :data="users"
      pagination-info-template="Showing: {from} - {to} out of {total} records"
      pagination-info-no-data-template="The requested query return no result"
    ></ajax-table>
  </div>
</template>

<script>
import AjaxTable from '../../common/tables/AjaxTable.vue'
export default {
  data () {
    return {
      tableHeaders: [
        { prop: 'id', name: 'ID', sortable: true, sortOrder: 'asc' },
        { prop: 'full_name', name: 'Name', sortable: true },
        // { prop: 'first_name', name: 'First Name', sortable: true },
        // { prop: 'last_name', name: 'Last Name', sortable: true },
        { prop: 'email', name: 'Email', type: 'email', sortable: true },
        {
          prop: 'is_email_verified',
          name: 'Verified',
          type: 'boolean',
          sortable: true,
          hint: 'Shows whether the email address of the user is confirmed'
        },
        {
          prop: 'is_subscribed',
          name: 'Subscribed',
          type: 'boolean',
          sortable: true,
          hint: 'Shows whether the user is subscribed to email notifications'
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
