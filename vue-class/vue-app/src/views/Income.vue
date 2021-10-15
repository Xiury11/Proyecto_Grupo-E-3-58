<template>
    <div>
        <nav id="navbar" class="navbar">
        <ul>
          
        
          <li class="dropdown"><a href=""><span>Cuenta</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/expenses">Gastos</a></li>
              <li><a href="/modificar">Modificar</a></li>
              <li><a href="/">Cerrar Sesión</a></li>
            </ul>
          </li>
          
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
            <!-- ======= Features Section INGRESOS ======= -->
        <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
            <header class="section-header">
            <h1>Ingresos</h1>
            </header>

            <div class="row">

            <div class="col-lg-6">
                <h1>Datos personales </h1>
                <h2>Nombre: </h2>
                <td>Oscar</td>
                <h2>Apellido:</h2>
                <h2>Teléfono:</h2>
                <h2>Presupuesto actual:</h2>
            </div>

            <div class="col-lg-6 ">
                <form action="forms/notify.php" method="post" role="form" class="php-email-form">
                </form>
                <div class="container overflow-hidden">
                    <div class="col-md-6 ">
                    <input type="number" name="valor" class="form-control" id="valor" placeholder="Valor del ingreso" v-model="form.valor" required>
                    </div>
                    <div class="col-md-6 ">
                    <input type="text" name="descripcion" class="form-control" id="descripcion" placeholder="Descripción del ingreso" v-model="form.descripcion" required>
                    </div>
                    <div class="col-md-6 ">
                    <select  id="clasificacion" v-model="form.clasificacion">
                        <option>Salario</option>
                        <option>Arriendo</option>
                        <option>Otro</option>
                    </select>
                    </div>
                    <div class="col-md-6 "> 
                    <a href="/ingresos" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center" type="bitton" @click="ingreso">
                        <span>Agregar Ingreso</span>
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
                descripcion:'',
                clasificacion:'',
           }
        }
    },
    methods: {
        ingreso(){

                let formData = new URLSearchParams()
                formData.append('valor', this.form.valor)
                formData.append('descripcion', this.form.descripcion)
                formData.append('clasificacion', this.form.clasificacion)
                axios.post('http://localhost:3000/ingreso',formData,{
                    headers:{
                        "Access-Control-Allow-Methods":"POST"
                    }
                })                
                .then((response)=>{
                    //console.log(response);
                    localStorage.setItem('token',response.data.token);
                    this.$router.push('/ingresos');
                })
        },
    }
}
</script>