<template>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  </head>
  <body>
  <div id="nav" class="navbar-menu py-6 mx-6">
    <div class="navbar-start">
      <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
      </a>  
      <a class="navbar-item" href="http://localhost:8080/#/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/512px-Home_Icon.svg.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
      </a>  
    </div>
</div>
  <section class="section">
    <div class="container">
      <h1 class="title is-size-2">
        <strong class=" py-6 my-6 is-italic">Sebastian Golijow's Portfolio</strong>
        <h2 class="is-size-3 has-text-black">Full Stack Developer - Big Data Scientist.</h2>
        <h2 class="is-size-4"> Barcelona, Spain </h2>
        <h3 class="is-size-5"> Henry Bootcamp, Europen School of Business of Barcelona, Harvard Univeristy. </h3>
      </h1>
      <p class="py-6 my-6 subtitle has-text-black is-italic">
         I am a passionate Developer.
         I really like doing full stack projects. I feel confortable using technologies such as React-Redux and NodeJS with Express, but if you give me a few weeks I think I can manage any JavaScript framework.
         My primary language is JavaScript, but I also have knowledge on Python and C because of my past on the Big Data and Business Intelligence field. Nowadays I can combine this knowledge by combining web development with web positioning.
      </p>
       <div class="profile">
        <div class="social-links mt-3 text-center">
          <a href="https://www.instagram.com/sgolijow/" class="instagram"><img class='img2' v-bind:src="require('../assets/insta.png')" rounded="circle" /></a>
          <a href="https://github.com/sebastiangolijow" class="github"><img class='img2' v-bind:src="require('../assets/github.png')" rounded="circle" /></a>
          <a href="https://www.linkedin.com/in/sebastian-golijow-41a55a1b2/" class="linkedin"><img class='img2' v-bind:src="require('../assets/link.png')" rounded="circle" /></a>
          <a href="sebastiangolijow.github.io/" class="linkedin"><img class='img2' v-bind:src="require('../assets/portfolio.jpg')" rounded="circle" /></a>

        </div>
         </div>

    </div>
  </section>
  </body>
</html>
</template>
<script>
export default {
    name: 'Logged'
};
</script>
<style>
#img1{
    height:10rem;
    width:10rem;
}

.img2{
    height:5rem;
    width:5rem;
}

.title{
  display: flex;
  flex-direction: column;
  margin: 5px
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
 
}

body {
  background: url('https://lh3.googleusercontent.com/t8jzr310rC5obgwRHRljXVYqpVt_LwPzoBoBknYxU9QH4sDPlItjYN_IGNbDIaK6d89pVC7XxGM87-QypJ9CmgHXSA=w640-h400-e365-rj-sc0x00ffffff');
   background-size: cover;
  }

</style>