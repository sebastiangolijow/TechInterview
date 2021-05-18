<template>
  <div id="app">
     <router-link to="/" class='link'>Logg in With Solo Data API</router-link>
     <router-link to="/register" class='link'> Register</router-link>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link{
  margin:10px;
  position:relative;
  left:1rem;
  text-decoration:none;
  color:black;

}
</style>
