<template lang="html">
  <div class="pagination">
    <ul class="pagination__bar">
      <li class="pagination__link pagination__link_first">
        <router-link :to="{ name: routeName, query: { page: 1 }}"
          class="pagination__href">
          First
        </router-link>
      </li>
      <li class="pagination__link pagination__link_prev">
        <router-link :to="{ name: routeName, query: { page: 1 }}"
          class="pagination__href">
          Prev
        </router-link>
      </li>
      <li v-for="page in pages" class="pagination__link">
        <router-link :to="{ name: routeName, query: { page: page.number }}"
          class="pagination__href"
          v-bind:class="{ 'pagination__href_active': page.isActive }">
          {{page.number}}
        </router-link>
      </li>
      <li class="pagination__link pagination__link_next">
        <router-link :to="{ name: routeName, query: { page: pagesCount }}"
          class="pagination__href">
          Next
        </router-link>
      </li>
      <li class="pagination__link pagination__link_last">
        <router-link :to="{ name: routeName, query: { page: pagesCount }}"
          class="pagination__href">
          Last
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['page', 'perPage', 'totalCount', 'routeName'],
  data () {
    return {
    }
  },
  computed: {
    pages () {
      const pages = []
      for (let i = 1; i <= this.pagesCount; i++) {
        pages.push({
          number: i,
          isActive: this.page === i
        })
      }
      return pages
    },
    pagesCount () {
      return Math.ceil(this.totalCount / this.perPage)
    }
  }
}
</script>

<style lang="stylus">
  @import '../../../styles/backend/variables'

  .pagination
    &__bar
      display: flex
      flex-direction: row
      list-style: none
      padding: 0
    &__link
      background: white;
      border: 1px solid $color-border-primary
    &__href
      display: inline-block
      text-decoration: none
      padding: .4em .3em;
      min-width: 1.5em;
      text-align: center;
      color: $color-link
      &:hover
        color: $color-link-hover
      &:focus
        color: $color-link-focus
      &_active
        background: $color-link-active-bg
        color: $color-link-active-fg
    &_first,
    &_last
      background: grey
    &_prev,
    &_next
      background: black;

</style>
