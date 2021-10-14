import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Landing';
import Register from '@/views/Register';
import Expenses from '@/views/Expenses';
import Ingresos from '@/views/Income';
import Modificar from '@/views/ModifyExpense';
import Olvidar from  '@/views/NewPass';
import Restablecer from  '@/views/RestorePass';
import Login from '@/views/Login'


Vue.use(Router);

//export default new Router({
const router = new Router ({
    mode: 'history',
    routes: [
       {
           path: '/registro',
           name: 'registro',
           component: Register
       },
       {
           path: '/login',
           name: 'login',
           component: Login
       },
       {
        path: '/expenses',
        name: 'expenses',
        component: Expenses
       },
       {
        path: '/ingresos',
        name: 'ingresos',
        component: Ingresos
       },
       {
        path: '/modificar',
        name: 'modificar',
        component: Modificar
       },
       {
        path: '/olvido',
        name: 'olvidar',
        component: Restablecer
       },
       {
        path: '/restablecer',
        name: 'restablecer',
        component: Olvidar
       },
       {
        path: '/',
        name: 'inicio',
        component: Inicio,
    }
   ] 
});

router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth){
        //enviar al login
        if(!localStorage.getItem('user')){
            next({
                name: 'login'
            });
        }else{
            next();
        }
    }else{
        next();
    }

    if (to.meta.isAuth){
        if(localStorage.getItem('token')){
            next({
                name: 'expenses'
            });
        }else{
            next();
        }
    }else{
        next();
    }
});

export default router
