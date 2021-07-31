<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Pelanggan</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Pelanggan</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="namapelanggans.nama_pelanggan" />
      <div class="alert alert-danger" v-if="validation.nama_pelanggan">
        {{ validation.nama_pelanggan[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">No Telepon</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="namapelanggans.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan Alamat"
    v-model="namapelanggans.alamat" />
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
   </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const namapelanggans = reactive({
     nama_pelanggan: '',
      no_tlp: '',
      alamat: '',
    })

    const validation = ref([])

    const router = useRouter()
    function store(){
      let nama_pelanggan= namapelanggans.nama_pelanggan
      let no_tlp= namapelanggans.no_tlp
      let alamat= namapelanggans.alamat

      axios.post('http://127.0.0.1:8000/api/namapelanggan', {
      nama_pelanggan:nama_pelanggan,
      no_tlp:no_tlp,
      alamat:alamat,
      }).then(() => {
        router.push({
          name:'Nama'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      namapelanggans,
      validation,
      router, 
      store
    
    }
  },
}
</script>