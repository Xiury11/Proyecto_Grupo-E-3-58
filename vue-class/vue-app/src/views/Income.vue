<template>
    <div>
            <!-- ======= Features Section INGRESOS ======= -->
        <section id="Ingresos" class="hero d-flex align-items-center">
        <div class="container">
            <header class="section-header">
            <h1>Ingresos</h1>
            </header>

            <div class="row">

            <div class="col-lg-6">
                <h1>Datos personales </h1>
                <h2>Nombre:</h2>
                <h2>Apellido:</h2>
                <h2>Teléfono:</h2>
                <h2>Presupuesto actual:</h2>
            </div>

            <div class="col-lg-6 ">
                <form action="forms/notify.php" method="post" role="form" class="php-email-form">
                </form>
                <div class="container overflow-hidden">
                    <div class="col-md-6 ">
                    <input type="number" name="ingreso" class="form-control" id="ingreso" placeholder="Valor del ingreso" required>
                    </div>
                    <div class="col-md-6 ">
                    <input type="text" name="desc_ingreso" class="form-control" id="desc_ingreso" placeholder="Descripción del ingreso" required>
                    </div>
                    <div class="col-md-6 ">
                    <select  id="clasificacion_ingreso">
                        <option>Salario</option>
                        <option>Arriendo</option>
                        <option>Otro</option>
                    </select>
                    </div>
                    <div class="col-md-6 "> 
                    <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
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