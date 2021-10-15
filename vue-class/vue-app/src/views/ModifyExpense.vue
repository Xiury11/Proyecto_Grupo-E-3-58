<template>
    <div>
      <nav id="navbar" class="navbar justify-content-end">
        <ul class = "dropdown-menu pull-left">
          
        
          <li class="dropdown"><a href=""><span>Cuenta</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/ingresos">Ingresos</a></li>
              <li><a href="/expenses">Gastos</a></li>
              <li><a href="/">Cerrar Sesión</a></li>
            </ul>
          </li>
          
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
         <!-- ======= Features Section MODIFICAR GASTO ======= -->    
    <section id="Modificar" class="hero d-flex align-items-center">
      <div class="container">
        <header class="section-header">
          <h1>Modificar gasto</h1>
        </header>

        <div class="row">

<!--          <div class="col-lg-6">
            <h1>Datos personales </h1>
            <h2>Nombre:</h2>
            <h2>Apellido:</h2>
            <h2>Teléfono:</h2>
            <h2>Presupuesto actual:</h2>
          </div>-->

<!--          <div class="col-lg-6 "> -->
              <form action="forms/notify.php" method="post" role="form" class="php-email-form">
              </form>
                <div class="container overflow-hidden">
                <!--  <div class="col-md-6 ">
                    <select  id="gasto_mod">
                      <option>Gasto1</option>
                      <option>Gasto2</option>
                      <option>Gasto3</option>
                    </select>
                  </div>
                  <div class="col-md-6 ">
                    <input type="number" name="valor_mod" class="form-control" id="valor_mod" placeholder="valor a modificar" required>
                  </div>
                  <div class="col-md-6 ">
                    <input type="text" name="desc_mod" class="form-control" id="desc_mod" placeholder="Descripción" required>
                  </div>-->
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Clasificación</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in gastos" :key="index">
                        <th scope="row">{{item._id}}</th>
                        <td>{{item.valor}}</td>
                        <td>{{item.clasificacion}}</td>
                        <td>{{item.descripcion}}</td>
                        <td>{{item.tipo}}</td>
                        <td>{{item.fecha}}</td>
                        <td>
                          
                          <button type="button" class="btn-danger mx-5" @click="eliminarGasto(item._id)">Eliminar</button>
                          <button class="btn-warning mx-2" @click="modificarGasto(item._id)">Modificar</button>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                <!--</div>-->
          </div>         
        </div> <!-- / row -->       
      </div> 
    </section><!-- End Features Section -->
    </div>
</template>

<script>
//import axios from 'axios'

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
            },
            gastos:[]
        }
    },

    created(){
      this.listargastos();
      //this.eliminarNota();
    },

    methods: {
        
        listargastos(){
          this.axios.get('http://localhost:3000/gasto')
          .then(res=>{
            this.gastos=res.data;                
          })
          .catch(e=>{
            console.log(e.response)
          })
        },

        eliminarNota(id){
          this.axios.delete(`/gasto/${id}`)
          .then(res=>{
            const index = this.gastos.findIndex(item=> item._id===res.data.id);
            this.gastos.splice(index, 1)

          })
          .catch(e=>{
            console.log(e.response)
          })
  
        },
    }
}
</script>