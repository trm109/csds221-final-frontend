<template>
  <div class="d-flex justify-center">
    <v-card class="d-flex justify-center" >
      <h1>Anonymous Chatroom</h1>
    </v-card>
  </div>
  <br>
  <EntryTable @damage="damage" @heal="heal" @entrySubmit="createEntry" :entries="entries" :tableName="'sometable'" :isLoading="isLoading" />
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import EntryTable from '../components/EntryTable.vue';
import EntryService from '../EntryService';

export default defineComponent({
  name: 'HomeView',
  
  components: {
    HelloWorld,
    EntryTable,
  },
  data() {
    return {
      entries: [
      ],
      isLoading: false,
    };
  },
  methods: {
    async damage(id){
      console.log('damage', id)
      //check if id is in entries
      this.isLoading = true;
      await this.deleteEntry(id);
      await this.reloadEntries();
      //if so, damage it
      this.isLoading = false;

    },
    async heal(id){
      console.log('heal', id)
      //check if id is in entries   
      this.isLoading = true;   
      await this.patchEntry(id);
      await this.reloadEntries();
      this.isLoading = false;
      
    },
    async getEntries(){
      const res = await EntryService.getEntries();
      console.log(res);
      return res;
    },
    async createEntry(text){
      const res = await EntryService.createEntry(text);
      console.log(res);
      await this.reloadEntries();
      return res;
    },
    async patchEntry(id){
      const res = await EntryService.patchEntry(id);
      console.log(res);
      return res;
    },
    async deleteEntry(id){
      const res = await EntryService.deleteEntry(id);
      console.log(res);
      return res;
    },
    async reloadEntries(){
      this.entries = await this.getEntries();
    }
  },
  async created(){
    console.log('Created')
    try{
      await this.reloadEntries();
    }catch(err){
      console.log(err);
    }
  }
});
</script>
