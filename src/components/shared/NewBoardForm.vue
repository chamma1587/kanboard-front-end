<template>
  
    <div class="form-group">
      <div>
        <input type="test" v-model="form.title" class="input" placeholder="Board Name">
      </div>     
       <button class="btn btn--md btn--blue btn--block" :disabled="disabled" @click="save()">Save</button>
    </div>
 
</template>
<script>
import {BoardServices} from "../../services/boardService";

export default {
  name: "NewBoardForm", 
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
    save(){     
       this.disabled = true;
       BoardServices.addBoard(this.form)
        .then(response => {                        
          if (response.status === 200) {
           this.disabled = false;
           this.$emit('saveBoard');
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
