<template lang="html">
  <table class="table table_ajax-reloading table_full-width table_bordered">
    <thead>
      <tr class="table-col table-col_bold">
        <td class="table-col__cell" v-for="header in headers">{{ header.name }}</td>
      </tr>
      <tr class="search-row">
        <td class="search-row__cell" v-for="header in headers">
          <input class="search-row__input" type="search" :name="header.prop" :placeholder="header.name">
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="model in data">
        <td v-for="header in headers">
          {{ model[header.prop] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['headers', 'data']
}
</script>

<style lang="css">
  .table {
    border-collapse: collapse;
    background: white;
  }
  .table thead th {
    border: 1px solid #eceeef;
    border-bottom-width: 2px;
  }
  .table.table_ajax-reloading {

  }
  .table.table_full-width {
    width: 100%;
  }
  .table.table_bordered {
    border: 1px solid #eceeef;
  }
  .table_bordered td,
  .table_bordered th {
    border: 1px solid #eceeef;
    padding: .6rem;
  }

  .search-row {

  }

  .search-row .search-row__cell {
    padding: .2rem;
  }

  .search-row .search-row__input {
    width: 100%;
    padding: 0.2rem 0.4rem;
    font-size: 12px;
  }

  .table-col.table-col_bold .table-col__cell {
    font-weight: bold;
  }
</style>
