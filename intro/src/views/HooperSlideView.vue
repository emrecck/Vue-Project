<template>
  <div class="hooperslide">
    <HooperSlide />
  </div>
</template>

<script>
// @ is an alias to /src
import HooperSlide from '@/components/HooperSlide.vue'

export default {
  name: 'HooperSlideView',
  components: {
    HooperSlide
  }
}
</script>