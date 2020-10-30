<template>
  <div class="cart">
    <img alt="Vue logo" src="../assets/logo.png">
    <Cart/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'Home',
  components: {
    Cart
  }
}
</script>
