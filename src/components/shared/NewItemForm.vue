<template>
  
    <div class="form-group">
      <div>
        <input type="test" v-model="form.title"  placeholder="Title" class="input">
      </div>
      <div>
        <textarea class="input"  placeholder="Description"  v-model="form.description"></textarea>
      </div>
       <button class="btn btn--sm btn--blue" :disabled="disabled" @click="saveItem()">Save</button>
    </div>
 
</template>
<script>
import {BoardServices} from "../../services/boardService";

export default {
  name: "NewItemForm",
  props:{
    parentId:String,
  },
  data() {
    return {
      disabled:false,
      form:{
        title: null,
        description: null
      }
    };
  },
  methods: {
    saveItem(){     
      this.disabled = true;
       BoardServices.addBoardItem(this.form, this.parentId)
        .then(response => {                        
          if (response.status === 200) {
           this.disabled = false;
            this.$emit('saveItem');
          }
        })
        .catch(error => {
         console.log(error);     
         this.disabled = false;    
        });     
    }
  }
};
</script>
