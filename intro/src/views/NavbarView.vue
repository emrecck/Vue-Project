<template>
  <div class="navbar">
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'NavbarView',
  components: {
    Navbar
  }
}
</script>