<template>
    <div class='home'>
        <h1>Register</h1>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form v-on:submit.prevent='login '>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="aca"  v-model='usuario'>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password" v-model='password'>
                  </div>
                  <button type="submit" class="btn btn-black" @click="login()">Login</button>
                
               <button type="submit" class="btn btn-secondary" @click="register()"> Register</button>
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
export default {
    name:'Register',
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
         let user = window.localStorage.getItem('key')
         user = JSON.parse(user)
        json.usuario == user.usuario && json.password == user.password ? alert('logged') : alert('error')
},
        register(){
              let user = {
            'usuario' : this.usuario,
            'password' : this.password
        };
        window.localStorage.setItem('key', JSON.stringify(user))
        alert('registration successfull, now you can log in')
        }},
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