<template>
  <hooper class="hooper" :progress="true" :autoPlay="true" :playSpeed="3000">
    <slide class="slide"><img class="images" src="../assets/images/Hasanbeycom_banner-33-.jpg" alt=""/></slide>
    <slide class="slide"><img class="images" src="../assets/images/sokaBanner-124-.jpg" alt=""/></slide>
    <slide class="slide"><img class="images" src="../assets/images/gunluk_koy_yumurta-27-.jpg" alt=""/></slide>
    <slide class="slide"><img class="images" src="../assets/images/karpuz_banner-126-.jpg" alt=""/></slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from "hooper";
import 'hooper/dist/hooper.css';

export default {
  name: "App",
  components: {
    Hooper,
    Slide
  }
};
</script>

<style scoped>

.images{
  display: inline;
  height: 100%;
}

</style>