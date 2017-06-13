<template lang="html">
  <div>
    <h1>Dashboard</h1>
    <div class="charts-area">
      <div class="panel">
        <users-registrations-chart></users-registrations-chart>
      </div>
      <div class="panel">
        <api-calls-frequency-chart></api-calls-frequency-chart>
      </div>
    </div>
  </div>
</template>

<script>
import UsersRegistrationsChart from './charts/UsersRegistrationsChart.vue'
import ApiCallsFrequencyChart from './charts/ApiCallsFrequencyChart.vue'
export default {
  components: {
    UsersRegistrationsChart,
    ApiCallsFrequencyChart
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../styles/backend/variables.styl'

  .charts-area
    display: flex
    flex-direction: row

  .panel
    background: white;
    border: 1px solid $color-border-primary
    padding: 1em
</style>
