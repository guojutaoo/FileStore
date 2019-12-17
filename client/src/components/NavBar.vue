<template>
  <div class="navbar">
      <SideBar />
      <h1>Navbar</h1>
      <div class="iconGroup">
            <font-awesome-icon icon="history" id="icon" @click="showSideBar"/>
            
            <font-awesome-icon icon="star" id="icon"/>
            <font-awesome-icon icon="user-secret" id="icon"/>
            <font-awesome-icon icon="plus" id="icon" @click="showModal" v-b-modal.modal-prevent-closing/>
            <FileUpload v-if="showModal" />
      </div>
  </div>
</template>

<script>
import FileUpload from './FileUpload';
import SideBar from './SideBar';
export default {
    name: 'NavBar',
    components: {
        FileUpload,
        SideBar,
    },
    methods: {
        showModal(){
            this.show = true;
        },
        shwoSideBar(){
            this.shwoSideBar = false;
        }
    }
}
</script>

<style>
h1 {
    text-align: left;
    margin-left: 50px;
    color: white;
}
.navbar {
    background-image: radial-gradient(#16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    width: 100%;
    height: 80px;
    position: fixed;
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