<template>
    <div class="container">
      
      <section class="my-4 text-center">
        <h1>Venta de juegos</h1>
      </section>

      <section>
        <h2>Cantidad de juegos con stock: {{totalProductos}}</h2>
      </section>
      <hr />

      <section>
        <h2>Venta de juegos:</h2>
        <ul v-for="(val, i) in filtroPorStock" :key="i">
          <li>
            {{ val.codigo }} | 
            {{ val.nombre }} | 
            {{ val.stock }} | 
            {{ val.precio }} | 
            <button type="button" class="btn btn-dark" @click="venderProductos(i)">vender</button>
          </li>
        </ul>
    </section>

    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Ventas",
  computed: {
    ...mapGetters(["totalProductos", "filtroPorStock"])
  },
  methods: {
    ...mapActions(["venderProductos"]),
  },
}
</script>
