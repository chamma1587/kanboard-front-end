<template>
  <div class="contaner">
    <div class="main">
      <div class="board" v-for="(list,index) in lists" :key="list.uuid">
        <div class="board__title">
          <div class="inline-item">
            <span class="title-text">{{list.title}}</span>
          </div>
          <div class="auto-inline-item">
            <button class="btn btn--sm btn--red" @click="removeBoard(list.uuid)">x</button>
          </div>
        </div>
        <draggable
          :list="list.items.data"
          @remove="remove($event, index)"
          @view="view($event)"
          :key="list.uuid"
          :refKey="list.uuid"
          @changeItems="changeItems()"
        ></draggable>
        <div class="board__fotter">
          <button
            class="btn btn--blue btn--lg btn--block btn--no-border"
            @click="addItem(list.uuid)"
          >Add</button>
        </div>
      </div>
    </div>
    <div class="add-button">
      <button class="btn btn--green btn--lg btn--no-border" @click="addNewBoard()">Add New Board</button>
    </div>

    <modal name="view" class="modal" :width="300" :height="180" :adaptive="true">
      <edit-item-form
        @updateItem="updateItem()"
        :editMode="editMode"
        @changeMode="changeMode()"
        :viewData="viewData"
      ></edit-item-form>
    </modal>
    <modal name="new" :width="300" :height="180" :adaptive="true">
      <new-item-form @saveItem="saveItem()" :parentId="newBoardId"></new-item-form>
    </modal>

    <modal name="newBoard" :width="300" :height="120" :adaptive="true">
      <new-board-form @saveBoard="saveBoardData()"></new-board-form>
    </modal>
    <div class="export-button">
      <button
        class="btn btn--blue btn--lg btn--block btn--no-border"
        @click="addItem(list.uuid)"
      >Export</button>
    </div>
  </div>
</template>

<script>
import draggable from "../components/Draggable.vue";
import NewItemForm from "../components/shared/NewItemForm.vue";
import EditItemForm from "../components/shared/EditItemForm.vue";
import NewBoardForm from "../components/shared/NewBoardForm.vue";
import { BoardServices } from "../services/boardService";

export default {
  name: "Home",
  display: "Two list header slot",
  components: {
    draggable,
    NewItemForm,
    NewBoardForm,
    EditItemForm
  },
  data() {
    return {
      viewData: null,
      newBoardId: null,
      editMode: false,
      lists: {}
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      BoardServices.getBoards()
        .then(response => {
          console.log(response.status);

          if (response.status === 200) {
            this.lists = response.data.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    addItem: function(uuid) {
      console.log(uuid);

      this.newBoardId = uuid;
      this.$modal.show("new");
    },

    saveItem: function() {
      if (this.newBoardId !== null) {
        this.$modal.hide("new");
        this.newBoardId = null;
        this.loadData();
      }
    },

    remove: function(value, i) {
      let array = this.lists[i].items.data;
      const index = array.map(o => o.uuid).indexOf(value);
      if (index !== -1) {
        array.splice(index, 1);
        BoardServices.deleteBoardItem(value)
          .then(response => {
            if (response.status === 200) {
              console.log("done");
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    removeBoard: function(value) {
      let array = this.lists;
      const index = array.map(o => o.uuid).indexOf(value);
      if (index !== -1) {
        array.splice(index, 1);
        BoardServices.deleteBoard(value)
          .then(response => {
            if (response.status === 200) {
              console.log("done");
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    view: function(value) {
      this.viewData = value;
      if (this.viewData) {
        this.$modal.show("view");
      }
    },

    addNewBoard: function() {
      this.$modal.show("newBoard");
    },

    saveBoardData: function() {
      this.$modal.hide("newBoard");
      this.loadData();
    },

    changeItems() {
      BoardServices.updateBoards(this.lists)
        .then(response => {
          if (response.status === 200) {
           this.loadData();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    changeMode() {
      this.editMode = !this.editMode;
    },

    updateItem() {
      this.newItemParent = null;
      this.editMode = false;
      this.$modal.hide("view");
      this.loadData();
    }
  }
};
</script>