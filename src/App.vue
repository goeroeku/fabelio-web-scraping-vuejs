<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Goeroeku</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/index" class="nav-link">Data Products</a>
        </li>
        <li class="nav-item">
          <a href="/form" class="nav-link">Add Product</a>
        </li>
      </div>
    </nav>

    <div class="container-fluid mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
