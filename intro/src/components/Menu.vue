<template>
  <body>
    <div class="tum-urunler-main">
      <div>
        <div>
          <ul class="side_category_menu">
            <li><a href="https://www.hasanbey.com/tr/aile-boyu">Aile Boyu</a></li>
            <li><a href="https://www.hasanbey.com/tr/tum-urunler">Tüm Ürünler</a></li>
            <li><a href="https://www.hasanbey.com/tr/domates-biber">Sebze & Meyve</a></li>
            <li><a href="https://www.hasanbey.com/tr/sut-peynir">Süt & Peynir</a></li>
            <li><a href="https://www.hasanbey.com/tr/yumurta">Yumurta & Sucuk</a></li>
            <li><a href="https://www.hasanbey.com/tr/salca-tursu">Salça & Turşu</a></li>
            <li><a href="https://www.hasanbey.com/tr/zeytin-zeytinyagi">Zeytin & Zeytinyağı</a></li>
            <li><a href="https://www.hasanbey.com/tr/recel-bal">Reçel & Bal</a></li>
            <li><a href="https://www.hasanbey.com/tr/sebzeler">Sebzeler</a></li>
            <li><a href="https://www.hasanbey.com/tr/ekmek">Ekmek</a></li>
            <li><a href="https://www.hasanbey.com/tr/meyveler">Meyveler</a></li>
            <li><a href="https://www.hasanbey.com/tr/hediye-paketleri">Hediye Paketleri</a></li>
            <li><a href="https://www.hasanbey.com/tr/paketler">Paketler</a></li>
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
