<template>
    <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Upload Your File"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Course name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="nameState"
          label="Description"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>

      </form>
    </b-modal>
  </div>

</template>


<script>
  // import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbTextarea, mdbBtn, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter } from 'mdbvue';
export default {
    name: 'FileUpload',
    // methods: {
    //   handleFileUpload(){
    //     this.file = this.$refs.file.files[0];
    //   }
    // },
     methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid ? 'valid' : 'invalid'
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs.modal.hide()
        })
      }
    },
    data() {
      return {
        name: '',
        nameState: null,
        submittedNames: []
      }
    }
    }
</script>

<style>
h1 {
    color: #000;
}
</style>