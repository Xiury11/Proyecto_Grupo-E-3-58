<template>

    <div>
        <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <!-- <a href="index.html" class="logo d-flex align-items-center">
        <img src="@/assets/img/logo.png" alt="">
        <span>FlexStart</span>
      </a> -->
    </div>
  </header><!-- End Header -->

         <!-- ======= Register Section  REGISTRO NUEVO USUARIO ======= -->
    <section id="register" class="hero d-flex align-items-center">

      <div class="container">
        <h3>Canal de registro</h3>
        <div class="row">
          <div class="col-lg-6">
              <form action="forms/notify.php" method="post" role="form" class="php-email-form">
            </form>
            
              <div class="container overflow-hidden">
                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" v-model="form.name" required>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Apellidos" v-model="form.lastname" required>
                </div>
                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Correo electrónico" v-model="form.email" required>
                </div>
                <div class="col-md-6 ">
                  <input type="number" class="form-control" name="phone" id="phone" placeholder="Teléfono" v-model="form.phone" required>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" name="pass" id="password" placeholder="Contraseña" v-model="form.password" required>
                </div>
                <div class="col-md-6 ">
                  <input type="text" class="form-control" name="pass" id="pass" placeholder="Confirmar contraseña" required>
                </div>

                
            
              
                <div class="col-md-6 "> 
                <a href="/expenses" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center" type="bitton" @click="register">
                  <span>Crear cuenta</span>
                  
                </a>
                <a href="/" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Salir</span>
                </a>
              
              </div>
              
              
             
            </div>
          </div>
          <div class="col-lg-6 hero-img" >
            <img src="@/assets/img/Logo_app.png" class="img-fluid" alt="">
          </div>
        </div>
      </div>

    </section><!-- End Register Section -->
    
 
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  </div>
</template>
<style>

#hero{
        background: url(../assets/img/hero-bg.png) top center no-repeat;
    }
    #password{
        background: url(../assets/img/hero-bg.png) top center no-repeat;
    }
      .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  
    /*--------------------------------------------------------------
# Register
--------------------------------------------------------------*/
.register .content {
  background-color: #f6f9ff;
  padding: 40px;
}
.register h3 {
  font-size: 14px;
  font-weight: 700;
  color: #4154f1;
  text-transform: uppercase;
}
.register h2 {
  font-size: 24px;
  font-weight: 700;
  color: #012970;
}
.register p {
  margin: 15px 0 30px 0;
  line-height: 24px;
}
.register .btn-read-more {
  line-height: 0;
  padding: 15px 40px;
  
  border-radius: 4px;
  transition: 0.5s;
  color: #fff;
  background: #b3be10;
  box-shadow: 0px 5px 25px rgba(65, 84, 241, 0.3);
}
.register .btn-read-more span {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  display: flex;
  flex-wrap: wrap;
}
.register .btn-read-more i {
  margin-left: 5px;
  font-size: 18px;
  transition: 0.3s;
}
.register .btn-read-more:hover i {
  transform: translateX(5px);
}

.register .php-email-form input {
  border-radius: 50px;
  box-shadow: none;
  font-size: 14px;
  border: 0;
  padding: 0px 15px 2px 20px;
  width: 250px;
  height: 40px;
  margin: 0 8px;
}
</style>


<script>
import axios from 'axios'

export default {
    data() {
        return{
            form:{
                name:'',
                lastname:'',
                email:'',
                phone:'',
                password:''
//                image:''
            }
        }
    },
    methods: {
        register(){

                let formData = new URLSearchParams()
                formData.append('name', this.form.name)
                formData.append('lastname', this.form.lastname)
                formData.append('email', this.form.email)
                formData.append('phone', this.form.phone)
                formData.append('password', this.form.password)
//                formData.append('image', this.form.image)
                axios.post('https://gastos1.herokuapp.com/register',formData,{
                    headers:{
                        "Access-Control-Allow-Methods":"POST"
                    }
                })                
                .then((response)=>{
                    //console.log(response)
                    localStorage.setItem('token',response.data.token);
                    this.$router.push('/');
                })
                

        }
    }
}
</script>