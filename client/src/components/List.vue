<template>

  <div class="list">
       <div class="block">
           <div class="card">
                <img src="../assets/snow.jpg" alt="Italian Trulli" height="200" width="250">
                <div class="content">
                    <font-awesome-icon icon="star" id="bookmark"/>
                    <p class="className">EECS241</p>
                    <p class="description">Description</p>
                </div>
           </div>
            <div class="card">
                <img src="../assets/snow.jpg" alt="Italian Trulli" height="200" width="250">
                <div class="content">
                    <font-awesome-icon icon="star" id="bookmark"/>
                    <p class="className">EECS241</p>
                    <p class="description">Description</p>
                </div>
           </div>
            <div class="card">
                <img src="../assets/aurora.jpg" alt="Italian Trulli" height="200" width="250">
                <div class="content">
                    <font-awesome-icon icon="star" id="bookmark"/>
                    <p class="className">EECS241</p>
                    <p class="description">Description</p>
                </div>
           </div>
            <div class="card">
                <img src="../assets/snow.jpg" alt="Italian Trulli" height="200" width="250">
                <div class="content">
                    <font-awesome-icon icon="star" id="bookmark"/>
                    <p class="className">EECS241</p>
                    <p class="description">Description</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'List'
}
</script>

<style>
.list {
    padding-top: 50px;
    flex-direction: row;
}
.block {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    padding: 100px;
    /* background-color: red; */
}
.card {
    border: 0;
    margin-left: 50px;
}
img {
    border: none;
}

.content {
    text-align: left;
    font-weight: bold;
    height: 300px;
    margin-top: -200px;
    cursor: pointer;
}
#bookmark {
    font-size: 25px;
    color: grey;
    cursor: pointer;
    margin-left: 220px
}
#bookmark:hover {
    transition: 0.5s;
    color: #fff;
}

.content:hover {
    transition: 0.5s;
    box-shadow: 0 0 8px 2px #888;
}

.className{
    padding-top: 210px;
    padding-left: 10px;
    color: rgb(82, 211, 121);
}

.description{
    margin-top: -15px;
    margin-left: 10px;
    font-size: 13px;
    color: grey;
}

</style>