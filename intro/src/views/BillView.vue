<template>
  <div class="bill">
    <Bill />
  </div>
</template>

<script>
// @ is an alias to /src
import Bill from '@/components/Bill.vue'

export default {
  name: 'Home',
  components: {
    Bill
  }
}
</script>
