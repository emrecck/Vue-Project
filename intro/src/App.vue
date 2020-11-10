<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">BillView</router-link> |
      <router-link to="/cartview">CartView</router-link> |
      <router-link to="/signinview">SignInView</router-link> |
      <router-link to="/signupview">SignUpView</router-link> |
      <router-link to="/sliderview">SliderView</router-link> |
      <router-link to="/headerview">HeaderView</router-link> |
      <router-link to="/productsview">ProductsView</router-link> |
      <router-link to="/productview">ProductView</router-link> |
      <router-link to="/menuview">MenuView</router-link> |
      <router-link to="/navbarview">NavbarView</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Grandstander", cursive, sans-serif;
}
html {
  font-size: 10px;
  margin: 0;
  padding: 0;
}
body {
  background-color: #fffcf9 !important;
  color: #333;
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 100px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
