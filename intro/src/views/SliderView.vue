<template>
  <div class="slider">
    <Slider />
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'

export default {
  name: 'SliderView',
  components: {
    Slider
  }
}
</script>