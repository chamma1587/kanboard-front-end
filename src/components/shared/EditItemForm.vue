<template>
   
    <div class="form-group">
      <div>
        <input v-if="editMode" type="test" v-model="form.title" class="input">
        <span v-if="!editMode">Title: {{viewData.title}}</span>
      </div>
      <div>
        <textarea  v-if="editMode" class="input"  v-model="form.description"></textarea>
        <span v-if="!editMode">Description: {{viewData.description}}</span>
      </div>
       <button  v-if="editMode"  :disabled="disabled" class="btn btn--md btn--blue btn--block" @click="updateItem()">Update</button>
       <button  v-if="!editMode"  class="btn btn--sm btn--blue" @click="changeMode()">Edit</button>
    </div>
 
</template>
<script>
import {BoardServices} from "../../services/boardService";

export default {
  name: "NewItemForm",
  props:{
    viewData:Object,
    editMode:Boolean,
  },
  data() {
    return {
      disabled:false,
      form:{
        title: this.$props.viewData.title,
        description:  this.$props.viewData.description
      }
    };
  },
  methods: {
    updateItem(){
      this.disabled = true;
       BoardServices.updateBoardItem(this.form, this.viewData.uuid)
        .then(response => {                        
          if (response.status === 200) {
           this.disabled = false;
           this.$emit('updateItem', this.form);
          }
        })
        .catch(error => {
         console.log(error);     
         this.disabled = false;    
        });     
    },
    changeMode() {
      this.$emit('changeMode');
    }
  }
};
</script>

