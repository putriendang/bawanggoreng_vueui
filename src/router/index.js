import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/produk/Home.vue'
import Createproduk from '../views/produk/Createproduk.vue'
import Editproduk from '../views/produk/Editproduk.vue'
import Detailproduk from '../views/produk/Detailproduk.vue'
import Nama from '../views/namapelangggan/Nama.vue'
import Createnama from '../views/namapelangggan/Createnama.vue'
import Editnama from '../views/namapelangggan/Editnama.vue'
import Detailnama from '../views/namapelangggan/Detailnama.vue'

const routes = [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/createproduk',
name: 'Createproduk',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Createproduk
},
{
path: '/editproduk/:id',
name: 'Editproduk',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editproduk
},
{
path: '/detailproduk/:id',
name: 'Detailproduk',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Detailproduk
},
{
path: '/nama',
name: 'Nama',
component: Nama
},
{
path: '/createnama',
name: 'Createnama',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Createnama
},
{
path: '/editnama/:id',
name: 'Editnama',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editnama
},
{
path: '/detailnama/:id',
name: 'Detailnama',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Detailnama
}
]

const router = createRouter({
history: createWebHashHistory(),
routes
})

export default router

