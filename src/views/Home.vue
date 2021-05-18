<template>
    <div class='home'>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form v-on:submit.prevent='login '>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name"  v-model='usuario'>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password" v-model='password'>
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
                  <button type="submit" class="btn btn-secondary">Register</button>
               </form>
               <div class="alert alert-dark" role="alert" v-if="error">
                     {{error_msg}}
                </div>
            </div>
         </div>
           <div class="sidenav">
         <div class="login-main-text">
               <img id='img1' v-bind:src="require('../assets/bg_1_Tavola disegno 1.jpg')" alt="">
         </div>
      </div>
      </div>

    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:'Home',
    components: {

    },
    data: function(){
        return {
            usuario: '',
            password:'',
            error:false,
            error_msg:'',

        }
    },
    methods:{
        login(){
        let json = {
            'usuario' : this.usuario,
            'password' : this.password
        };
        console.log('aca')
         axios.post('https://api.solodata.es/auth', json)
        .then(data => {
            if(data.data.status == 'ok'){
                alert('logged')
            } else {
                this.error = true
                this.error_msg = data.data.result.error_msg;
            }
        }).catch(e => console.log(e))
}}
}
</script>

<style scoped>
body {
    font-family: "Lato", sans-serif;
}

#img1{
height:20rem;
width:100%;
}

.main-head{
    height: 150px;
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    background-color: rgb(29, 28, 28);
    overflow-x: hidden;
    padding-top: 20px;
}


.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%; 
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 80%;
    }

    .register-form{
        margin-top: 20%;
    }
}


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>