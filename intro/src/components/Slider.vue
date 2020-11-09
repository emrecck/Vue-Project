<template>
  <div class="reklamlar">
    <div class="sslider-1">
      <div class="slider-1">
        <div class="slider-1-content">
          <div class="slider-1-item">
            <a href="#"><img src="../assets/images/banner150-137-.jpg" alt=""/></a>
          </div>
          <div class="slider-1-item">
            <a href="#"><img src="../assets/images/sutbanner-136-.jpg" alt=""/></a>
          </div>
          <div class="slider-1-item">
            <a href="#"><img src="../assets/images/Hasanbeycom_banner-33-.jpg" alt=""/></a>
          </div>
          <div class="slider-1-item">
            <a href="#"><img src="../assets/images/gunluk_koy_yumurta-27-.jpg" alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Slider",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider-1 {
  margin-top: 0px;
  height: 400px;
  width: 5350px;
  position: relative;
  overflow: hidden;
}

.slider-1-content {
  position: absolute;
  animation: slide-1 20s infinite;
  width: 100%;
  left: 0;
}

.slider-1-item {
  width: 25%;
  float: left;
}

.slider-1-item img {
  height: auto;
  width: 1450px;
}

.sslider-1 {
  margin-top: -40px;
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

@keyframes slide-1 {
  0% {
    transform: translateX(50px);
  }
  15% {
    transform: translateX(-1350px);
  }
  30% {
    transform: translateX(-1350px);
  }
  45% {
    transform: translateX(-2700px);
  }
  60% {
    transform: translateX(-2700px);
  }
  75% {
    transform: translateX(-4050px);
  }
  90% {
    transform: translateX(-4050px);
  }
}
</style>
