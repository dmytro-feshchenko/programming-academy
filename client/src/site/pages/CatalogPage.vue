<template lang="html">
  <div class="catalog">
    <h1>Browse courses</h1>
    <!-- render courses -->
    <div class="courses-preview-container">
      <div class="courses-preview-list">
        <div v-for="course in coursesList"
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
  computed: {
    coursesList () {
      return [
        { name: 'React.js', description: 'React JS Ecosystem' },
        { name: 'Vue.js', description: 'Learn pros and cons of the components' },
        { name: 'Go', description: 'Writing Server Side Rendering for Vue.js' },
        { name: 'Webpack', description: 'How to build your project' },
        { name: 'Karma', description: 'Learn and run your first E2E test' },
        { name: 'Node.js', description: 'Write pure realtime chat with Node.js' }
      ]
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
