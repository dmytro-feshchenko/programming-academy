<template lang="html">
  <div class="catalog">
    <h1>Browse courses</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <!-- render courses -->
    <div class="courses-preview-container">
      <div class="courses-preview-list">
        <div v-for="course in courses"
          class="course-preview">
            <div class="course-preview__name">{{course.name.trim()}}</div>
            <div class="course-preview__description">
              {{course.description.trim().substring(0, 200)}}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      content: null,
      error: null,
      courses: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.content = null
      this.loading = true
      this.$store.dispatch('fetchCourses').then(() => {
        this.loading = false
        this.error = null
        this.courses = this.$store.state.coursesModule.courses
        console.log(this.courses)
        this.content = true
      })
    }
  },
  ready: {

  },
  computed: {
    coursesList () {
      return this.$store.state.coursesModule.courses
      // this.$store.dispatch('getCourses')
      // return [
      //   { name: 'React.js', description: 'React JS Ecosystem' },
      //   { name: 'Vue.js', description: 'Learn pros and cons of the components' },
      //   { name: 'Go', description: 'Writing Server Side Rendering for Vue.js' },
      //   { name: 'Webpack', description: 'How to build your project' },
      //   { name: 'Karma', description: 'Learn and run your first E2E test' },
      //   { name: 'Node.js', description: 'Write pure realtime chat with Node.js' }
      // ]
    }
  }
}
</script>

<style lang="css">
  .courses-preview-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .course-preview {
    border: 1px solid black;
    padding: 1em;
    background: #eee;
  }

  .course-preview .course-preview__name {
    font-size: 26px;
    margin-bottom: 10px;
  }

  .course-preview .course-preview__description {
    max-width: 200px;
    font-size: 14px;
  }
</style>
