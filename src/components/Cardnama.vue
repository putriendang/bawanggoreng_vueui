<template>
<div class="row">
<div class="col-lg-4 mt-3" v-for="(namapelanggans, index) in namapelanggan" :key="index">
<div class="card">
<div class="card-header">{{namapelanggans.nama_pelanggan}</div>
<div class="card-body">
<h5 class="card-title">{{namapelanggans.no_tlp}}</h5>
<p class="card-text">{{namapelanggans.alamat}}</p>
</div>
<div class="card-footer text-muted">
<router-link class="btn btn-primary" :to="{name:'Detailproduk', params:{id:namapelanggans.id}}">Detail</router-link>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["namapelanggan"],
};
</script>
