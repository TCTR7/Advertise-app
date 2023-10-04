<template>
  <div class="app-wrapper">
    <div class="app">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  /* font-family: "Quicksand", sans-serif; */
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 90%;
  width: 95%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  z-index: 1;
  margin: 0 auto;
  position: relative;
  background: #fff;
  padding: 0;
}

.workshome {
  display: block;
}
</style>
