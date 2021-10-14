<template>
    <div>
        <section id="hero" class="hero d-flex align-items-center">

            
            <div class="container">
             <div class="row">
                <div class="col-lg-6 d-flex flex-column justify-content-center">
                    <form action="forms/notify.php" method="post" role="form" class="php-email-form">
                    </form>
                
                    <div class="container overflow-hidden">

                    
                    <div class="col-md-6 form-group pr-md-1">
                        <h3>Ingrese su nueva contraseña</h3>
                        <input type="text" name="name" class="form-control" id="email" placeholder="Nueva contraseña" required>
                    </div>

                    <div class="col-md-6 form-group pr-md-1">
                        <h3>Confirme su nueva contraseña</h3>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Nueva contraseña" required>
                    </div> 
                
                    <div class="col-lg-6 ">
                                    
                    <a href="#" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Reestablecer</span>
                    </a>
                                
                    <a href="/" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Salir</span>
                    </a>

                    </div>
                    </div>
                    </div>
                            <div class="col-lg-6 hero-img">
                         <img src="@/assets/img/Logo_app.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

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