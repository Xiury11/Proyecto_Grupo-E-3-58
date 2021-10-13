<template>
    <div>
        <nav id="navbar" class="navbar">
        <ul>
          
        
          <li class="dropdown"><a href="#cuenta"><span>Cuenta</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#gastos">Gastos</a></li>
              <li><a href="#Ingresos">Ingresos</a></li>
              <li><a href="#Modificar">Modificar</a></li>
              <li><a href="#cerrarsesion">Cerrar Sesión</a></li>
            </ul>
          </li>
          
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
</template>

<style>
    /**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #013289;
  white-space: nowrap;
  transition: 0.3s;
}
.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #4154f1;
}
.navbar .getstarted, .navbar .getstarted:focus {
  background: #4154f1;
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 4px;
  color: #fff;
}
.navbar .getstarted:hover, .navbar .getstarted:focus:hover {
  color: #fff;
  background: #5969f3;
}
.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}
.navbar .dropdown ul li {
  min-width: 200px;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 15px;
  text-transform: none;
  font-weight: 600;
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #4154f1;
}
.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}
@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

</style>