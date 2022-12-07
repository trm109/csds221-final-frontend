<template>
  <v-card class="d-flex justify-center" >
    <v-btn @click="toggleModal" color="primary" text>Add Message</v-btn>
    
    <EntryForm  v-if="showModal" @submit="entrySubmit" @cancel="entryCancel"/>
  </v-card>
  <ul>
    <li v-for="entry in entries">
      <EntryItem @damage="damage" @heal="heal" :message="entry.text" :health="entry.health" :id="entry._id" :isLoading="isLoading"/>
    </li>
  </ul>
</template>

<script>
import EntryItem from './EntryItem.vue'
import EntryForm from './EntryForm.vue'
export default {
  name: 'EntryTable',
  components: {
    EntryItem,
    EntryForm
  },
  props: {
    entries: {
      type: Array,
      required: true
    },
    tableName: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    damage(id){
      this.$emit('damage', id)
    },
    heal(id){
      this.$emit('heal', id)
    },
    toggleModal() {
      this.showModal = !this.showModal;
      console.log(this.showModal);
    },
    entrySubmit(text){
      this.showModal = false;
      this.$emit('entrySubmit', text);
      
    },
    entryCancel(){
      this.showModal = false;
    }
  },
  emits: ['damage', 'heal'],
  data() {
    return {
      showModal: false,
    };
  },
}
</script>

<style scoped>
ul{
  width: 66%;
  padding-left: 33%;
}
</style>>