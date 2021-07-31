<template>
<div class="nama">
<!--<img alt="Vue logo" src="../assets/logo.png"> -->
<Slider />
<hr class="my-3">
<router-link class="btn btn-primary" to="/createnama">Add Pelanggan</router-link>

<Cardnama :namapelanggan="namapelanggan" />

<table class="table">
<thead>
<tr>
<th scope="col">Nama Pelanggan</th>
<th scope="col">No Telepon</th>
<th scope="col">Alamat</th>
<th scope="col">Aksi</th>
</tr>
</thead>
<tbody>
<tr v-for="(namapelanggans, index) in namapelanggan" :key="index">
<td>{{ namapelanggans.nama_pelanggan}}</td>
<td>{{ namapelanggans.no_tlp }}</td>
<td>{{ namapelanggans.alamat }}</td>
<td>
<router-link class="btn btn-success" :to="{name:'Editnama', params:{id:namapelanggans.id}}">Edit</router-link>
<button @click.prevent="namaDelete(namapelanggans.id)" class="btn btn-danger">Delete</button>
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
import Cardnama from "@/components/Cardnama.vue";
import { ref, onMounted } from 'vue';

export default {
name: "Nama",
components: {
Slider,
Cardnama,
},
setup(){
let namapelanggan = ref([])

onMounted(() => {
axios.get('http://127.0.0.1:8000/api/namapelanggan')
.then(response => {
namapelanggan.value = response.data.data
})
.catch(error => {
console.log(error)
})
})

function namaDelete(id){
axios.delete(`http://127.0.0.1:8000/api/namapelanggan/${id}`)
.then(()=>{
let z = this.namapelanggan.map(namapelanggan => namapelanggan.id).indexOf(id);
this.namapelanggan.splice(z, 1)
}).catch(error => {
console.log(error)
})
}

return {
namapelanggan,
namaDelete
}
}
};
</script>