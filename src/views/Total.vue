<template>
    <div class="container">

      <section class="my-4 text-center">
        <h1>Total de ventas</h1>
      </section>

      <section>
        <h2>Ventas regitradas: {{listadoVentasRegistradas}} unidades</h2>
      </section>
      <hr />
  
      <section>
        <h2>Monto total de ventas: ${{montoTotalVentas--}}</h2>
      </section>
    </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Total",
  computed: {
    ...mapGetters(["montoTotalVentas","listadoVentasRegistradas"])
  },
}
</script>

<style>
</style>