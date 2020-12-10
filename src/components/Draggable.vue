<template>
  <draggable id="first" :list="list" class="list-group" draggable=".item" group="a"  :component-data="getComponentData(refKey)">
    <div class="list-group-item item" v-for="element in list" :key="element.uuid">
      <div class="inline-item" @click="view(element)">{{ element.title }}</div>
      <div class="inline-item-auto">
        <button class="btn btn--sm btn--red" @click="remove(element.uuid)">x</button>
      </div>
    </div>
  </draggable>

</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "draggable-component",
  props: {
    list: Array,
    refKey:String
  },
  components: {
    draggable
  },
  data() {
    return {};
  },
  methods: {
    remove: function(value) {
      this.$emit("remove", value);
    },

    view: function(value) {
      this.$emit("view", value);
    },

    handleChange() {
      this.$emit("changeItems");
    },

    getComponentData() {
      return {
        on: {
          end: this.handleChange,         
        }       
      };
    }
  }
};
</script>

