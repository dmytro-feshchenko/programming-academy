<template lang="html">
    <canvas class="chart" :width="width" :height="height"></canvas>
</template>

<script>
import Chart from 'chart.js/src/chart'
const types = ['line', 'bar', 'horizontalBar', 'radar', 'polarArea', 'pie', 'doughnut']
export default {
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    type: {
      type: String,
      required: true,
      validate (value) {
        return types.indexOf(value) > -1
      }
    },
    data: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    // create chart object
    this.chart = new Chart(this.$el, {
      type: this.type,
      data: this.data,
      options: this.options
    })
  },
  data () {
    return {
      chart: null
    }
  }
}
</script>

<style lang="stylus" scoped>
    .chart
        max-width: 100%;
</style>
