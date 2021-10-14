<template>
    <div>
      <nav id="navbar" class="navbar justify-content-end">
        <ul class = "dropdown-menu pull-left">
          
        
          <li class="dropdown"><a href=""><span>Cuenta</span> <i class="bi bi-chevron-down"></i></a>
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
                  <input type="number" name="valor" class="form-control" id="valor" placeholder="Valor" v-model="form.valor" required>
                </div>
                <div class="col-md-6 ">
                  <select  id="clasificacion" v-model="form.clasificacion">
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
                  <input type="texto" class="form-control" name="descripcion" id="descripcion" placeholder="Agregue una descripción" v-model="form.descripcion" required>
                </div>
                <div class="col-md-6 ">
                  <select  id="tipo" v-model="form.tipo">
                    <option>Fijo</option>
                    <option>Variable</option> 
                  </select>
                </div>

                <div class="col-md-6 ">
                  <input type="date" class="form-control" name="fecha" id="fecha" placeholder="Fecha" v-model="form.fecha" required>
                </div>
                
                <div class="col-md-6 "> 
                  <a href="/expenses" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center" type="bitton" @click="gasto">
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
                valor:'',
                clasificacion:'',
                descripcion:'',
                tipo:'',
                fecha:'',
            }
        }
    },
    methods: {
        gasto(){

                let formData = new URLSearchParams()
                formData.append('valor', this.form.valor)
                formData.append('clasificacion', this.form.clasificacion)
                formData.append('descripcion', this.form.descripcion)
                formData.append('tipo', this.form.tipo)
                formData.append('fecha', this.form.fecha)
                axios.post('https://gastos1.herokuapp.com/gasto',formData,{
                    headers:{
                        "Access-Control-Allow-Methods":"POST"
                    }
                })                
                .then((response)=>{
                    //console.log(response);
                    localStorage.setItem('token',response.data.token);
                    this.$router.push('/expenses');
                })
        }
    }
}
</script>