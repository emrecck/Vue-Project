<template>
  <div class="bill">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <Bill/>
        </div>
        <div class="col-md-6">
          <Bill2/>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Bill from '@/components/Bill.vue'
import Bill2 from '@/components/Bill2.vue'

export default {
  name: 'Home',
  components: {
    Bill,
    Bill2
  }
}
</script>
