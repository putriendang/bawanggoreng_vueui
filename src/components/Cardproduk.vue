<template>
<div class="row">
<div class="col-lg-4 mt-3" v-for="(produks, index) in produk" :key="index">
<div class="card">
<div class="card-header">{{produks.nama_produk}}</div>
<div class="card-body">
<h5 class="card-title">{{produks.harga_produk}}</h5>
<p class="card-text">{{produks.varian_rasa}}</p>
</div>
<div class="card-footer text-muted">
<router-link class="btn btn-primary" :to="{name:'Detailproduk', params:{id:produks.id}}">Detail</router-link>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["produk"],
};
</script>
