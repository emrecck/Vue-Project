<template>
  <div class="products">
    <Products />
    <div id="app">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "@/components/Products.vue";

export default {
  name: "ProductsView",
  components: {
    Products,
  },
};
</script>