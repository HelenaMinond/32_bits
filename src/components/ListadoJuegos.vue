<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(val, i) in listadoProductos" :key="i">
          <th scope="row" :style="{backgroundColor: val.color}">{{ val.codigo }}</th>
          <td :style="{backgroundColor: val.color}">{{ val.nombre }}</td>
          <td :style="{backgroundColor: val.color}">{{ val.stock }}</td>
          <td :style="{backgroundColor: val.color}">{{ val.precio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "ListadoJuegos",
    computed: {
        ...mapGetters(["listadoProductos"])
    },
}
</script>

<style>
</style>