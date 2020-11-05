<template>
  <div class="sepet-main">
    <div class="container">
      <div class="row">
        <div class="alisveris-sepetim col-md-8 col-sm-12">
          <h1 class="sepet-baslik">ALIŞVERİŞ SEPETİM</h1>
          <div class="min-miktar-uyarisi">
            * Minimum sipariş tutarı 60,00 TL
          </div>
          <img
            src="../assets/images/sepet/brown_line_xl.png"
            class="sepet-brown-line w-100"
          />
          <ul class="sepet-urun-basliklari">
            <li class="urun-adi">Ürün Adı</li>
            <li class="urun-adet">Adet</li>
            <li class="urun-tutar">Tutar</li>
            <li class="urun-sil">Sil</li>
          </ul>
          <img
            src="../assets/images/sepet/brown_line_xl.png"
            class="sepet-brown-line w-100"
          />

          <div class="alinan-urunler pt-3">
            <div class="list border p-3">
              <ul class="nav d-flex justify-content-between align-items-center">
                <li class="nav-items">
                  <div class="urunadi d-flex">
                    <div class="productImg px-2">
                      <a href="">
                        <img
                          class="w-100"
                          src="../assets/images/ürünler/0000981_dolmalik-biber_500.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="productName px-2 d-flex align-items-center">
                      <a href="#" class="name"> Dolmalık Biber </a>
                    </div>
                  </div>
                </li>
                <li class="nav-items pl-5 ml-3">
                  <div class="buttons">
                    <div
                      class="btn-group"
                      role="group"
                      aria-lael="Basic example"
                    >
                      <button type="button" class="sepetbutton">-</button>
                      <button type="button" class="sepetbutton">1</button>
                      <button type="button" class="sepetbutton">+</button>
                    </div>
                  </div>
                </li>
                <li class="nav-items pl-5">
                  <span class="sepetfiyat"> 34,90 TL </span>
                </li>
                <li class="nav-items pr-4">
                  <span class="deleteIcon">
                    <button class="border-0 bg-white">
                      <img src="../assets/images/sepet/delete_icon.png" alt="" />
                    </button>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="alisverise-devam-buton col-sm-12 px-0">
            <input
              type="submit"
              name="continueshopping"
              value="Alışverişe Devam Et"
              class="alisverise-devam-input col-sm-12 col-md-4 mb-sm-5"
              id="continue-shopping"
            />
          </div>
        </div>

        <div class="fiyat-tablosu col-md-4 col-sm-12">
          <div class="sepet-urun-adedi clearfix p-3">
            <img src="../assets/images/banner/red_basket_icon.png" alt="" />

            <span class="">1 adet ürün var</span>
          </div>

          <div class="ara-toplam-kargo-ucreti">
            <ul class="w-100 pl-0">
              <li class="d-inline-block p-3 mx-0">
                <div class="clearfix">
                  <span class="py-3 float-left d-inline-block"
                    >Ara Toplam:</span
                  >
                  <span class="py-3 float-right d-inline-block">
                    34, <small> 90 TL</small></span
                  >
                </div>
              </li>
              <li class="d-inline-block p-3 mx-0">
                <div class="clearfix">
                  <span class="py-3 float-left text-left">Kargo Ücreti:</span>
                  <span class="py-3 float-right text-right">
                    9, <small> 90 TL</small></span
                  >
                </div>
              </li>
            </ul>
          </div>

          <div class="toplam border-top-0 clearfix p-3">
            <span class="float-left text-left">
              <p>Toplam:</p>
            </span>
            <span class="float-right text-right">44, <small>80 TL</small></span>
          </div>

          <div class="indirim-kodu p-3">
            <a href="#" class="indirimKodu">İndirim Kodu:</a>
            <div class="row mx-0 px-0">
              <input
                type="text"
                class="i-kupon-input col-md-8 col-sm-12"
                placeholder="İndirim kodunuzu giriniz..."
              />
              <span>&nbsp;</span>
              <input
                type="button"
                value="Ekle"
                class="i-kupon-buton col-md-3 col-sm-12"
              />
            </div>
          </div>

          <div class="satin-al mb-5 clearfix">
            <input
              type="button"
              name="checkout"
              value="SATIN AL"
              class="satin-al-input"
              onclick="location.href='/checkout';"
            />
          </div>

          <div class="min-siparis-tutari text-center">
            <p>
              Minimum sipariş tutarımız 60,00 TL 'dir.Bu tutarı tamamlayıp,
              siparişinizi tamamlayabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alisveris-sepetim{
    position: relative;
}
.sepet-baslik{
    color: #b76f3b;
    text-align: left;
    font-size: 1.8rem;
}

