<template>
  <body>
    <div class="main">
      <div class="inner-main">
        <div class="uye-olun">
          <h2 class="uye-olun-baslik-1">Üye Olun</h2>
          <div class="uye-olun-img">
            <img src="../assets/images/uye-olun/brown_line.png" /><br /><br /><br /><br />
          </div>
          <h4 class="uye-olun-baslik-2">Kişisel Bilgilerim</h4>

          <div class="uye-olun-kart">
            <form id="myform">
              <div class="inputlar">
                <label for="FirstName">Adı:</label><br />
                <input type="text" name="f-name" id="f-nameID" required />
                <br />
                <span class="required-1">*</span><br />
              </div>

              <div class="inputlar">
                <label for="LastName">Soyadı:</label><br />
                <input type="text" required />
                <br /><br />
                <span class="required-2">*</span>
              </div>

              <div class="inputlar" id="myform">
                <label for="Email">E-Posta Adresi:</label><br />
                <input type="text" required />
                <br /><br />
                <span class="required-3">*</span>
              </div>

              <div class="sifre">
                <div class="inputlar">
                  <label for="Password">Şifre:</label><br />
                  <input type="password" required />
                  <br /><br />
                  <span class="required-4">*</span>
                </div>

                <div class="inputlar">
                  <label for="ConfirmPassword">Şifre (tekrar):</label><br />
                  <input type="password" required />
                  <br /><br />
                  <span class="required-5">*</span>
                </div>
              </div>

              <div class="en-alt">
                <input type="checkbox" required />
                <label for="Newsletter">Beni haber grubuna ekle</label>

                <br /><br />

                <input type="checkbox" required />
                <span
                  >Kişisel Verilerin Korunması -
                  <span style="text-decoration: underline"
                    >Aydınlatma Metnini</span
                  > </span
                ><br />
                <span>Onaylıyorum</span>

                <br /><br /><br />

                <input type="checkbox" required />
                <label for="accept-privacy-policy"
                  >Gizlilik koşullarını okudum.</label
                >
                <span>Kabul ediyorum.</span>

                <br /><br /><br />

                <input
                  type="submit"
                  id="register-button"
                  class="uye-olun-buton"
                  value="Kaydet"
                  name="register-button"
                  form="myform"
                />
              </div>
            </form>
          </div>
        </div>

        <div class="zaten-uye-misin">
          <div class="zaten-uye-misin-kart">
            <div class="zaten-uye-misin-bilgi">
              <h3>Hasanbey.com'a üye olduğunuzda;</h3>
              <p>
                Siparişlerinizin durumunu takip edebilir,<br />
                üyelerimize özel kampanya ve indirimlerden yararlanabilirsiniz.
              </p>
              <p>
                Ayrıca indirim, yeni sezon mahsulleri ve kampanyalardan
                e-bülten<br />
                yoluyla öncelikli olarak haberdar olabilirsiniz.
              </p>
            </div>

            <div class="zaten-uye-misin-img">
              <img src="../assets/images/uye-olun/register_icons.png" />
            </div>

            <div class="zaten-uye-misin-buton">
              <h4>Zaten üye misiniz?</h4>
              <a href="uye-girisi-page.html">
                <input class="giris-yap" type="button" value="Giriş Yap >" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "SignUp",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main{
    margin-top: -40px;
    margin-left: -5px;
    margin-right: -10px;
    height: 1100px;
    margin-bottom: -100px;
  
    background: url(../assets/images/uye-olun/login_bg.jpg) no-repeat left;
    background-size: 2000px;
}

.inner-main{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1200px;
    margin-left: 100px;
    margin-right: 100px;
}

.uye-olun{
    margin-top: 140px;
    margin-left: 100px;
    height: 800px;
    width: 445px;
    background-color: #fff;
    display: inline-block;
    position: relative;
}

.zaten-uye-misin{
    margin-left: 60px ;
    margin-top: 140px;
    width: 624px;
    height: 520px;
    background-color: #fff;
    display: inline-block;
    position: relative;
}

.zaten-uye-misin-kart{
    margin-left: 80px;
    margin-top: 35px;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
}

.zaten-uye-misin-bilgi h3{
    font-size: 30px;
    color: #d53235;
}

.zaten-uye-misin-bilgi p{
    font-family: Georgia,sans-serif;
    color: #886f5d;
    text-align: left;
    font-size: 14px;
}

.zaten-uye-misin-img img{
    margin-top: 20px;
    width: 400px;
}

.zaten-uye-misin-buton h4{
    margin-top: 10px;
    margin-left: 140px;
    font-size: 18px;
    color: #b76f3b;
}

.giris-yap{
    cursor: pointer;
    background: #de454b;
    border: 0px;
    margin-left: 140px;
    width: 160px;
    height: 50px;
    color: #fff!important;
    font-family: kg_turning_tablesregular,sans-serif;
}

.giris-yap:hover{
    background: #bf3b3f;; 
    border: 0px;
    margin-left: 140px;
    width: 160px;
    height: 50px;
    color: #fff!important;
    font-family: kg_turning_tablesregular,sans-serif;
}

.uye-olun-baslik-1{
    color: #b76f3b;
    margin-top: -40px;
    margin-left: 160px;
}

.uye-olun-img{
    margin-top: -20px;
    margin-left: 100px;
}

.uye-olun-baslik-2{
    color: #b76f3b;
    margin-top: -40px;
    margin-left: 150px;
}

.uye-olun-kart{
    margin-top: 25px;
    margin-left: 70px;
}

.inputlar label{
    display: block;
    font-family: kg_turning_tablesregular, sans-serif;
    color: rgb(213, 50, 53);
    text-align: left;
    font-weight: bold;
}

.inputlar input{
    background-color: rgb(234, 230, 220);
    box-shadow: rgba(0, 0, 0, 0.03) 2px 3.464px 0px 0px inset;
    width: 290px;
    height: 25px;
    color: rgb(131, 105, 87);
    font-family: Georgia, "Times New Roman", Times, serif;
    border-radius: 2px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding: 8px;
}

.required-1{
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 70px;
    right: 70px;
    color: rgb(0, 0, 0);
}
.required-2{
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 165px;
    right: 70px;
    color: rgb(0, 0, 0);
}
.required-3{
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 260px;
    right: 70px;
    color: rgb(0, 0, 0);
}
.required-4{
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 355px;
    right: 70px;
    color: rgb(0, 0, 0);
}
.required-5{
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 460px;
    right: 70px;
    color: rgb(0, 0, 0);
}

.en-alt label{
    font-weight: 100;
    font-family: Georgia,'Times New Roman',Times,serif;
    color: #886f5d!important;
    font-size: 13px;
}

.en-alt span{
    font-weight: 100;
    font-family: Georgia,'Times New Roman',Times,serif;
    color: #886f5d!important;
    font-size: 13px;
}

.uye-olun-buton{
    cursor: pointer;
    background: #73a12e;
    border: 0;
    width: 279px;
    height: 46px;
    color: #fff;
    font-size: 15px;
}

.uye-olun-buton:hover{
    cursor: pointer;
    background: #62802a;
    border: 0;
    width: 279px;
    height: 46px;
    color: #fff;
    font-size: 15px;
}

</style>
