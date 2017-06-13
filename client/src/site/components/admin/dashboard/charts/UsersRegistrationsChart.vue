<template lang="html">
  <section class="stats">
    <h1 class="stats__title">Users Registrations</h1>
    <h3 class="stats__subtitle">View how many users are registered on the timeline</h3>
    <div class="stats__chart">
      <chart :type="'line'" :data="chartData"></chart>
    </div>
  </section>
</template>

<script>
import Chart from '../../ui/Chart.vue'
export default {
  data () {
    return {
    }
  },
  computed: {
    chartData () {
      return {
        labels: ['November', 'December', 'January', 'February'],
        datasets: [
          {
            label: 'Users daily registrations',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [3, 12, 11, 8],
            spanGaps: false
          }
        ]
      }
    }
  },
  created () {
  },
  components: {
    Chart
  }
}
</script>

<style lang="css">
</style>
