<template>
  <body>
    <div class="tum-urunler-main">
      <div>
        <div>
          <ul class="side_category_menu">
            <li v-for="item in list" v-bind:key="item.id"><a href="#">{{ item.name }}</a></li>
            <!-- <li><a href="#">Tüm Ürünler</a></li>
            <li><a href="#">Sebze & Meyve</a></li>
            <li><a href="#">Süt & Peynir</a></li>
            <li><a href="#">Yumurta & Sucuk</a></li>
            <li><a href="#">Salça & Turşu</a></li>
            <li><a href="#">Zeytin & Zeytinyağı</a></li>
            <li><a href="#">Reçel & Bal</a></li>
            <li><a href="#">Sebzeler</a></li>
            <li><a href="#">Ekmek</a></li>
            <li><a href="#">Meyveler</a></li>
            <li><a href="#">Hediye Paketleri</a></li>
            <li><a href="#">Paketler</a></li> -->
          </ul>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data() {
    return{
      list:[
        {
          id:0,
          name:"Aile Boyu"
        },
        {
          id:1,
          name:"Tüm Ürünler"
        },
        {
          id:2,
          name:"Sebze & Meyve"
        },
        {
          id:3,
          name:"Süt & Peynir"
        },
        {
          id:4,
          name:"Yumurta & Sucuk"
        },
        {
          id:5,
          name:"Salça & Turşu"
        },
        {
          id:6,
          name:"Zeytin & Zeytinyağı"
        },
        {
          id:7,
          name:"Reçel & Bal"
        },
        {
          id:8,
          name:"Sebzeler"
        },
        {
          id:9,
          name:"Ekmek"
        },
        
        {
          id:10,
          name:"Meyveler"
        },
        {
          id:11,
          name:"Hediye Paketleri"
        },
        {
          id:12,
          name:"Paketler"
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side_category_menu {
  margin-left: 10px;
  padding: 70px 20px 20px 20px;
  background: url(../assets/images/tum-urunler/side_pattern.png);
  position: relative;
  width: 280px;
  height: 735px;
  text-align: left;
}

.side_category_menu li {
  margin-bottom: 0;
  list-style-type: none;
}

.side_category_menu:before {
  background: url(../assets/images/tum-urunler/urunlerimiz_tabela.png) no-repeat;
  content: "";
  display: block;
  width: 500px;
  height: 66px;
  position: absolute;
  left: 6px;
  top: -8px;
}

.side_category_menu li:after {
  content: "";
  width: 240px;
  height: 3px;
  background: url(../assets/images/tum-urunler/side_item_border.png) no-repeat;
  display: block;
  margin: 4px 0;
}

.side_category_menu li a {
  color: #b67646;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 6px 0;
  font-size: 19px;
}

.side_category_menu li a:hover {
  color: #738638;
}

body {
  line-height: 1.42857143;
  font-family: kg_turning_tablesregular, sans-serif;
}

.product-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.product-list-top img {
  width: 100%x;
  margin-left: -70px;
  margin-top: 20px;
}
</style>
