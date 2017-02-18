<template lang="html">
  <div class="pagination">
    <ul class="pagination__bar">
      <li class="pagination__link pagination__link_first">First</li>
      <li class="pagination__link pagination__link_prev">Prev</li>
      <li v-for="page in pages">
        {{page.number}}
      </li>
      <li class="pagination__link pagination__link_next">Next</li>
      <li class="pagination__link pagination__link_last">Last</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['page', 'per-page', 'count'],
  data () {
    return {
      pages: []
    }
  }
}
</script>

<style lang="css">
</style>
