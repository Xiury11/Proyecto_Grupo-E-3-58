<template>
    <div>
        <section id="password" class="hero d-flex align-items-center">
            <div class="container">
            <div class="row">
                <div class="col-lg-6 d-flex flex-column justify-content-center">
                    <form action="forms/notify.php" method="post" role="form" class="php-email-form">
                    </form>
                
                    <div class="container overflow-hidden">

                    <div class="col-md-6 form-group pr-md-1">
                        <h3>Ingrese su correo electrónico</h3>
                        <input type="text" name="name" class="form-control" id="email" placeholder="*******@mail.com" required>
                    </div>

                    <div class="col-md-6 form-group pr-md-1">
                        <h5>Se le enviara un correo con un codigo para que pueda reestablecer su contraseña</h5>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Digite el codigo" required>
                    </div>
            
                    <div class="col-lg-6 ">
                                    
                    <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Confirmar codigo</span>
                    </a>
                    
                    <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Reenviar codigo</span>
                    </a>

                    <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
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

         </section>
    </div>
</template>