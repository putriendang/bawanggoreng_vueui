<template>
<div class="home">
<!--<img alt="Vue logo" src="../assets/logo.png"> -->
<Slider />
<hr class="my-3">
<router-link class="btn btn-primary" to="/createproduk">Add produk</router-link>

<Cardproduk :produk="produk" />

<table class="table">
<thead>
<tr>
<th scope="col">Nama Produk</th>
<th scope="col">Harga Produk</th>
<th scope="col">Varian Rasa</th>
<th scope="col">Aksi</th>
</tr>
</thead>
<tbody>
<tr v-for="(produks, index) in produk" :key="index">
<td>{{ produks.nama_produk }}</td>
<td>{{ produks.harga_produk }}</td>
<td>{{ produks.varian_rasa }}</td>
<td>
<router-link class="btn btn-success" :to="{name:'Editproduk', params:{id:produks.id}}">Edit</router-link>
<button @click.prevent="produkDelete(produks.id)" class="btn btn-danger">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardproduk from "@/components/Cardproduk.vue";
import { ref, onMounted } from 'vue';

export default {
name: "Home",
components: {
Slider,
Cardproduk,
},
setup(){
let produk = ref([])

onMounted(() => {
axios.get('http://127.0.0.1:8000/api/produk')
.then(response => {
produk.value = response.data.data
})
.catch(error => {
console.log(error)
})
})

function produkDelete(id){
axios.delete(`http://127.0.0.1:8000/api/produk/${id}`)
.then(()=>{
let z = this.produk.map(produk => produk.id).indexOf(id);
this.produk.splice(z, 1)
}).catch(error => {
console.log(error)
})
}

return {
produk,
produkDelete
}
}
};
</script>