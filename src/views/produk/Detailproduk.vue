<template>
    <div class="card text-center mt-4" v-for="p in produks" :key="p.id">
  <div class="card-header">
    Detail Produk
  </div>
  <div class="card-body">
    <h5 class="card-title">{{p.nama_produk}}</h5>
    <p class="card-text">{{p.harga_produk}}</p>
    <p class="card-text">{{p.varian_rasa}}</p>
   
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editproduk', params:{id:p.id}}">Edit</router-link>
        <button @click.prevent="produkDelete(p.id)" class="btn btn-danger">Delete</button>
  </div>
</div>

</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let produks = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/produk/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        produks.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });

    function produkDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/produk/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    
    return {
      produks,
      router, 
      produkDelete,
      route
    }
  },
}
</script>

