import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [ 
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters: {
    listadoProductos(state){
      return state.data;
    },
    filtroPorStock(state){ 
      return state.data.filter(productos => productos.stock > 0)
    },
    totalProductos(state, getters){
      return getters.filtroPorStock.length;
    },
    filtroPorCodigo: (state) => (codigo) => { 
      return state.data.filter(producto => producto.codigo == codigo)
    },
    listadoVentasRegistradas(state){
      return state.data.reduce((acumulador, val) => {
        return acumulador + val.stock;
      },0);
    },
    montoTotalVentas(state){ 
      return state.data.reduce((acumulador, val) => {
        return acumulador + (val.precio*val.stock);
      },0);
    },
  },
  mutations: {
    restarProductos(state, i){ 
      if (state.data[i].stock > 0) {
        state.data[i].stock--;
      } else {
        alert("Producto sin stock")
        }
    }
  },
  actions: {
    venderProductos(context, i){  
      context.commit("restarProductos", i);
    },
  }
})
