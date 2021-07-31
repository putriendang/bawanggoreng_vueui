<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Produk</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Produk</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="produks.nama_produk" />
      <div class="alert alert-danger" v-if="validation.nama_produk">
        {{ validation.nama_produk[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Harga Produk</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="produks.harga_produk"/>
    <div class="alert alert-danger" v-if="validation.harga_produk">
        {{ validation.harga_produk[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Varian Rasa</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan Varian Rasa"
    v-model="produks.varian_rasa" />
    <div class="alert alert-danger" v-if="validation.varian_rasa">
        {{ validation.varian_rasa[0] }}
      </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const produks = reactive({
      nama_produk: '',
      harga_produk: '',
      varian_rasa: ''
    })

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/produk/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama_produk)

     produks.nama_produk = response.data.data.nama_produk
      produks.harga_produk = response.data.data.harga_produk
      produks.varian_rasa = response.data.data.varian_rasa
      }).catch(error =>{
        console.log(error.response.data)
      })
      
    function update(){
      let nama_produk = produks.nama_produk
      let harga_produk = produks.harga_produk
      let varian_rasa = produks.varian_rasa
    

      axios.put(`http://127.0.0.1:8000/api/produk/${route.params.id}`, {
        nama_produk: nama_produk,
       harga_produk:harga_produk,
        varian_rasa: varian_rasa
        
      })
      .then(() => {
        router.push({
          name:'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      produks,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>
