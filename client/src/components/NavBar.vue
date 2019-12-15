<template>
  <div class="navbar">
      <h1>Navbar</h1>
      <div class="iconGroup">
            <font-awesome-icon icon="history" id="icon"/>
            <font-awesome-icon icon="star" id="icon"/>
            <font-awesome-icon icon="user-secret" id="icon"/>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
h1 {
    text-align: left;
    margin-left: 50px;
}
.navbar {
    background-image: radial-gradient(#16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    width: 100%;
    height: 80px;
    position: fixed;
}
.iconGroup {
    position: absolute;
    margin-top: -60px;
    right: 0px;
}
#icon {
    font-size: 30px;
    margin-left: 10px;
    margin-right: 10px;
    color: grey;
    cursor: pointer;
}
#icon:hover {
    transition: 0.5s;
    color: #fff;
}
</style>