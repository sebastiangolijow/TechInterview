<template>
  <b-card no-body class="card-profile" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="3" class="order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <img id='img1' v-bind:src="require('../assets/profile.jpeg')" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>
   <div class="text-center">
        <h5 class="h3">
         <h1>Sebastian Golijow's Portfolio</h1>
        </h5>
        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-2"></i>Barcelona, Spain
        </div>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>Full Stack Developer - Big Data Scientist.
        </div>
        <div>
          <i class="ni education_hat mr-2"></i>Henry Bootcamp, Europen School of Business of Barcelona, Harvard Univeristy.
        </div>
        <hr class="my-4">
        <p>I am a passionate Developer.
         I really like doing full stack projects. I feel confortable using technologies such as React-Redux and NodeJS with Express, but if you give me a few weeks I think I can manage any JavaScript framework.
         My primary language is JavaScript, but I also have knowledge on Python and C because of my past on the Big Data and Business Intelligence field. Nowadays I can combine this knowledge by combining web development with web positioning.</p>
      </div>
    <b-card-header class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
      <div class="d-flex justify-content-between">
      <div class="profile">
        <div class="social-links mt-3 text-center">
          <a href="https://www.instagram.com/sgolijow/" class="instagram"><img class='img2' v-bind:src="require('../assets/insta.png')" rounded="circle" /></a>
          <a href="https://github.com/sebastiangolijow" class="github"><img class='img2' v-bind:src="require('../assets/github.png')" rounded="circle" /></a>
          <a href="https://www.linkedin.com/in/sebastian-golijow-41a55a1b2/" class="linkedin"><img class='img2' v-bind:src="require('../assets/link.png')" rounded="circle" /></a>
        </div>
      </div>
      </div>
    </b-card-header>


  </b-card>
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
</style>