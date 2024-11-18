<template>

  <div class="container">
    <router-view></router-view>
  </div>
</template>


<style>
.nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>