const usersTotalCount = state => {
  return state.users.pagination.totalCount
}

const usersPerPage = state => {
  return state.users.pagination.perPage
}

const usersPage = state => {
  return state.users.pagination.page
}

export default {
  usersTotalCount,
  usersPerPage,
  usersPage
}
