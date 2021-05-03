<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item mx-4">
                            <router-link to="/" style="color: white; text-decoration: none;">Inicio</router-link>
                        </li>
                        <li class="nav-item mx-4">
                            <router-link to="/busquedas" style="color: white; text-decoration: none;">Búsquedas</router-link>
                        </li>
                        <li class="nav-item mx-4">
                            <router-link to="/ventas" style="color: white; text-decoration: none;">Ventas</router-link>
                        </li>
                        <li class="nav-item mx-4">
                            <router-link to="/total" style="color: white; text-decoration: none;">Total</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

