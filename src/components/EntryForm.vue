<template>
    <div class="modal">
        <div class="modal-inner">
            <v-card>
        <v-card-title>
            <h3>Entry Form</h3>
        </v-card-title>
        <v-card-text>
            <v-text-field
            v-model="message"
            label="Message"
            required
            ></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="submit" color="primary" text>Submit</v-btn>
            <v-btn @click="cancel" color="primary" text>Cancel</v-btn>
        </v-card-actions>
    </v-card>
        </div>
    </div>
    
    
</template>

<script>
export default {
    name: 'EntryForm',
    methods:{
        submit(){
            this.$emit('submit', this.message);
            console.log('submit', this.message);
        },
        cancel(){
            this.$emit('cancel');
        }
    },
    emits: ['submit', 'cancel'],
    data() {
        return {
            message: '',
        };
    },
    
}
</script>
<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-inner {
  background: #fff;
  padding: 32px;
  color: black;
}
</style>