.min-miktar-uyarisi{
    display: block;
    border: 2px solid #e64552;
    padding: 7px 12px;
    color: #e64552;
    font-size: 1.3rem;
    font-weight: bold;
    position: absolute;
    right:10px;
    top:-40px;
}

.sepet-urun-basliklari{
    color: #b76f3b;
    width: 100%;
    font-size: 1.4rem;
    font-weight: bold;
}

.urun-adi{
    text-align: center;
    float: left;
    list-style-type: none;
    width: 34%;
}

.urun-adet{
    text-align: center;
    float: left;
    list-style-type: none;
    width: 28%;
}

.urun-tutar{
    text-align: center;
    float: left;
    list-style-type: none;
    width: 28%;
}

.urun-sil{
    text-align: center;
    float: left;
    list-style-type: none;
    width: 10%;
}

.alisverise-devam-buton{
    text-align: initial;
    float: left;
    width: 100%;
    margin-top: 25px;
}

.alisverise-devam-input{
    -webkit-appearance: button;
    cursor: pointer;
    display: initial;
    float: left;
    background: #d4c7bc;
    width: 253px;
    height: 46px;
    border: 0;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
}

.alisverise-devam-input:hover{
    -webkit-appearance: button;
    cursor: pointer;
    display: initial;
    float: left;
    background-color: #bb9c80;
    height: 46px;
    border: 0;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
}
.urunadi{
    max-width: 100%;
}
.productImg{
    width: 75px;
}
.productName .name{
    font-size: 1.4rem;
    font-weight: 500;
    color:inherit;
}
.buttons{
    max-width: 100%;
}
.sepetbutton{
    background-image:url(../assets/images/sepet/spinner_bg.png);
    background-clip: border-box;
    background-size: cover;
    border: 0;
    color: #b76f3b;
    width: 25px;
    height: 25px;
    font-size: 1.4rem;
    background-color:transparent;
}
.sepetfiyat{
    font-size: 1.7rem;
    color:#d53235;
    letter-spacing: 1px;
    font-weight: 600;
}
.deleteIcon{
    background-color: transparent;
}
.ara-toplam-kargo-ucreti{
    border: 1px solid #dcdcdc;
}

.ara-toplam-kargo-ucreti li{
    margin-top: -15px;
    margin-left: -40px;
}

.ara-toplam-kargo-ucreti span{
    font-weight: bold;
}

.sepet-urun-adedi{
    border: 1px solid #dcdcdc;
    border-bottom: 0;
}
.sepet-urun-adedi img{
    width: 27px;
    float: left;
}
.sepet-urun-adedi span{
    float: left;
    color: #d53235;
    font-weight: bold;
    line-height: 20px;
    font-size: 1.4rem;
    padding: 3px 15px;
}

.ara-toplam-kargo-ucreti ul{
    list-style-type: disc;
    font-size: 1.4rem;
}

.ara-toplam-kargo-ucreti ul li{
    list-style-type: none;
    width: 100%;
}

.toplam{
    border: 1px solid #dcdcdc;
    font-size: 1.4rem;
    color: #d53235;
    font-weight: bold;
}
.indirim-kodu{
    border: 1px solid #dcdcdc;
}
.indirimKodu{
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom:13px;
    display: inline-block;
}
.i-kupon-input{
    background: #fff;
    font-family: georgia;
    font-size: 1.2rem;
    padding: 0px;
    height: 34px;
    border: 1px solid #dedede!important;
}

.i-kupon-buton{
    cursor: pointer;
    font-size: 1.4rem;
    background: #afa58c;
    color: #fff;
    height: 35px!important;
    border: none;
}

.satin-al-input {
    cursor: pointer;
    height: 48px;
    border: none;
    background: #73a12e;
    width: 100%!important;
    float: left;
    margin-top: 25px;
    color: #fff;
    font-size: 1.7rem;
    font-weight: 500;
}
.satin-al-input:hover{
    background-color:#62802a;
    transition: background-color .4s ease-in 0s;
}
.min-siparis-tutari p{
    font-size: 15px;
    font-weight: bold;
}
</style>
