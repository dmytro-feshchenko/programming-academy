<template lang="html">
  <div>
    <table class="table table_ajax-reloading table_full-width table_bordered">
      <thead>
        <tr class="table-col table-col_bold">
          <td class="table-col__cell" v-for="header in headers">
            <template v-if="header.sortable">
              <a href="#" class="table-col__sortable">{{ header.name }}</a>
            </template>
            <template v-else>
              {{ header.name }}
            </template>
          </td>
        </tr>
        <tr class="search-row">
          <td class="search-row__cell" v-for="header in headers">
            <template v-if="header.type == 'boolean'">
              <select class="search-row__select" :name="header.prop">
                <option selected value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </template>
            <template v-else>
              <input class="search-row__input" type="search" :name="header.prop" :placeholder="header.name">
            </template>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="model in data">
          <td v-for="header in headers">
            <template v-if="header.type == 'boolean'">
              <div class="text-center">
                <template v-if="model[header.prop] == true">
                  <span class="mark mark_success"><i class="fa fa-check"></i></span>
                </template>
                <template v-else>
                  <span class="mark mark_error"><i class="fa fa-times"></i></span>
                </template>
              </div>
            </template>
            <template v-else>
              <template v-if="header.type == 'email'">
                <a class="table__mail-link" :href="'mailto:' + model[header.prop]">{{ model[header.prop] }}</a>
              </template>
              <template v-else>{{ model[header.prop] }}</template>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination></pagination>
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
  props: ['headers', 'data'],
  components: {
    Pagination
  }
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
    padding: .4rem .7rem;
  }

  .search-row .search-row__input {
    width: 100%;
    padding: .4rem .6rem;
    font-size: 14px;
  }

  .table-col.table-col_bold .table-col__cell {
    font-weight: bold;
  }

  .table .table__mail-link {
    color: #233445;
    font-size: 14px;
  }

  .tag {
    font-size: 12px;
    background: #ddd;
  }
  .tag.tag_success {
    color: #4F8A10;
    background-color: #DFF2BF;
  }
  .tag.tag_warning {
    color: #9F6000;
    background-color: #FEEFB3;
  }
  .tag.tag_error {
    color: #D8000C;
    background-color: #FFBABA;
  }
  .tag.tag-info {
    color: #00529B;
    background-color: #BDE5F8;
  }
  .mark {
    font-size: 18px;
  }
  .mark.mark_success {
    color: #4F8A10;
  }
  .mark.mark_error {
    color: #D8000C;
  }
  .text-center {
    text-align: center;
  }
</style>
