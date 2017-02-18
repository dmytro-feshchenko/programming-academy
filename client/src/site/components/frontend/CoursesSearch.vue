<template lang="html">
  <div class="courses-search">
    <div class="courses-search__catalog-menu-button">
      <a href="#" class="courses-search__home-link">
        <i class="fa fa-home"></i>{{ $t('frontend.menu.home') }}
      </a>
      <a href="#" class="courses-search__catalog-link">
        <i class="fa fa-bars"></i>
        <span>{{ $t('frontend.menu.courses') }}</span>
        <i class="fa fa-chevron-down"></i>
      </a>
    </div>
    <div class="courses-search__search-field">
      <form class="courses-search__form" action="/" method="post">
        <div class="courses-search__search-input-wrap">
          <input type="search" name="keywords"
          :placeholder="$t('frontend.fields.placeholders.searchCourses')">
        </div>
        <div class="courses-search__search-button-wrap">
          <button type="submit" class="courses-search__search-button">
            {{ $t('frontend.buttons.search')}}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
