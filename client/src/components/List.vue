<template>
  <div class="list">
       <div class="block">
           <p>1</p>
           <p>1</p>
           <p>1</p>
       </div>
       <div class="block">
           <p>1</p>
           <p>1</p>
           <p>1</p>
       </div>
        <div class="block">
           <p>1</p>
           <p>1</p>
           <p>1</p>
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
    padding-top: 200px;
    flex-direction: row;
}
.block {
    /* flex-direction: column; */
    display: flex;
    background-color: yellow;
    margin-bottom: 50px;
}
.item {
    flex-direction: column;
}
</style>