<template>
    <div>
      <nav id="navbar" class="navbar justify-content-end">
        <ul class = "dropdown-menu pull-right">
          
        
          <li class="dropdown"><a href="#cuenta"><span>Cuenta</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/ingresos">Ingresos</a></li>
              <li><a href="/modificar">Modificar</a></li>
              <li><a href="/">Cerrar Sesión</a></li>
            </ul>
          </li>
          
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
         <!-- ======= Features Section GASTOS ======= -->
    <section id="gastos" class="hero d-flex align-items-center">
      <div class="container">
        <header class="section-header">
          <h1>Gastos</h1>
        </header>

        <div class="row">

          <div class="col-lg-6">
            <h1>Ultimos gastos </h1>
            <h2>Gasto 1</h2>
            <h2>Gasto 2</h2>
            <h2>Gasto 3</h2>
          </div>

          <div class="col-lg-6 ">
              <form action="forms/notify.php" method="post" role="form" class="php-email-form">
            </form>
                <div class="container overflow-hidden">
                <div class="col-md-6 ">
                  <input type="number" name="gasto" class="form-control" id="gasto" placeholder="Valor" required>
                </div>
                <div class="col-md-6 ">
                  <select  id="clasificacion">
                    <option>Alimentación</option>
                    <option>Vivienda</option>
                    <option>Servicios</option>
                    <option>Transporte</option>
                    <option>Aseo</option>
                    <option>Antojos</option>
                    <option>Otros</option>
                  </select>
                </div>
                <div class="col-md-6 ">
                  <input type="texto" class="form-control" name="descripcion" id="descripcion" placeholder="Agregue una descripción" required>
                </div>
                <div class="col-md-6 ">
                  <select  id="tipo_gasto">
                    <option>Fijo</option>
                    <option>Variable</option> 
                  </select>
                </div>

                <div class="col-md-6 ">
                  <input type="date" class="form-control" name="fecha" id="fecha" placeholder="Fecha" required>
                </div>
                
                <div class="col-md-6 "> 
                  <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Agregar gasto</span>
                  </a>
                </div>   
              </div>
          </div>         
        </div> <!-- / row -->       
      </div> 
    </section><!-- End Features Section -->
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