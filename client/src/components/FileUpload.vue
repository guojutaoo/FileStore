<template>
    <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
        <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FileUpload',
    methods: {
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
}
</script>

<style>
h1 {
    color: #000;
}
</style>