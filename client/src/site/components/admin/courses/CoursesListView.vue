<template lang="html">
  <div class="">
    <h1>{{ $t('backend.pages.courses')}}</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <ajax-table
      :headers="tableHeaders"
      :data="users"
      :perPage="perPage"
      :page="page"
      :totalCount="totalCount"

      pagination-info-template="Showing: {from} - {to} out of {total} records"
      pagination-info-no-data-template="The requested query return no result"

      routeName = "admin-courses"
      childRouteName = "admin-course-view"
      batchActions = "true"
      defaultPerPage="10"
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
        { prop: 'full_name', name: 'Name', sortable: true, link: 'entity' },
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
      usersState: [],
      page: this.$route.query['page'] || 1,
      perPage: this.$route.query['per-page'] || 10,
      totalCount: 0
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
      this.$store.dispatch('fetchUsers', {
        page: this.page,
        perPage: this.perPage
      }).then(() => {
        this.loading = false
        this.error = null
        this.users = this.$store.state.usersModule.users.models
        this.page = this.$store.state.usersModule.users.pagination.page
        this.perPage = this.$store.state.usersModule.users.pagination.perPage
        this.totalCount = this.$store.state.usersModule.users.pagination.totalCount
        this.usersState = this.$store.state.usersModule.users
        this.content = true
      })
    }
  }
}
</script>

<style lang="css">
</style>
