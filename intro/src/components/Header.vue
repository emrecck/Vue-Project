<template>
     <div class="col-sm-12 banner px-0">

        <div class="top-banner col-sm-12">
            <div class="container">
                <div class="row">

                    <div class="col-sm-6 slogan">
                        <p>Hasanbey Çiftliği'nden taze taze, doğal sebze, meyve, katkısız reçel, salça, turşu...</p>
                    </div>

                    <div class="col-sm-4 d-flex justify-content-center uye-islemleri">
                        <a href="#" class="kayit text-decoration-none">
                            <i class="fas fa-angle-right text-danger icon"></i>
                            Üye Olun</a>
                        <a href="#" class="giris ml-5 text-decoration-none">
                            <i class="fas fa-angle-right text-danger icon"></i>
                            Üye Girişi</a>
                    </div>

                     <div class="col-sm-2 sepet">
                        <div class="dropdown">
                            <button class="dropdown-buton">
<<<<<<< HEAD
                                <img src="../assets/images/banner/red_basket_icon.png" alt="">
                            </button>
=======
                                <img
                                    src="../assets/images/banner/red_basket_icon.png" alt="">
                            </button>

>>>>>>> 5a632dc4d9aae14f3034b93193eb523c6f1f98f2
                        </div>
                    </div> 
                </div>
            </div>
        </div>



        <div class="bottom-banner col-sm-12">
                <div class="container pb-2 temp">

                    <div class="col-sm-12 logo d-flex justify-content-center pt-5">
                        <a href="https://www.hasanbey.com/tr/"><img src="../assets/images/banner/logo.png"></a>
                    </div>
    
                     <div class="arama-bar row">
                        <div class="bar col px-0">
                            <input type="text" placeholder="Yumurta, Domates, Süt...">
                        </div>
                        <div class="buton col px-0">
                            <button type="button"><img src="../assets/images/banner/red_magnifier_icon.png"></button>
                        </div>
                    </div> 
    
                </div>
                <!-- <nav class="kategoriler ">
                    <div class="container ">
                        <ul class="nav d-flex justify-content-around my-5">
                            <li class="nav-items"><a class="" href="#"><div class="anasayfa"></div></a></li>
                            <li class="nav-items mt-2"><a class="" href="#"><div class="ciftlik"></div></a></li>
                            <li class="nav-items mt-2"><a class="" href="#"><div class="tum-urunler"></div></a></li>
                            <li class="nav-items mt-2"><a class="" href="#"><div class="domates-biber"></div></a></li>
                            <li class="nav-items mt-2"><a class="" href="#"><div class="sut-peynir"></div></a></li>
                            <li class="nav-items mt-2"><a class="" href="#"><div class="yumurta-sucuk"></div></a></li>
                            <li class="nav-items mt-2"><a class="" href="#"><div class="salca-tursu"></div></a></li>
                            <li class="nav-items mt-2"><a class="" href="#"><div class="zeytin-zeytinyagi"></div></a></li>
                            <li class="nav-items mt-2"><a class="" href="#"><div class="recel-bal"></div></a></li>
                        </ul>
                    </div>
                </nav> -->
        </div>


    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
    display: block;
}

.top-banner{
    background: url(../assets/images/banner/page_top_bg.png);
    height: 35px;
}
.slogan p{
    color: inherit;
    font-size: 1.3rem;
    font-weight:bold;
    line-height:40px;
}
.uye-islemleri{
    line-height:40px;
}
.kayit{
    font-weight: bold;
    font-size: 1.4rem;
    color: rgb(23, 43, 123);
    opacity:0.8
}
.kayit:hover{
    opacity:1;
    color:rgb(23, 43, 123);
}
.giris{
    font-weight: bold;
    font-size: 1.4rem;
    color: #d53235;
}
.giris:hover{
    opacity: 0.8;
    color: #d53235;
}
.icon{
    font-size:1.2rem;
}
.dropdown-buton{
    cursor: pointer;
    background: transparent;
    border: 0px;
    padding: 5px 10px;
}

<<<<<<< HEAD
=======
.dropdown-buton:hover{
    cursor: pointer;
    background: transparent;
    border: 0px;
}

>>>>>>> 5a632dc4d9aae14f3034b93193eb523c6f1f98f2
.dropdown-buton img{
    width: 25px;
}
<<<<<<< HEAD

#drop-content{
    position: absolute;
    z-index: 1;
}

#drop-content a{
    cursor: text;
    margin-top: -2px;
    margin-left: -350px ;
    display: block;
    font-weight: bold;
    font-size: 17px;
    background: #fff;
    color: black;
    text-decoration: none;
    padding: 30px 90px;
}

=======
>>>>>>> 5a632dc4d9aae14f3034b93193eb523c6f1f98f2
.bottom-banner{
    background: url(../assets/images/banner/nav_bg.png);
}
.temp{
    position: relative;
}
.arama-bar{
    position: absolute;
    right: 100px;
    top:50px;
}
.bar input{
    width: 180px;
    height: 27px;
    border: 1px solid #eee;
    background: url(../assets/images/banner/search_input_bg.png);
    border-bottom: 1px solid #dcdcdc;
    color: #d53235;
    padding:5px 8px;
}
.bar input[type="text"] ::placeholder{
    color: #d53235;
}
.buton button{
    border: 0px;
    background-color: white;
    width: 30px;
    height: 27px;
}
.buton img{
    max-width: 100%;
    width: 15px;
    height: 15px;
}
<<<<<<< HEAD

=======
>>>>>>> 5a632dc4d9aae14f3034b93193eb523c6f1f98f2
</style>
