<template>
  <div id="app">
    <div id="nav">
<<<<<<< HEAD
      <router-link to="/">Cart</router-link> |
      <router-link to="/about">About</router-link>
=======
      <router-link to="/">BillView</router-link> | 
      <router-link to="/cartview">CartView</router-link>
>>>>>>> 39368673888717d1b0fea344aa090a044866d0e6
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
