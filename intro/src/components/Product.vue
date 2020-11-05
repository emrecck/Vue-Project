<template>
  <body>
    <div class="product-main">
      <div class="product-bilgileri">
        <div class="top">
          <div class="anasayfa-baslik">
            <a href="https://www.hasanbey.com/tr/"><span>Anasayfa ></span></a>
            <a href="https://www.hasanbey.com/tr/domates-biber"
              ><span>Domates &amp; Biber ></span></a
            >
            <strong class="current-item">Çıtır Biber ( Acı )</strong>
          </div>

          <div class="listeye-don">
            <a href="https://www.hasanbey.com/tr/domates-biber"
              ><input type="button" value="Listeye Dön"
            /></a>
          </div>
        </div>

        <img src="../assets/images/urun/floral_seperator_long.png" alt="" />

        <div class="product-bilgi">
          <div class="product-image">
            <a href=""
              ><img src="../assets/images/urun/0001149_citir-biber-aci-.jpeg" alt=""
            /></a>
          </div>

          <div class="baslik-sepet-ozellik">
            <div class="product-baslik">
              <h1>Çıtır Biber ( Acı )</h1>
              <span>22,90 TL</span>
              <p>1 Kg Acı Biber</p>
            </div>

            <div class="product-sepet">
              <div>
                <p>Adet:</p>
                <div class="spinner">
                  <a href=""
                    ><img src="../assets/images/urun/spinner_minus.png" alt=""
                  /></a>
                  <img src="../assets/images/urun/spinner_bg.png" alt="" />
                  <a href=""
                    ><img src="../assets/images/urun/spinner_plus.png" alt=""
                  /></a>
                </div>
                <input type="button" class="product-buton" />
                <div class="product-quality">
                  <img src="../assets/images/urun/product_quality_icons.png" alt="" />
                </div>
              </div>

              <div class="kargo-img">
                <div class="kargo-bedava">
                  <img src="../assets/images/urun/kargo_bedava_badge.png" />
                </div>
              </div>
            </div>

            <div class="product-ozellik">
              <h3>
                <img src="../assets/images/urun/bugday_icon.png" alt="" /> Ürün
                Özellikleri
              </h3>
              <p>
                Taze, çıtır çıtır biberlerimizi günlük olarak hasat ediyor;
                siparişinizle topluyoruz.<br />
                Yemeklerinizde, kahvaltılarınızda afiyetle yiyebilirsiniz.
              </p>
              <a href="https://www.hasanbey.com/tr/gunluk-cikanlar"
                ><img
                  src="../assets/images/urun/web-sk-15-yeni2-66-.png"
                  alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>

      <div class="urun-detay-yorum">
        <div id="nav"></div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Product",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-main {
  height: 800px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-left: 130px;
  margin-right: 130px;
}

.product-bilgi {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.baslik-sepet-ozellik {
  display: grid;
  grid-template-rows: 1fr 3fr 2fr;
}

body {
  font-family: kg_turning_tablesregular, sans-serif;
}

.top {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.top strong {
  color: #e43743;
  font-weight: bold;
  font-size: 14px;
}

.top a {
  float: left;
  margin-right: 10px;
  color: #b76f3b;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}

.listeye-don a {
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
}

.listeye-don input {
  margin-left: 500px;
  cursor: pointer;
  background: url(../assets/images/urun/listeye_don_btn.png) no-repeat;
  text-indent: -9999px;
  border: 0px;
  width: 111px;
  height: 35px;
}s/

.listeye-don input:hover {
  margin-left: 500px;
  cursor: pointer;
  background: url(../assets/images/urun/listeye_don_btn_hover.png) no-repeat;
  text-indent: -9999px;
  border: 0px;
  width: 111px;
  height: 35px;
}

.product-image img {
  margin-top: 30px;
  width: 500px;
}

.product-baslik h1 {
  margin-left: -100px;
  font-family: inherit;
  font-weight: bold;
  width: 79%;
  line-height: initial;
  float: left;
  display: initial;
  font-size: 24px;
}

.product-baslik span {
  margin-left: 400px;
  margin-top: -40px;
  color: #d53235;
  font-family: inherit;
  font-weight: bold;
  width: 79%;
  line-height: initial;
  float: left;
  display: initial;
  font-size: 24px;
}

.product-baslik p {
  margin-left: -100px;
  margin-top: 60px;
  color: #737373;
  font-family: kg_turning_tablesregular, sans-serif;
  font-weight: bold;
}

.product-sepet {
  display: grid;
  grid-template-rows: 2fr 1fr;
}

.product-sepet p {
  font-size: 13px;
  display: block;
  color: #b76f3b;
  text-align: left;
  font-weight: bold;
  margin-top: 10px;
  margin-left: -95px;
}

.spinner {
  margin-left: -92px;
}

.spinner img {
  margin-top: -5px;
  margin-left: -3px;
}

.product-buton {
  cursor: pointer;
  border-radius: 0;
  margin-top: 25px;
  margin-left: -90px;
  background: url(../assets/images/urun/sepete_ekle_btn.png) center center no-repeat !important;
  background-color: #74a02f !important;
  width: 279px;
  height: 46px;
  border: 0;
  color: transparent;
}

.product-buton:hover {
  cursor: pointer;
  border-radius: 0;
  margin-top: 25px;
  margin-left: -90px;
  background: url(../assets/images/urun/sepete_ekle_btn.png) center center no-repeat !important;
  background-color: rgb(99, 128, 42) !important;
  width: 279px;
  height: 46px;
  border: 0;
  color: transparent;
}

.product-quality img {
  margin-top: 20px;
  margin-left: -95px;
  width: 350px;
}

.kargo-img {
  margin-top: -90px;
}

.kargo-bedava img {
  width: 140px;
  margin-top: -920px;
  margin-left: 395px;
}

.product-ozellik h3 {
  margin-top: -90px;
  margin-left: -95px;
  color: rgb(183, 111, 59);
  font-family: kg_turning_tablesregular, sans-serif;
  text-align: left;
  font-size: 18px;
}

.product-ozellik p {
  font-size: 14px;
  margin-top: -5px;
  margin-left: -95px;
  color: rgb(136, 111, 93);
  font-family: Georgia, "Times New Roman", Times, serif;
}

.product-ozellik a img {
  margin-top: 15px;
  margin-left: -95px;
}
</style>
