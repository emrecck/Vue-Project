<template>
  <div class="products">
    <div class="container">
      <div class="urunler col-sm-12 row">
        <div
          class="col-sm-3 px-0 p-2"
          v-for="item in list"
          v-bind:key="item.id"
        >
          <div class="col-sm-12 p-2 border-layer">
            <div class="col-sm-12 px-0 urun">
              <div class="col-sm-12 p-0">
                <a href="#">
                  <img v-bind:src= "item.imgSource" />
                </a>
              </div>

              <div class="col-sm-12 pt-3 px-0">
                <h3 class="urun-isim text-left">{{ item.name }}</h3>
                <h5 class="urun-alt-isim text-left">{{ item.subName }}</h5>
              </div>

              <div class="fiyat-at-sepete clearfix">
                <div class="row">
                  <div class="col-sm-6">
                    <h3 class="urun-fiyat text-left">{{ item.cost }} TL</h3>
                  </div>
                  <div class="col-sm-2"></div>
                  <a onclick="pop()" class="col-sm-4 at-sepete-buton">
                    <img src="../assets/images/banner/at_sepete_sprite.png" />
                  </a>
                </div>

                <div id="box">
                  <h3>Ürün sepete eklendi !</h3>
                  <a onclick="pop()" class="close">Kapat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {  },
  data() {
    return {
      list: [
        {
          id: 0,
          imgSource: "../assets/images/ürünler/0001030_dogal-koy-yumurtasi-60-adet_500.png",
          name: "Doğal Köy Yumurtası 60 Adet",
          subName:"60 Adet Doğal Köy Yumurtası",
          cost: '65,90' 
        },
        {
          id: 1,
          imgSource: '../assets/images/ürünler/0001227_dolgulu-yesil-zeytin-sarimsakli-kekikli-500-gr_500.jpeg',
          name: "Doğal Yumurta",
          subName:"60 Adet Doğal Köy Yumurtası",
          cost: "15",
        },
        {
          id: 2,
          imgSource: "../assets/images/ürünler/0001225_gurme-paketi_500.jpeg",
          name: "Doğal Yumurta",
          subName:"60 Adet Doğal Köy Yumurtası",
          cost: "15",
        },
        {
          id: 3,
          imgSource: "../assets/images/ürünler/0000981_dolmalik-biber_500.png",
          name: "Doğal Yumurta",
          subName:"60 Adet Doğal Köy Yumurtası",
          cost: "15",
        },
        {
          id: 4,
          imgSource: "../assets/images/ürünler/0001081_dogal-ev-yapimi-pekmez-armut-450-gr_500.png",
          name: "Doğal Yumurta",
          subName:"60 Adet Doğal Köy Yumurtası",
          cost: "15",
        },
         {
          id: 5,
          imgSource: "../assets/images/ürünler/0001161_patlican_500.png",
          name: "Doğal Yumurta",
          subName:"60 Adet Doğal Köy Yumurtası",
          cost: "15",
        },
         {
          id: 6,
          imgSource: "../assets/images/ürünler/0001103_dogal-domates-suyu-1365-gr_500.png",
          name: "Doğal Yumurta",
          subName:"60 Adet Doğal Köy Yumurtası",
          cost: "15",
        },
        {
          id: 7,
          imgSource: "../assets/images/ürünler/0001236_yayik-tereyagi-500-gr_500.jpeg",
          name: "Doğal Yumurta",
          subName:"60 Adet Doğal Köy Yumurtası",
          cost: "15",
        }
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.urunler img{
    max-width: 100%;
    width: 100%;
}
.border-layer{
    border: 1px solid #dcdcdc;
}
.border-layer:hover{
    border-color: #d53235;
    transition: all .2s ease-out 0s;
}
.urun-isim{

}
.fiyat-at-sepete{

}
.urun-fiyat{
    font-size: 2.5rem;
    color: #d53235;
}
.at-sepete-buton{
    cursor: pointer;
    border: 0px;
    background-color: transparent;
}
#box{
    width: 500px;
    height: 150px;
    overflow: hidden;
    background: #f1f1f1;
    box-shadow: 0 0 20px black;
    border-radius: 8px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    text-align: center;
    display: none;
}

.close{
    font-size: 18px;
    color: #d53235;
    padding: 10px 30px;
    cursor: pointer;
    background: transparent;
    display: inline-block;
    border-radius: 4px;
}

.at-sepete-buton img{
    height: 36px;
    width: 115px;
}

.at-sepete-button{
    cursor: pointer;
    margin-top: -55px;
    margin-left: 185px;
    float: right;
    border: 0px;
    background-color: transparent;
}

.at-sepete-button img{
    height: 36px;
    width: 115px;
}

.at-sepete-buton:active, .at-sepete-buton:focus{

    border: 0px;
}

.yeni-lezzetlerimiz{

    height: 600px;
    display: grid;
    grid-template-rows: 1fr 1fr;

}

.reklam-yeni-lezzetlerimiz{

    margin-top: 9px;
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
}

.reklam-yeni-lezzetlerimiz img{

    margin-left: 7px;
    padding: 0px;
}

.ciftlikten-sectiklerimiz{

    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

}

.urun-alt-isim{

    text-overflow: ellipsis;
    color: #737373;
    font-size: 1.35rem;
}
</style>
