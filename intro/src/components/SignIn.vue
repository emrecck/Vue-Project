<template>
<body>
    

    <div class="main-uye-girisi">
        <div class="hosgeldiniz">
            <form id="myform2">
            <h2>HOŞ GELDİNİZ. LÜTFEN GİRİŞ YAPINIZ !</h2>
            <div class="uye-girisi-img"><img src="../assets/images/uye-olun/brown_line.png"></div>
            
                <div class="email">
                    <label for="Email">E-Posta Adresi:</label><br>
                    <input type="text" required>
                    <span class="required-3">*</span>
                    
                </div>

                <div class="sifre">
                    <label for="Password">Şifre:</label><br>
                    <input type="password" required>
                    <span class="required-4">*</span>
                
                </div>
            

            <div class="beni-hatırla">

                <input id="BeniHatırla" name="BeniHatırla" type="checkbox" value="true">
                <input name="BeniHatırla" type="hidden" value="false">
                <label for="BeniHatırla">Beni Hatırla</label>
                <span class="forgot-password">
                    <a href="https://www.hasanbey.com/tr/passwordrecovery">Şifremi Unuttum</a>
                </span>
            </div>

            <div class="giris-facebook">
                <input class="giris-buton" type="submit" value="GİRİŞ YAP" form="myform2">
                <p>veya</p>
                <span class="facebook"><a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=690921197722449&kid_directed_site=0&app_id=690921197722449&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D690921197722449%26redirect_uri%3Dhttps%253A%252F%252Fwww.hasanbey.com%252Fplugins%252FexternalauthFacebook%252Flogincallback%252F%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D0174ff7c-6d03-4dc6-81f6-094306dba86f&cancel_url=https%3A%2F%2Fwww.hasanbey.com%2Fplugins%2FexternalauthFacebook%2Flogincallback%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=page&locale=en_GB"> Facebook İle Bağlan</a></span>
            </div>
        </form>
        </div>
        <div class="uye-olun">
            <span>Henüz Üye Değilim?</span>
            <a href="uye-olun-page.html">
                <input type="button" class="uye-olun-buton" value="Üye Olun">
            </a>
            
        </div>
    </div>
    </body>
</template>

<script>
export default {
  name: 'SignIn',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-uye-girisi{
    margin-top: -40px;
    height: 1100px;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: -100px;
    background: url(../assets/images/uye-olun/login_bg.jpg) no-repeat left;
    background-size: 2000px;
}

.hosgeldiniz{
    width: 500px;
    height: 620px;
    margin-top: 140px;
    margin-left: 470px;
    background-color: #fff;
    display: inline-block;
    position: relative;
}

.hosgeldiniz h2{
    color: #b76f3b;
    margin-top: -42px;
    margin-left: 30px;
    font-size: 22px;
}

.uye-girisi-img{
    position: relative;
    margin-top: -21px;
    margin-left: 142px;
}

.email{
    margin-top: 80px;
    margin-left: 90px;
}

.email label{
    display: block;
    font-family: kg_turning_tablesregular, sans-serif;
    color: rgb(213, 50, 53);
    text-align: left;
    font-weight: bold;
}

.email input{
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

.sifre{
    margin-top: 30px;
    margin-left: 90px;
}

.sifre label{
    display: block;
    font-family: kg_turning_tablesregular, sans-serif;
    color: rgb(213, 50, 53);
    text-align: left;
    font-weight: bold;
}

.sifre input{
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

.beni-hatırla{
    margin-top: 30px;
    margin-left: 80px;
}

.beni-hatırla span{
    margin-left: 130px;
}

.beni-hatırla span a{
    color: #1e4689;
    font-family: Georgia,'Times New Roman',Times,serif;
    font-size: 13px;
    font-style: italic;
    text-decoration: underline;
    text-align: right;
}

.beni-hatırla label{
    font-size: 12px;
    font-family: Georgia,'Times New Roman',Times,serif;
    color: #886f5d;
}

.giris-facebook{
    margin-top: 50px;
    margin-left: 90px;
}

.giris-buton{
    cursor: pointer;
    border: 0;
    background: #73a12e;
    color: #fff;
    font-family: kg_turning_tablesregular,sans-serif;
    font-size: 14px;
    font-weight: bold;
    width: 187px;
    height: 46px;
}

.giris-buton:hover{
    cursor: pointer;
    border: 0;
    background: #62802a;
    color: #fff;
    font-family: kg_turning_tablesregular,sans-serif;
    font-size: 14px;
    font-weight: bold;
    width: 187px;
    height: 46px;
}

.giris-facebook p{
    margin-left: 75px;
    font-weight: bold;
    font-size: 18px;
    color: #5a5a5a;
}

.facebook a{
    margin-left: 0px;
    border-radius: 2px;
    background: #1e4689;
    color: #fff;
    font-family: kg_turning_tablesregular,sans-serif;
    text-align: center;
    padding: 16px 25px;
    display: inline-block;
    font-size: 14px;
    text-decoration: none;
}

.facebook a:hover{
    margin-left: 0px;
    border-radius: 2px;
    background: #2a5db1;
    color: #fff;
    font-family: kg_turning_tablesregular,sans-serif;
    text-align: center;
    padding: 16px 25px;
    display: inline-block;
    font-size: 14px;
    text-decoration: none;
}

.uye-olun{
    margin-top: 0px;
    margin-left: 470px;
    width: 500px;
    height: 40px;
    background: #f3eee8;
    padding: 15px 0;
    display: block;
}

.uye-olun span{
    margin-bottom: -100px;
    margin-left: 70px;
    color: #b76f3b;
    font-family: kg_turning_tablesregular,sans-serif;
    font-weight: bold;
}

.uye-olun-buton{
    margin-left: 20px;
    background: #dc4249;
    color: #fff;
    font-family: kg_turning_tablesregular,sans-serif;
    font-size: 13px;
    font-weight: bold;
    border: 0;
    width: 156px;
    height: 41px;
    cursor: pointer;
}

.uye-olun-buton:hover{
    margin-left: 20px;
    background: #bc2e35;
    color: #fff;
    font-family: kg_turning_tablesregular,sans-serif;
    font-size: 13px;
    font-weight: bold;
    border: 0;
    width: 156px;
    height: 41px;
    cursor: pointer;
    opacity: .7;
}
</style>
