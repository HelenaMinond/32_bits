<template>
  <div class="container">

    <section class="my-4 text-center">
      <h1>Búsqueda de juegos</h1>
    </section>

    <section>
      <h2>Filtro por código:</h2>
      <input type="text" v-model="buscarCodigo">
      <p class="mt-3" v-for="(val, i) in filtroPorCodigo" :key="i">Nombre juego: {{val.nombre}}</p>
    </section>
    <hr />

    <section>
      <h2>Cantidad de juegos totales: {{totalProductos}}</h2>
    </section>
    <hr />

    <section>
      <h2>Listado de Juegos:</h2>
      <ListadoJuegos />
    </section>
  </div>
</template>

<script>
import ListadoJuegos from "../components/ListadoJuegos.vue";
import { mapGetters } from "vuex";
export default {
  name: "Busquedas",
  components: { 
    ListadoJuegos,
  },
  data() {
    return {
      buscarCodigo: "",
    }
  },
  computed: {
    ...mapGetters(["totalProductos", "filtroPorCodigo"]),
    filtroPorCodigo() {
        return this.$store.getters.filtroPorCodigo(this.buscarCodigo);
    }
  },
}
</script>
